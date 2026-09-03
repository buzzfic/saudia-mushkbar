/**
 * Shared shape for the appointment form's action state.
 *
 * Kept out of the "use server" module: a server-action file may only export
 * async functions, so the initial state constant has to live somewhere else.
 */
export type AppointmentState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level messages, keyed by input name. */
  errors: Record<string, string>;
  /** Values echoed back so a failed submit does not clear the form. */
  values: Record<string, string>;
};

export const initialAppointmentState: AppointmentState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};
