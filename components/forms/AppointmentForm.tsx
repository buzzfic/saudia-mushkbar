"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { submitAppointmentRequest } from "@/app/contact/actions";
import { initialAppointmentState } from "@/lib/appointment";
import { CONTACT } from "@/lib/constants";

const reasons = [
  "New patient appointment",
  "Same-day or urgent visit",
  "Annual physical or wellness visit",
  "Medicare annual wellness visit",
  "Switching my primary care doctor",
  "Follow-up appointment",
  "Something else",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="brand" size="lg" disabled={pending}>
      {pending ? "Sending…" : "Send Appointment Request"}
    </Button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-start gap-1.5 text-sm text-alert">
      <AlertCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

/**
 * Appointment request form.
 *
 * The original WordPress site had no form — appointments were booked by phone —
 * so the phone number stays the primary path and this is an additional option.
 * Validation runs on the server; the browser's own constraints are kept as a
 * first pass so the common cases never round-trip.
 */
export function AppointmentForm() {
  const [state, formAction] = useActionState(
    submitAppointmentRequest,
    initialAppointmentState,
  );

  // Stamped on the client once the form mounts and used server-side as a
  // simple bot check. Written straight to the DOM node so the server-rendered
  // markup stays identical and hydration cannot mismatch.
  const renderedAtRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (renderedAtRef.current) {
      renderedAtRef.current.value = String(Date.now());
    }
  }, []);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-brand/20 bg-mint p-8"
      >
        <CheckCircle2 className="size-8 text-brand" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-brand">
          Request received
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
          {state.message}
        </p>
        <p className="mt-4 text-[0.9375rem] text-body">
          Need care sooner? Call{" "}
          <a
            href={CONTACT.phoneHref}
            className="font-medium text-brand underline decoration-accent decoration-2 underline-offset-4"
          >
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-[4px] border border-alert/30 bg-accent-soft px-4 py-3 text-[0.9375rem] text-alert"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Full name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? "name-error" : undefined}
            className="mt-1.5"
          />
          <FieldError id="name-error" message={state.errors.name} />
        </div>

        <div>
          <Label htmlFor="phone">
            Phone number <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            defaultValue={state.values.phone}
            aria-invalid={Boolean(state.errors.phone)}
            aria-describedby={state.errors.phone ? "phone-error" : undefined}
            className="mt-1.5"
          />
          <FieldError id="phone-error" message={state.errors.phone} />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.values.email}
          aria-invalid={Boolean(state.errors.email)}
          aria-describedby={state.errors.email ? "email-error" : "email-hint"}
          className="mt-1.5"
        />
        {state.errors.email ? (
          <FieldError id="email-error" message={state.errors.email} />
        ) : (
          <p id="email-hint" className="mt-1.5 text-sm text-body">
            Optional unless you would like us to reply by email.
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="reason">
          Reason for your visit <span aria-hidden="true">*</span>
        </Label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue={state.values.reason ?? ""}
          aria-invalid={Boolean(state.errors.reason)}
          aria-describedby={state.errors.reason ? "reason-error" : undefined}
          className="mt-1.5 w-full rounded-[4px] border border-hairline bg-white px-4 py-3 text-[0.9375rem] text-ink transition-colors hover:border-brand/40 focus:border-brand focus:outline-none aria-[invalid=true]:border-alert"
        >
          <option value="" disabled>
            Please choose…
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        <FieldError id="reason-error" message={state.errors.reason} />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-brand">
          How should we reply? <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-5">
          {["Phone", "Email"].map((method) => (
            <label
              key={method}
              className="flex items-center gap-2 text-[0.9375rem] text-body"
            >
              <input
                type="radio"
                name="preferredContact"
                value={method}
                required
                defaultChecked={
                  (state.values.preferredContact ?? "Phone") === method
                }
                className="size-4 accent-[#2F4749]"
              />
              {method}
            </label>
          ))}
        </div>
        <FieldError
          id="preferredContact-error"
          message={state.errors.preferredContact}
        />
      </fieldset>

      <div>
        <Label htmlFor="message">Anything else we should know?</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          defaultValue={state.values.message}
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={
            state.errors.message ? "message-error" : "message-hint"
          }
          className="mt-1.5"
        />
        {state.errors.message ? (
          <FieldError id="message-error" message={state.errors.message} />
        ) : (
          <p id="message-hint" className="mt-1.5 text-sm text-body">
            Please do not include detailed medical information — this form is
            not a secure medical record.
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input
        ref={renderedAtRef}
        type="hidden"
        name="renderedAt"
        defaultValue="0"
      />

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton />
        <p className="text-sm text-body">
          Or call{" "}
          <a
            href={CONTACT.phoneHref}
            className="font-medium text-brand underline decoration-accent decoration-2 underline-offset-4"
          >
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
      </div>

      <p className="text-sm leading-relaxed text-body">
        For a medical emergency call 911 or go to the nearest emergency room.
      </p>
    </form>
  );
}
