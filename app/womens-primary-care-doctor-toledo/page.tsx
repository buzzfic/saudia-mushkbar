import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/LandingPage";
import { getLandingPage } from "@/lib/landing";
import { pageMetadata } from "@/lib/seo";

const data = getLandingPage("/womens-primary-care-doctor-toledo");

export const metadata: Metadata = pageMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: data.path,
});

export default function WomensPrimaryCareDoctorToledoPage() {
  return <LandingPage data={data} />;
}
