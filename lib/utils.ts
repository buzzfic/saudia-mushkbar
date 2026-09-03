import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Absolute URL for a site-relative path, honouring the trailing-slash setup. */
export function absoluteUrl(path: string, base: string) {
  if (path === "/") return `${base}/`;
  const clean = `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${base}${clean}`;
}
