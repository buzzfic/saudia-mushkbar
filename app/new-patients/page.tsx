import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/LandingPage";
import { getLandingPage } from "@/lib/landing";
import { pageMetadata } from "@/lib/seo";

const data = getLandingPage("/new-patients");

export const metadata: Metadata = pageMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: data.path,
});

export default function NewPatientsPage() {
  return <LandingPage data={data} />;
}
