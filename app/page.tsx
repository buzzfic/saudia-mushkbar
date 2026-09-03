import type { Metadata } from "next";

import { JsonLd } from "@/components/common/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { FamilyMedicineIntro } from "@/components/sections/FamilyMedicineIntro";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatIsFamilyMedicine } from "@/components/sections/WhatIsFamilyMedicine";
import { DoctorIntroduction } from "@/components/sections/DoctorIntroduction";
import { Conditions } from "@/components/sections/Conditions";
import { PrimaryCareServices } from "@/components/sections/PrimaryCareServices";
import { BookingProcess } from "@/components/sections/BookingProcess";
import { MediaAppearances } from "@/components/sections/MediaAppearances";
import { PatientReviews } from "@/components/sections/PatientReviews";
import { Publications } from "@/components/sections/Publications";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LocationCard } from "@/components/sections/LocationCard";
import { pageMetadata } from "@/lib/seo";
import { webPage } from "@/lib/structured-data";

const title =
  "Dr. Saudia Mushkbar, MD | Family Doctor & Primary Care in Toledo, Ohio";
const description =
  "As a family doctor in Toledo, Ohio, Dr. Saudia Mushkbar cares for children, adults, and seniors managing both everyday health concerns and long-term conditions.";

export const metadata: Metadata = {
  ...pageMetadata({ title, description, path: "/" }),
  // The homepage keeps its own full title rather than the "%s | Saudia
  // Mushkbar" template used by inner pages.
  title: { absolute: title },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPage({ path: "/", name: "Saudia Mushkbar", description })}
      />

      <Hero />
      <TrustStats />
      <FamilyMedicineIntro />
      <ServicesOverview />
      <Testimonials />
      <WhatIsFamilyMedicine />
      <DoctorIntroduction />
      <Conditions />
      <PrimaryCareServices />
      <BookingProcess />
      <MediaAppearances />
      <PatientReviews />
      <Publications />
      <LocationCard />
      <FinalCTA />
    </>
  );
}
