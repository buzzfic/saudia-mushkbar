/**
 * Content migrated verbatim from https://www.saudiamushkbar.com/ (audited
 * 2026-09-03). Copy is preserved as written on the WordPress site; only
 * obvious typography (curly quotes, en dashes) has been normalised.
 */

export type InsurancePlan = {
  name: string;
  logo: string;
  width: number;
  height: number;
  /**
   * Rendered height in px. Set per logo rather than shared, because these are
   * different kinds of lockup: a one-word wordmark is almost all lettering,
   * while a stacked mark is an icon plus two lines of small type. Matching
   * their heights makes the stacked ones look tiny, so each is sized until its
   * *lettering* reads at roughly the same size as the rest.
   */
  displayHeight: number;
};

/** Medicare Advantage plan logos shown on the homepage hero and Medicare page. */
export const insurancePlans: InsurancePlan[] = [
  { name: "Humana", logo: "/images/insurance/humana.webp", width: 1500, height: 309, displayHeight: 22 },
  { name: "Anthem", logo: "/images/insurance/anthem.svg", width: 172, height: 60, displayHeight: 30 },
  { name: "Aetna", logo: "/images/insurance/aetna.svg", width: 185, height: 36, displayHeight: 22 },
  { name: "MediGold", logo: "/images/insurance/medigold.webp", width: 2000, height: 864, displayHeight: 52 },
  { name: "UnitedHealthcare", logo: "/images/insurance/unitedhealthcare.png", width: 1417, height: 759, displayHeight: 52 },
  { name: "Medical Mutual", logo: "/images/insurance/medical-mutual.png", width: 599, height: 107, displayHeight: 24 },
];

export const insuranceSummary =
  "Humana • Anthem • Aetna • MediGold • UnitedHealthcare • Medical Mutual • and others.";

export const trustPoints = [
  "20+ years of experience",
  "Board certified in Family Medicine",
  "Compassionate, patient-focused care",
  "Accepting new patients",
];

export type ServiceCard = {
  title: string;
  description: string;
  /** Lucide icon name, resolved in the component layer. */
  icon: string;
  href?: string;
};

/** "Comprehensive Care for the Whole Family" — homepage services overview. */
export const services: ServiceCard[] = [
  {
    title: "Senior Care",
    description:
      "Dedicated care for healthy aging, mobility, memory, and overall wellness.",
    icon: "HeartHandshake",
    href: "/senior-primary-care-doctor-toledo",
  },
  {
    title: "Preventive Care",
    description: "Focused on prevention to keep you and your family healthy.",
    icon: "ShieldCheck",
    href: "/annual-physical-exam-toledo",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Expert care for diabetes, hypertension, heart disease and more.",
    icon: "Activity",
    href: "/diabetes-doctor-toledo",
  },
  {
    title: "Women’s Health",
    description: "Compassionate care for every stage of a woman’s life.",
    icon: "Flower2",
    href: "/womens-primary-care-doctor-toledo",
  },
  {
    title: "Pediatric & Adult Care",
    description: "Quality care for children, adults, and seniors alike.",
    icon: "Users",
    href: "/primary-care-doctor-toledo",
  },
  {
    title: "Weight Loss & Wellness",
    description:
      "GLP-1 programs and personalized plans to help you feel your best.",
    icon: "Sprout",
    href: "/weight-loss-doctor-toledo",
  },
];

/** "My Practice Covers a Wide Range of Care, Including:" */
export const conditions = [
  {
    title: "Chronic Disease Management",
    icon: "Activity",
    description:
      "Expert care for conditions such as high blood pressure, diabetes, asthma, and thyroid disorders, with a focus on long-term health.",
  },
  {
    title: "Preventive Screenings",
    icon: "Microscope",
    description:
      "Routine checks for cholesterol, blood sugar, cancer screenings, and other preventive tests to catch health issues early.",
  },
  {
    title: "Annual Physicals & Wellness Exams",
    icon: "ClipboardCheck",
    description:
      "Comprehensive yearly checkups for adults and children to monitor health, and update vaccinations.",
  },
  {
    title: "Women’s Health",
    icon: "Flower2",
    description:
      "Care tailored for women at every stage of life, including routine gynecological exams, family planning, and menopause support.",
  },
  {
    title: "Pediatric Care",
    icon: "Baby",
    description:
      "Compassionate medical services for children, including check-ups, vaccinations, and treatment for common childhood illnesses.",
  },
  {
    title: "Senior Care",
    icon: "HeartHandshake",
    description:
      "Dedicated primary care for older adults, focusing on healthy aging, medication management, and chronic disease support.",
  },
  {
    title: "General Health Concerns",
    icon: "Thermometer",
    description:
      "Same-day visits for common issues such as colds, flu, infections, allergies, and minor injuries.",
  },
];

/** "Patients Come to Me For Primary Care Services Such As:" */
export const primaryCareServices = [
  "Annual Physicals & Check-Ups",
  "Chronic Disease Management",
  "Preventive Screenings",
  "Women’s Health Services",
  "Pediatric Care",
  "Senior Care",
  "Same-Day Sick Visits",
];

/** "Simple Booking Process" */
export const bookingSteps = [
  { step: "1", title: "Schedule Your Appointment" },
  { step: "2", title: "Confirm Your Insurance" },
  { step: "3", title: "Meet With Dr. Mushkbar" },
  { step: "4", title: "Receive Your Personalized Care Plan" },
];

export const bookingIntro =
  "If you are concerned about any health condition you have or are worried you may have, we can discuss a functional approach to managing it.";

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
};

/** Featured patient reviews carried over from the homepage. */
export const featuredTestimonials: Testimonial[] = [
  {
    quote:
      "My previous doctor retired and I’m thankful Dr Mushkbar took me on. She is very thorough, listens to me and doesn’t rush. She is approachable and caring. Her office staff is friendly and welcoming. I highly recommend Dr Mushkbar.",
    author: "Martha D",
    source: "Google",
  },
  {
    quote:
      "Dr. Muskabar has been a wonderful doctor. As a new patient she was very thorough and discussed my concerns as she went over my history. She stays on top of health issues and always takes the time to discuss things with you and is very positive.",
    author: "L Scott",
    source: "Google",
  },
  {
    quote:
      "Dr. Mushkbar is an excellent doctor who pays attention to patients entire well-being. She takes the time to really understand the needs of her patients and has a wonderful bedside manner. She truely cares about making sure her patients have the best care. I highly recommend her.",
    author: "Erica Jaspers",
    source: "Google",
  },
];

/** "Trusted by Our Patients" — the Google review wall from the homepage. */
export const patientReviews: Testimonial[] = [
  {
    quote:
      "Dr. Saudia Mushkbar is an excellent doctor! She’s very caring, takes the time to really listen, and makes you feel comfortable and supported. I truly appreciate her compassion and professionalism.",
    author: "Arij Fatyma",
    source: "Google",
  },
  {
    quote:
      "Delightful. Great listener. Doesn’t seem rushed. I highly recommend Dr. Mushkbar.",
    author: "Marcia Woolf",
    source: "Google",
  },
  {
    quote:
      "Very personable and made me feel comfortable during our visit. Very knowledgeable and thorough. Would highly recommend Dr. Mushkbar.",
    author: "Vicki McGrath",
    source: "Google",
  },
  {
    quote:
      "The Doctor was very eager to help with any questions or issues I had. She is friendly and has high energy. It was a very pleasant experience.",
    author: "Ruth Frederick",
    source: "Google",
  },
  {
    quote:
      "Very thorough, so kind, so happy to have a nice young dr. Very impressive",
    author: "Kathy Poore",
    source: "Google",
  },
  {
    quote:
      "My visit today with Dr. Mushkbar went very well. I felt comfortable as she was pleasant, mindful of my concerns, and therefore answered all of my questions. Dr. Mushkbar along with her team in the office made my visit a very positive one. Thank you Dr. Mushkbar.",
    author: "Janet Pawlowski",
    source: "Google",
  },
  {
    quote: "The doctor is very nice and very approachable for her to help!",
    author: "Greg Kissner Sr.",
    source: "Google",
  },
  {
    quote:
      "Very attentive, awesome bedside manner. She shows care and compassionate for her patients.",
    author: "Dyandra Garrett",
    source: "Google",
  },
  {
    quote: "Luv her, she is excellent, thorough and detailed.",
    author: "rebecca charles",
    source: "Google",
  },
];

export type MediaAppearance = {
  title: string;
  outlet: string;
  embedUrl: string;
  /** Provider label shown on the click-to-load placeholder. */
  provider: "YouTube" | "WTOL 11" | "iHeartRadio";
};

/** "Health Insights & Media Appearances" */
export const mediaAppearances: MediaAppearance[] = [
  {
    title:
      "The GLP-1 Revolution: Dr. Mushkbar Discusses Ozempic, Mounjaro, and Weight Loss.",
    outlet: "YouTube",
    embedUrl: "https://www.youtube.com/embed/T79gMcfS1kk?si=4an0vFcdnt0IhHaL",
    provider: "YouTube",
  },
  {
    title:
      "Saudia Mushkbar with The Toledo Clinic shares what to look out for when it comes to high blood pressure.",
    outlet: "WTOL 11",
    embedUrl:
      "https://www.wtol.com/embeds/video/responsive/512-e8b70365-3af8-4be5-974c-86857942b0e4/iframe",
    provider: "WTOL 11",
  },
  {
    title:
      "Breaking Barriers: Dr. Mushkbar on the Evolution of Women in Medicine on WTOL TV",
    outlet: "WTOL 11",
    embedUrl:
      "https://www.wtol.com/embeds/video/responsive/512-930ae4a4-9a49-43eb-986a-1dafb94289ea/iframe",
    provider: "WTOL 11",
  },
  {
    title:
      "Dr. Saudia Mushkbar Highlights the Importance of Handwashing for Families During Winter on WTOL TV",
    outlet: "WTOL 11",
    embedUrl:
      "https://www.wtol.com/embeds/video/responsive/512-82e51679-ef8a-410b-94eb-604830dc0127/iframe",
    provider: "WTOL 11",
  },
  {
    title:
      "Dr. Saudia Mushkbar Discusses Women’s Health on the 100th Anniversary of Toledo Clinic with Fred LeFebvre",
    outlet: "iHeartRadio — Fred LeFebvre and the Morning News",
    embedUrl:
      "https://www.iheart.com/podcast/388-fred-lefebvre-and-the-morn-27091418/episode/dr-mushkbar-328134370/?embed=true",
    provider: "iHeartRadio",
  },
];

export type Publication = {
  title: string;
  source: string;
  byline?: string;
  href: string;
  linkLabel: string;
};

/** "Publications & Educational Resources" */
export const publications: Publication[] = [
  {
    title: "Chronic Pelvic Pain in Women",
    source: "American Family Physician (Mar 2016)",
    byline: "Speer LM, Mushkbar S, Erbele T.",
    href: "https://pubmed.ncbi.nlm.nih.gov/26926975/",
    linkLabel: "Read Article",
  },
  {
    title: "Uninjured Athlete with Edematous Arm",
    source: "The Hospitalist / MDedge",
    byline: "Mushkbar S.",
    href: "https://community.the-hospitalist.org/content/uninjured-athlete-edematous-arm-dx",
    linkLabel: "Read Case",
  },
  {
    title: "“Doctor, I’m So Tired!” — Chronic Fatigue",
    source: "Clinician Reviews (2016)",
    byline: "Speer LM & Mushkbar S.",
    href: "https://cdn.mdedge.com/files/s3fs-public/issues/articles/media_65ae95a_026%20CR0116%20ChronicFatigue.PDF",
    linkLabel: "Open PDF",
  },
  {
    title: "Chronic Pelvic Pain in Women (2025 AAFP)",
    source: "American Family Physician (Mar 2025)",
    href: "https://www.aafp.org/pubs/afp/issues/2025/0300/chronic-pelvic-pain-women.html",
    linkLabel: "View Article",
  },
  {
    title: "45-Year-Old Female — Wellness Visit (Case)",
    source: "Course Hero — Family Medicine Case",
    href: "https://www.coursehero.com/file/138823506/Family-Medicine-01-45-year-old-female-wellness-visitpdf/",
    linkLabel: "Open Case",
  },
  {
    title: "Case 1: Female Annual Exam",
    source: "Course Hero — Family Medicine Case",
    href: "https://www.coursehero.com/file/105707593/Case1-Female-Annual-Exampdf/",
    linkLabel: "Open Case",
  },
];

/** Long-form copy blocks preserved from the WordPress pages. */
export const copy = {
  familyMedicineIntro:
    "Dr. Saudia Mushkbar provides trusted Family Medicine and Primary Care for children, adults, and seniors. Her focus is on preventive care, chronic disease management, and personalized care for every patient.",
  whatIsFamilyMedicine:
    "Family Medicine focuses on providing comprehensive healthcare for patients of all ages. As a family doctor in Toledo, Ohio, Dr. Saudia Mushkbar cares for children, adults, and seniors managing both everyday health concerns and long-term conditions. This approach emphasizes preventive care, routine checkups, and personalized treatment to keep you and your family healthy at every stage of life.",
  doctorBio:
    "We’re thrilled to welcome Dr. Saudia Mushkbar to our new primary care office, where her over 20 years of experience, including her role as an Assistant Professor and core faculty member in a family medicine residency program and her work in hospital medicine with the Toledo Clinic, brings a unique blend of clinical excellence and heartfelt compassion to every patient interaction. Passionate about building lasting relationships, Dr. Mushkbar listens closely to her patients, delivering personalized care that focuses on wellness at every stage of life, helping manage chronic conditions, prioritizing preventive care, and addressing health concerns with confidence and clarity. At our office, we believe great healthcare starts with trust and connection, and Dr. Mushkbar and her team are dedicated to providing the thoughtful, high-quality care you and your family deserve.",
  mediaIntro:
    "Dr. Saudia Mushkbar shares medical insights on important health topics across television, radio and other media.",
  publicationsIntro: "Authored and co-authored pieces by Dr. Saudia Mushkbar.",
  medicareIntro:
    "Dr. Saudia Mushkbar provides comprehensive Family Medicine and Primary Care for adults and seniors in Toledo and surrounding Northwest Ohio communities.",
  medicareParticipation:
    "Dr. Mushkbar participates with select Medicare Advantage plans from:",
  medicareDisclaimer:
    "Plan participation and network status vary by specific plan and may change. Please call 419-517-7687 to confirm that Dr. Mushkbar participates with your individual plan.",
  medicareBio:
    "Dr. Saudia Mushkbar is a Board-Certified Family Medicine physician with more than 20 years of experience providing compassionate, comprehensive care for the whole family.",
} as const;

/** Medicare page: "Comprehensive Primary Care for Adults & Seniors" */
export const medicareServices = [
  "Medicare Annual Wellness Visits",
  "Preventive Care & Screenings",
  "Chronic Disease Management",
  "Diabetes Care",
  "High Blood Pressure Management",
  "Cholesterol Management",
  "Medication Management",
  "Women’s Health",
  "Same-Day Sick Visits",
  "Weight Loss & Wellness",
];

/** Medicare page: closing reassurance cards. */
export const medicareAssurances = [
  {
    title: "Accepting New Patients",
    description: "We welcome new patients of all ages.",
    icon: "UserPlus",
  },
  {
    title: "Most Insurance Accepted",
    description:
      "We accept Medicare, Medicare Advantage and most major insurance plans.",
    icon: "ShieldCheck",
  },
  {
    title: "Same-Day & Same-Week Appointments",
    description: "We offer convenient appointment options when you need care.",
    icon: "CalendarClock",
  },
  {
    title: "Personalized Care",
    description: "Your health goals are our priority.",
    icon: "HeartHandshake",
  },
];
