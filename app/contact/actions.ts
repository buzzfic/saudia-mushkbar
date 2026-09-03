"use server";

import { CONTACT } from "@/lib/constants";
import type { AppointmentState } from "@/lib/appointment";

const FIELDS = [
  "name",
  "phone",
  "email",
  "reason",
  "preferredContact",
  "message",
] as const;

const REASONS = new Set([
  "New patient appointment",
  "Same-day or urgent visit",
  "Annual physical or wellness visit",
  "Medicare annual wellness visit",
  "Switching my primary care doctor",
  "Follow-up appointment",
  "Something else",
]);

const CONTACT_METHODS = new Set(["Phone", "Email"]);

function readValues(formData: FormData) {
  const values: Record<string, string> = {};
  for (const field of FIELDS) {
    values[field] = String(formData.get(field) ?? "").trim();
  }
  return values;
}

/**
 * Handles an appointment request.
 *
 * Spam protection is a hidden honeypot field plus a minimum time-on-form
 * check — no third-party script, no cookies, nothing that blocks rendering.
 * Delivery credentials live only in server-side environment variables and are
 * never referenced from client code.
 */
export async function submitAppointmentRequest(
  _previousState: AppointmentState,
  formData: FormData,
): Promise<AppointmentState> {
  const values = readValues(formData);

  // Honeypot: a real visitor never sees or fills this field.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", message: "Thank you — your request has been sent.", errors: {}, values: {} };
  }

  // Bots typically submit instantly; require at least three seconds on the form.
  const renderedAt = Number(formData.get("renderedAt") ?? 0);
  if (renderedAt > 0 && Date.now() - renderedAt < 3000) {
    return {
      status: "error",
      message: "That was submitted a little too quickly. Please try again.",
      errors: {},
      values,
    };
  }

  const errors: Record<string, string> = {};

  if (values.name.length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (values.name.length > 120) {
    errors.name = "Please keep your name under 120 characters.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Please enter a phone number we can reach you on.";
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "Please check the email address.";
  }

  if (!REASONS.has(values.reason)) {
    errors.reason = "Please choose a reason for your visit.";
  }

  if (!CONTACT_METHODS.has(values.preferredContact)) {
    errors.preferredContact = "Please choose how you would like us to reply.";
  }

  if (values.preferredContact === "Email" && !values.email) {
    errors.email = "Add an email address so we can reply by email.";
  }

  if (values.message.length > 2000) {
    errors.message = "Please keep your message under 2000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    // Fail loudly rather than pretending the message was delivered.
    console.warn(
      "Appointment request received but email delivery is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL.",
    );
    return {
      status: "error",
      message: `Online requests are not available right now. Please call the office at ${CONTACT.phoneDisplay} and we will book your visit.`,
      errors: {},
      values,
    };
  }

  const lines = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email || "Not provided"}`,
    `Reason: ${values.reason}`,
    `Preferred contact: ${values.preferredContact}`,
    "",
    "Message:",
    values.message || "(none)",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email || undefined,
        subject: `Appointment request — ${values.name}`,
        text: lines,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email provider responded with ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to deliver appointment request", error);
    return {
      status: "error",
      message: `We could not send your request. Please call the office at ${CONTACT.phoneDisplay}.`,
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thank you — your request has been sent. Our office will contact you to confirm your appointment.",
    errors: {},
    values: {},
  };
}
