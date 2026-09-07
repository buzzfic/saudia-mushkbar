import type { LandingPageData } from "@/lib/landing-types";

/**
 * Content for the service landing pages.
 *
 * Claims about the practice are limited to what the live site publishes:
 * board certification in Family Medicine, 20+ years of experience, Medicare and
 * Medicare Advantage participation, same-day and same-week appointments,
 * accepting new patients, and the Toledo office location. Service descriptions
 * say what a visit covers — no outcomes, guarantees or statistics.
 */

const WHITE_COAT = {
  src: "/images/doctor/doctor-saudia-mushkbar-white-coat.jpg",
  alt: "Dr. Saudia Mushkbar, MD, family medicine physician in Toledo, Ohio, in a Toledo Clinic white coat",
  width: 1706,
  height: 2560,
} as const;

/** Reasons shared by most pages, phrased from facts published on the site. */
const commonReasons = [
  {
    label: "Board-certified in Family Medicine",
    text: "care for children, adults and seniors from one physician.",
  },
  {
    label: "Over 20 years of experience",
    text: "including work as an assistant professor and core faculty member in a family medicine residency program.",
  },
  {
    label: "Same-day & same-week appointments",
    text: "when you need to be seen sooner.",
  },
  {
    label: "Accepting new patients",
    text: "Medicare, Medicare Advantage and most major insurance plans.",
  },
  {
    label: "Conveniently located in Toledo",
    text: "at The Toledo Clinic on N. Holland-Sylvania Road.",
  },
];

export const landingPages: LandingPageData[] = [
  // ---------------------------------------------------------------- same-day
  {
    path: "/same-day-primary-care-toledo",
    label: "Same-Day Primary Care",
    metaTitle: "Same-Day Primary Care in Toledo, OH",
    metaDescription:
      "Feeling unwell today? Dr. Saudia Mushkbar, MD offers same-day appointments in Toledo for urgent, non-emergency concerns like colds, flu, sore throat and infections.",
    serviceName: "Same-day primary care visit",
    badge: { label: "Same-Day Care", icon: "CalendarClock" },
    headingLead: "Same-Day",
    headingAccent: "Primary Care",
    tagline: "When you need care, we’re here today.",
    intro:
      "Not feeling well? Don’t wait. Dr. Saudia Mushkbar, MD offers same-day appointments for urgent, non-emergency health concerns — so you can be seen by a physician who knows family medicine rather than sitting in an urgent care queue.",
    points: [
      { title: "Same-day appointments", description: "Get seen today.", icon: "CalendarClock" },
      { title: "Convenient & quick access", description: "Easy scheduling by phone.", icon: "CalendarCheck" },
      { title: "Compassionate care", description: "Every visit matters.", icon: "HandHeart" },
      { title: "One familiar practice", description: "Follow-up with your own doctor.", icon: "Stethoscope" },
    ],
    image: {
      src: "/images/doctor/same-day-primary-care-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD in her Toledo office beside a panel headed “Same-Day Appointments Available”, listing common reasons for a same-day visit: cold, flu and cough; sore throat; ear pain; urinary symptoms; rashes and skin issues; minor injuries; and more — with the office number, 419-517-7687",
      width: 1224,
      height: 1285,
    },
    grid: {
      title: "Comprehensive Primary Care Services",
      items: [
        { title: "Care for the whole family", description: "Adults, seniors and children of all ages.", icon: "Users" },
        { title: "Preventive care & screenings", description: "Annual physicals, wellness visits and screenings.", icon: "ShieldCheck" },
        { title: "Chronic disease management", description: "Diabetes, hypertension, cholesterol, asthma and more.", icon: "Activity" },
        { title: "Medication management", description: "Reviewing and adjusting your prescriptions.", icon: "Pill" },
        { title: "Women’s health", description: "Care for women at every stage of life.", icon: "Flower2" },
        { title: "Pediatric care", description: "Check-ups, vaccinations and childhood illnesses.", icon: "Baby" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: [
        { label: "Personalized attention", text: "she listens and builds a plan around you." },
        ...commonReasons.slice(1),
      ],
    },
    cta: {
      title: "Ready for Care Today?",
      description: "We make it easy to get the care you need — today.",
    },
    closing: {
      lead: "Your health is our priority. Compassionate care for you and your family — today and for years to come.",
      script: "We look forward to caring for you.",
    },
    related: [
      "/primary-care-doctor-toledo",
      "/annual-physical-exam-toledo",
      "/new-patients",
    ],
  },

  // ------------------------------------------------------------- primary care
  {
    path: "/primary-care-doctor-toledo",
    label: "Primary Care in Toledo",
    metaTitle: "Primary Care Doctor in Toledo, Ohio",
    metaDescription:
      "Dr. Saudia Mushkbar, MD is a board-certified family medicine physician providing primary care for children, adults and seniors in Toledo and Northwest Ohio.",
    serviceName: "Primary care",
    badge: { label: "Primary Care", icon: "Stethoscope" },
    headingLead: "Your Primary Care",
    headingAccent: "Doctor in Toledo",
    tagline: "One physician for your whole family.",
    intro:
      "Family Medicine focuses on comprehensive healthcare for patients of all ages. As a family doctor in Toledo, Ohio, Dr. Saudia Mushkbar cares for children, adults, and seniors managing both everyday health concerns and long-term conditions, with an emphasis on preventive care, routine checkups and personalized treatment.",
    points: [
      { title: "All ages welcome", description: "Children, adults and seniors.", icon: "Users" },
      { title: "Preventive focus", description: "Screenings and yearly checkups.", icon: "ShieldCheck" },
      { title: "Long-term partnership", description: "Continuity across every stage of life.", icon: "HeartHandshake" },
      { title: "Same-week access", description: "Appointments when you need them.", icon: "CalendarClock" },
    ],
    aside: { kind: "trust" },
    image: WHITE_COAT,
    grid: {
      title: "Comprehensive Primary Care Services",
      items: [
        { title: "Annual physicals & check-ups", description: "Yearly visits to monitor your health.", icon: "ClipboardCheck" },
        { title: "Chronic disease management", description: "Diabetes, blood pressure, thyroid and asthma.", icon: "Activity" },
        { title: "Preventive screenings", description: "Cholesterol, blood sugar and cancer screenings.", icon: "Microscope" },
        { title: "Women’s health services", description: "Routine exams, family planning and menopause support.", icon: "Flower2" },
        { title: "Pediatric care", description: "Check-ups, vaccinations and common illnesses.", icon: "Baby" },
        { title: "Same-day sick visits", description: "Colds, flu, infections, allergies and minor injuries.", icon: "Thermometer" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Ready to Get Started?",
      description: "Dr. Mushkbar is welcoming new patients of all ages.",
    },
    closing: {
      lead: "Great healthcare starts with trust and connection.",
      script: "We look forward to caring for you and your family.",
    },
    related: [
      "/same-day-primary-care-toledo",
      "/annual-physical-exam-toledo",
      "/senior-primary-care-doctor-toledo",
    ],
  },

  // ------------------------------------------------------------------ women's
  {
    path: "/womens-primary-care-doctor-toledo",
    label: "Women’s Primary Care",
    metaTitle: "Women’s Primary Care Doctor in Toledo, OH",
    metaDescription:
      "Dr. Saudia Mushkbar, MD provides primary care for women in Toledo — routine exams, contraception counseling, menopause support and chronic condition management.",
    serviceName: "Women’s primary care",
    badge: { label: "Women’s Primary Care", icon: "Flower2" },
    headingLead: "Women’s",
    headingAccent: "Primary Care",
    tagline: "Compassionate care for every stage of life.",
    intro:
      "Dr. Saudia Mushkbar, MD provides personalized, comprehensive primary care for women of all ages. From preventive care and wellness to managing chronic conditions, care is tailored to where you are in life.",
    points: [
      { title: "Personalized care", icon: "HandHeart" },
      { title: "Women’s health expertise", icon: "Flower2" },
      { title: "Same-day & same-week appointments", icon: "CalendarClock" },
      { title: "Compassionate, respectful support", icon: "MessageCircleHeart" },
    ],
    image: {
      src: "/images/doctor/womens-primary-care-doctor-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD with a patient beside a panel headed “Women’s Health Care At Every Stage of Life”, listing annual wellness exams, pap smears and breast exams, menstrual and hormonal health, contraception counseling, preconception and pregnancy planning, menopause support, bone health screening, management of chronic conditions, and personalized care for all women",
      width: 1536,
      height: 1024,
    },
    grid: {
      title: "Comprehensive Women’s Health Services",
      items: [
        { title: "Preventive care & screenings", description: "Routine exams and screenings to keep you healthy.", icon: "ShieldCheck" },
        { title: "Reproductive health", description: "Routine exams, contraception and family planning.", icon: "Flower2" },
        { title: "Hormone & menopause support", description: "Support through hormonal changes and menopause symptoms.", icon: "Sprout" },
        { title: "Chronic condition management", description: "Diabetes, hypertension, thyroid and more.", icon: "Activity" },
        { title: "Mental & emotional well-being", description: "Your mental health is part of your primary care.", icon: "Heart" },
        { title: "Care for all ages", description: "From teens to seniors.", icon: "Users" },
      ],
    },
    whyChoose: {
      title: "Why Women Choose Dr. Mushkbar",
      items: [
        { label: "A woman physician who listens", text: "care built around your goals and comfort." },
        ...commonReasons.slice(0, 4),
      ],
    },
    cta: {
      title: "Prioritize Your Health Today",
      description: "Schedule your appointment and get care built around you.",
    },
    closing: {
      lead: "Your health is our priority — compassionate care for you at every stage.",
      script: "We look forward to caring for you.",
    },
    related: [
      "/annual-physical-exam-toledo",
      "/primary-care-doctor-toledo",
      "/weight-loss-doctor-toledo",
    ],
  },

  // ----------------------------------------------------------------- diabetes
  {
    path: "/diabetes-doctor-toledo",
    label: "Diabetes Care",
    metaTitle: "Diabetes Doctor in Toledo, OH — Primary Care for Diabetes",
    metaDescription:
      "Dr. Saudia Mushkbar, MD provides primary care for type 1 and type 2 diabetes in Toledo — blood sugar monitoring, A1C testing, medication and lifestyle support.",
    serviceName: "Diabetes management",
    badge: { label: "Diabetes Care", icon: "Droplet" },
    headingLead: "Diabetes",
    headingAccent: "Primary Care",
    tagline: "Better control. Better health. Better life.",
    intro:
      "Dr. Saudia Mushkbar, MD provides expert, compassionate diabetes care as part of your primary care — helping you manage your blood sugar, keep up with the screenings that matter, and stay on top of your overall health.",
    points: [
      { title: "Better control", description: "Personalized plans to manage blood sugar.", icon: "Gauge" },
      { title: "Prevent complications", description: "Screening for heart, kidney and eye health.", icon: "ShieldCheck" },
      { title: "Whole-person care", description: "Nutrition, lifestyle and medication support.", icon: "Apple" },
      { title: "Ongoing support", description: "Regular follow-ups and same-day access.", icon: "CalendarCheck" },
    ],
    image: {
      src: "/images/doctor/diabetes-doctor-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD in her Toledo office beside a panel headed “Diabetes Care”, listing blood sugar monitoring, medication management, nutrition and lifestyle guidance, preventing complications, and ongoing support",
      width: 1224,
      height: 1285,
    },
    grid: {
      title: "Comprehensive Diabetes Care Services",
      items: [
        { title: "Diabetes management", description: "Treatment plans built around your health goals.", icon: "Droplet" },
        { title: "Blood sugar monitoring", description: "Regular monitoring and A1C testing.", icon: "Gauge" },
        { title: "Nutrition counseling", description: "Practical guidance on eating well.", icon: "Apple" },
        { title: "Lifestyle support", description: "Exercise, stress management and daily habits.", icon: "Footprints" },
        { title: "Complication prevention", description: "Screening to protect your heart, eyes and kidneys.", icon: "ShieldCheck" },
        { title: "Ongoing follow-up", description: "Regular check-ins to keep your plan on track.", icon: "CalendarCheck" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Take Control of Your Health",
      description: "Schedule an appointment to talk through your diabetes care.",
    },
    closing: {
      lead: "Compassionate care, personalized treatment and a plan you can live with.",
      script: "We’re here for you — today and every day.",
    },
    related: [
      "/high-blood-pressure-doctor-toledo",
      "/weight-loss-doctor-toledo",
      "/annual-physical-exam-toledo",
    ],
  },

  // ------------------------------------------------------------ blood pressure
  {
    path: "/high-blood-pressure-doctor-toledo",
    label: "High Blood Pressure Care",
    metaTitle: "High Blood Pressure Doctor in Toledo, OH",
    metaDescription:
      "Dr. Saudia Mushkbar, MD manages high blood pressure and hypertension in Toledo — regular monitoring, medication management and lifestyle support.",
    serviceName: "Hypertension management",
    badge: { label: "Blood Pressure Care", icon: "HeartPulse" },
    headingLead: "High Blood Pressure",
    headingAccent: "& Hypertension Care",
    tagline: "Steady numbers. Steady peace of mind.",
    intro:
      "High blood pressure often has no symptoms, which is why regular monitoring matters. Dr. Saudia Mushkbar, MD manages hypertension as part of your primary care — tracking your readings, reviewing your medications and looking after the rest of your health at the same time.",
    points: [
      { title: "Regular monitoring", description: "Readings tracked over time.", icon: "Gauge" },
      { title: "Medication management", description: "Reviewed and adjusted as needed.", icon: "Pill" },
      { title: "Lifestyle support", description: "Diet, activity and stress.", icon: "Footprints" },
      { title: "Whole-person care", description: "Heart, kidney and cholesterol health.", icon: "HeartPulse" },
    ],
    // No floating card: the portrait carries its own "We Help You" panel, so a
    // second card on top would stack one over the other.
    image: {
      src: "/images/doctor/high-blood-pressure-doctor-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD in her Toledo office beside a panel headed “Take Control of Your Blood Pressure”, listing accurate blood pressure checks, a personalized treatment plan, lowering your risk, lifestyle support, medication management, and ongoing follow-up",
      width: 1024,
      height: 1536,
    },
    grid: {
      title: "Comprehensive Hypertension Care",
      items: [
        { title: "Regular monitoring", description: "In-office readings and home monitoring guidance.", icon: "Gauge" },
        { title: "Medication management", description: "Finding a regimen that works for you.", icon: "Pill" },
        { title: "Cholesterol management", description: "Screening and treatment alongside blood pressure.", icon: "Microscope" },
        { title: "Heart health screening", description: "Watching for related cardiovascular risks.", icon: "HeartPulse" },
        { title: "Nutrition & lifestyle", description: "Practical changes that support your numbers.", icon: "Apple" },
        { title: "Ongoing follow-up", description: "Regular reviews so nothing drifts.", icon: "CalendarCheck" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Get Your Numbers Checked",
      description: "Book a visit to review your blood pressure and overall health.",
    },
    closing: {
      lead: "Managing blood pressure well today protects your health for years to come.",
      script: "We’re here to help you stay on track.",
    },
    related: [
      "/diabetes-doctor-toledo",
      "/annual-physical-exam-toledo",
      "/senior-primary-care-doctor-toledo",
    ],
  },

  // -------------------------------------------------- medicare wellness visit
  {
    path: "/medicare-annual-wellness-visit-toledo",
    label: "Medicare Annual Wellness Visit",
    metaTitle: "Medicare Annual Wellness Visit in Toledo, OH",
    metaDescription:
      "Schedule your Medicare Annual Wellness Visit with Dr. Saudia Mushkbar, MD in Toledo — a yearly review of your health history, medications and preventive care plan.",
    serviceName: "Medicare Annual Wellness Visit",
    badge: { label: "Medicare Wellness", icon: "ClipboardCheck" },
    headingLead: "Medicare Annual",
    headingAccent: "Wellness Visit",
    tagline: "Your health. Your plan. Your peace of mind.",
    intro:
      "Your Medicare Annual Wellness Visit is an opportunity to step back and look at your health as a whole, then build a plan for the year ahead. Dr. Saudia Mushkbar, MD provides personalized, preventive care to help you stay healthy, independent and in control.",
    points: [
      { title: "Covered by Medicare", description: "Part of your Medicare benefits.", icon: "ShieldCheck" },
      { title: "Personalized prevention", description: "Care tailored to your needs.", icon: "ClipboardCheck" },
      { title: "Early detection", description: "Identify risks and catch problems early.", icon: "Microscope" },
      { title: "A plan for the year", description: "Clear next steps you can follow.", icon: "CalendarCheck" },
    ],
    image: {
      src: "/images/doctor/medicare-annual-wellness-visit-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD with an older patient beside a panel headed “Your Annual Wellness Visit”, listing review of your health history, updating your medications, checking vital signs, cognitive health screening, depression screening, fall risk assessment, preventive screenings, health education and counseling, and a personalized prevention plan",
      width: 1024,
      height: 1536,
    },
    grid: {
      title: "What Your Medicare Annual Wellness Visit Covers",
      items: [
        { title: "Health risk assessment", description: "We review your health history, lifestyle and risks.", icon: "ClipboardCheck" },
        { title: "Personalized care plan", description: "A plan tailored to your health goals.", icon: "Heart" },
        { title: "Preventive screenings", description: "Staying up to date on screenings and vaccines.", icon: "Syringe" },
        { title: "Cognitive assessment", description: "A check of memory and cognitive function.", icon: "Microscope" },
        { title: "Fall risk evaluation", description: "Identifying risks and ways to prevent falls.", icon: "Footprints" },
        { title: "Lifestyle counseling", description: "Nutrition, exercise, weight and stress management.", icon: "Apple" },
      ],
    },
    whyChoose: {
      title: "Why Choose Dr. Mushkbar?",
      items: [
        { label: "Board-certified in Family Medicine", text: "with a focus on preventive care." },
        { label: "Over 20 years of experience", text: "caring for adults and seniors." },
        { label: "Compassionate, patient-centered approach" },
        { label: "Same-day & same-week appointments available" },
        { label: "Accepting new Medicare & Medicare Advantage patients" },
        { label: "Conveniently located in Toledo, OH" },
      ],
    },
    cta: {
      title: "Schedule Your Wellness Visit",
      description: "Take a proactive step toward better health — we’re here for you.",
    },
    closing: {
      lead: "Your health is our priority — compassionate care for you and your family, today and for years to come.",
      script: "We look forward to caring for you.",
    },
    related: [
      "/medicare-primary-care-doctor-toledo",
      "/switch-medicare-primary-care-doctor-toledo",
      "/senior-primary-care-doctor-toledo",
    ],
  },

  // ----------------------------------------------------------- annual physical
  {
    path: "/annual-physical-exam-toledo",
    label: "Annual Physical & Wellness Exam",
    metaTitle: "Annual Physical & Wellness Exam in Toledo, OH",
    metaDescription:
      "Book your annual physical with Dr. Saudia Mushkbar, MD in Toledo — a comprehensive yearly checkup for adults and children with screenings and vaccinations.",
    serviceName: "Annual physical examination",
    badge: { label: "Annual Physical", icon: "ClipboardCheck" },
    headingLead: "Annual Physical &",
    headingAccent: "Wellness Exam",
    tagline: "One visit a year that looks after the whole picture.",
    intro:
      "Comprehensive yearly checkups for adults and children to monitor health and update vaccinations. Your annual physical is the visit where routine screenings get done, questions get answered and small problems get caught early.",
    points: [
      { title: "Head-to-toe review", description: "A full check of how you’re doing.", icon: "ClipboardCheck" },
      { title: "Routine screenings", description: "Cholesterol, blood sugar and more.", icon: "Microscope" },
      { title: "Vaccinations", description: "Kept up to date at your visit.", icon: "Syringe" },
      { title: "All ages", description: "Adults and children alike.", icon: "Users" },
    ],
    image: {
      src: "/images/doctor/annual-physical-exam-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD with an older patient beside a panel headed “A Healthy You Builds a Stronger Tomorrow”, listing: check your health, prevent future problems, feel your best, and live a longer, healthier life",
      width: 1199,
      height: 1312,
    },
    grid: {
      title: "What a Wellness Exam Covers",
      items: [
        { title: "Physical examination", description: "A thorough head-to-toe check.", icon: "Stethoscope" },
        { title: "Preventive screenings", description: "Cholesterol, blood sugar and cancer screenings.", icon: "Microscope" },
        { title: "Vaccination updates", description: "Keeping immunizations current.", icon: "Syringe" },
        { title: "Medication review", description: "Making sure everything still fits.", icon: "Pill" },
        { title: "Lifestyle guidance", description: "Nutrition, activity, sleep and stress.", icon: "Apple" },
        { title: "Follow-up planning", description: "Clear next steps for the year.", icon: "CalendarCheck" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Book Your Annual Physical",
      description: "One visit a year keeps everything on track.",
    },
    closing: {
      lead: "Prevention is the simplest way to protect your health.",
      script: "We look forward to seeing you.",
    },
    related: [
      "/primary-care-doctor-toledo",
      "/medicare-annual-wellness-visit-toledo",
      "/womens-primary-care-doctor-toledo",
    ],
  },

  // ------------------------------------------------------------- senior care
  {
    path: "/senior-primary-care-doctor-toledo",
    label: "Senior Primary Care",
    metaTitle: "Senior Primary Care Doctor in Toledo, OH",
    metaDescription:
      "Dr. Saudia Mushkbar, MD provides primary care for older adults in Toledo — healthy aging, medication management, chronic disease support and Medicare wellness visits.",
    serviceName: "Senior primary care",
    badge: { label: "Senior Care", icon: "HeartHandshake" },
    headingLead: "Senior",
    headingAccent: "Primary Care",
    tagline: "Dedicated care for healthy aging.",
    intro:
      "Dedicated primary care for older adults, focusing on healthy aging, medication management, and chronic disease support. Dr. Saudia Mushkbar cares for adults and seniors across Toledo and the surrounding Northwest Ohio communities.",
    points: [
      { title: "Healthy aging", description: "Mobility, memory and overall wellness.", icon: "HeartHandshake" },
      { title: "Medication management", description: "Reviewed and simplified.", icon: "Pill" },
      { title: "Chronic disease support", description: "Long-term conditions managed well.", icon: "Activity" },
      { title: "Medicare accepted", description: "Medicare & Medicare Advantage.", icon: "ShieldCheck" },
    ],
    image: {
      src: "/images/doctor/senior-primary-care-doctor-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD with an older patient beside a panel headed “Comprehensive Primary Care for Seniors”, covering preventive and wellness care, chronic disease management, memory and cognitive health, healthy aging support, care coordination, and Medicare and insurance support",
      width: 1319,
      height: 1193,
    },
    grid: {
      title: "Comprehensive Care for Older Adults",
      items: [
        { title: "Healthy aging", description: "Mobility, memory and day-to-day wellness.", icon: "HeartHandshake" },
        { title: "Chronic disease management", description: "Diabetes, blood pressure, cholesterol and more.", icon: "Activity" },
        { title: "Medication management", description: "Keeping prescriptions safe and simple.", icon: "Pill" },
        { title: "Preventive screenings", description: "Screenings and vaccinations kept up to date.", icon: "Microscope" },
        { title: "Fall prevention", description: "Assessing risks and ways to stay steady.", icon: "Footprints" },
        { title: "Hospital follow-up", description: "Care after a hospital stay or ER visit.", icon: "Hospital" },
      ],
    },
    whyChoose: {
      title: "Why Seniors Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Schedule a Visit",
      description: "Dr. Mushkbar is accepting new Medicare patients.",
    },
    closing: {
      lead: "Thoughtful, unhurried care that helps you stay healthy and independent.",
      script: "We look forward to caring for you.",
    },
    related: [
      "/medicare-primary-care-doctor-toledo",
      "/medicare-annual-wellness-visit-toledo",
      "/hospital-follow-up-primary-care-toledo",
    ],
  },

  // ---------------------------------------------------------- switch medicare
  {
    path: "/switch-medicare-primary-care-doctor-toledo",
    label: "Switch Your Medicare PCP",
    metaTitle: "Switch Your Medicare Primary Care Doctor in Toledo",
    metaDescription:
      "Changing your Medicare primary care doctor is simple. Dr. Saudia Mushkbar, MD is accepting new Medicare and Medicare Advantage patients in Toledo, Ohio.",
    serviceName: "Medicare primary care physician transfer",
    headingLead: "Switch Your Medicare PCP",
    headingAccent: "to Dr. Mushkbar",
    tagline: "Better care. More time. A healthier you.",
    intro:
      "Changing your primary care doctor is easy, and we’re here to make the process simple. Dr. Saudia Mushkbar, MD is accepting new Medicare patients and would love to be your partner in health for years to come.",
    checklist: [
      "Accepting new Medicare & Medicare Advantage patients",
      "We handle the paperwork for you",
      "No disruption to your Medicare benefits",
      "Compassionate, personalized care you can trust",
      "Convenient location in Toledo, OH",
    ],
    image: {
      src: "/images/doctor/switch-medicare-primary-care-doctor-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD beside a panel headed “Switch Your Medicare PCP to Dr. Mushkbar”, explaining why patients choose her and the four steps to switch: call the office, we help with the paperwork, confirm your plan, and you’re all set",
      width: 1224,
      height: 1285,
    },
    steps: {
      title: "It’s Easy to Switch — We Handle the Rest",
      items: [
        {
          title: "Call our office",
          description:
            "Call 419-517-7687 and let us know you’d like to switch to Dr. Mushkbar.",
        },
        {
          title: "We handle the paperwork",
          description:
            "We’ll help you complete any necessary forms and request your medical records.",
        },
        {
          title: "We confirm your plan",
          description:
            "We’ll verify your Medicare benefits and confirm your switch is complete.",
        },
        {
          title: "You’re all set",
          description:
            "You can start seeing Dr. Mushkbar and enjoy personalized care focused on you.",
        },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose to Switch to Dr. Mushkbar",
      items: [
        { label: "Personalized attention", text: "she takes the time to listen and understand your goals." },
        { label: "Experienced & compassionate", text: "over 20 years of caring for adults and seniors." },
        { label: "Better access", text: "same-day and same-week appointments available." },
        { label: "Comprehensive care", text: "preventive care, chronic disease management and more." },
        { label: "Local & trusted", text: "proudly serving the Toledo community." },
      ],
    },
    cta: {
      title: "Ready to Switch Your Medicare PCP?",
      description:
        "We’re accepting new Medicare patients and would love to care for you.",
    },
    closing: {
      lead: "Switching your primary care doctor is an important decision. We make it easy — so you can focus on your health.",
      script: "Better care starts here.",
    },
    related: [
      "/medicare-primary-care-doctor-toledo",
      "/medicare-annual-wellness-visit-toledo",
      "/new-patients",
    ],
  },

  // ------------------------------------------------------- hospital follow-up
  {
    path: "/hospital-follow-up-primary-care-toledo",
    label: "Hospital Follow-Up Care",
    metaTitle: "Hospital Follow-Up Primary Care in Toledo, OH",
    metaDescription:
      "Recently discharged from the hospital or ER? Dr. Saudia Mushkbar, MD offers prompt follow-up appointments in Toledo to review medications and next steps.",
    serviceName: "Hospital discharge follow-up visit",
    badge: { label: "Follow-Up Care", icon: "Hospital" },
    headingLead: "Hospital",
    headingAccent: "Follow-Up Care",
    tagline: "The visit that keeps your recovery on track.",
    intro:
      "The days after a hospital stay or emergency room visit are when things most often get missed. Dr. Saudia Mushkbar, MD offers prompt follow-up appointments to review what happened, go through any medication changes and make sure the next steps are clear.",
    points: [
      { title: "Prompt appointments", description: "Same-day and same-week access.", icon: "CalendarClock" },
      { title: "Medication review", description: "Reconciling what changed.", icon: "Pill" },
      { title: "Clear next steps", description: "Tests, referrals and recovery.", icon: "ClipboardCheck" },
      { title: "Specialist coordination", description: "Keeping your care joined up.", icon: "BriefcaseMedical" },
    ],
    aside: {
      kind: "checklist",
      title: "A follow-up visit covers:",
      items: [
        "Review of your hospital or ER discharge summary",
        "Medication reconciliation",
        "Follow-up on tests and results",
        "Wound or symptom checks",
        "Referrals and specialist coordination",
        "A recovery plan you understand",
      ],
      note: {
        title: "Call soon after discharge",
        body: "Call 419-517-7687 as soon as you are home and we will find the earliest suitable appointment.",
      },
    },
    image: WHITE_COAT,
    grid: {
      title: "Comprehensive Transition Care",
      items: [
        { title: "Discharge review", description: "Going through what happened and why.", icon: "ClipboardCheck" },
        { title: "Medication management", description: "Reconciling new and existing prescriptions.", icon: "Pill" },
        { title: "Test follow-up", description: "Chasing pending results and repeat testing.", icon: "Microscope" },
        { title: "Chronic disease review", description: "Getting long-term conditions stable again.", icon: "Activity" },
        { title: "Specialist coordination", description: "Making sure referrals happen.", icon: "BriefcaseMedical" },
        { title: "Ongoing support", description: "Regular check-ins through recovery.", icon: "HeartHandshake" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: [
        { label: "Hospital medicine experience", text: "including work in hospital medicine with the Toledo Clinic." },
        ...commonReasons.slice(0, 4),
      ],
    },
    cta: {
      title: "Just Left the Hospital?",
      description: "Call us and we’ll get you seen promptly.",
    },
    closing: {
      lead: "Recovery goes better when someone is keeping track of the whole picture.",
      script: "We’re here to help you get back to yourself.",
    },
    related: [
      "/senior-primary-care-doctor-toledo",
      "/primary-care-doctor-toledo",
      "/medicare-primary-care-doctor-toledo",
    ],
  },

  // ------------------------------------------------------------- new patients
  {
    path: "/new-patients",
    label: "New Patients",
    metaTitle: "New Patients Welcome — Family Medicine in Toledo, OH",
    metaDescription:
      "Dr. Saudia Mushkbar, MD is accepting new patients of all ages in Toledo, Ohio. Most insurance plans accepted, with same-day and same-week appointments available.",
    serviceName: "New patient appointment",
    headingLead: "New Patients",
    headingAccent: "Welcome",
    tagline: "Compassionate care for you and your family.",
    intro:
      "We’re excited to welcome you to our practice. Dr. Saudia Mushkbar, MD provides personalized, comprehensive care for patients of all ages, with the goal of building lasting relationships and helping you achieve your best health.",
    checklist: [
      "Now accepting new patients",
      "All ages welcome — children, adults & seniors",
      "Most insurance plans accepted",
      "Same-day & same-week appointments",
      "Convenient location in Toledo, OH",
    ],
    image: {
      src: "/images/doctor/new-patients.jpg",
      alt: "Dr. Saudia Mushkbar, MD in her Toledo office beside a panel headed “New Patients Welcome”, listing care for all ages, preventive care and annual exams, chronic disease management, medication management, most insurance plans accepted, and a partner in your health",
      width: 1145,
      height: 1374,
    },
    grid: {
      title: "Comprehensive Care for Every Member of Your Family",
      items: [
        { title: "Family medicine", description: "Care for children, adults and seniors in one place.", icon: "Users" },
        { title: "Preventive care & screenings", description: "Annual physicals, wellness visits and screenings.", icon: "ShieldCheck" },
        { title: "Chronic disease management", description: "Diabetes, hypertension, asthma and more.", icon: "Activity" },
        { title: "Medication management", description: "Safe, personalized medication management.", icon: "Pill" },
        { title: "Women’s health", description: "Comprehensive care for women at every stage of life.", icon: "Flower2" },
        { title: "Pediatric care", description: "Care for infants, children and adolescents.", icon: "Baby" },
      ],
    },
    steps: {
      title: "What to Expect as a New Patient",
      items: [
        {
          title: "Easy scheduling",
          description: "Call the office or send a request and we’ll call you back.",
        },
        {
          title: "Personalized care",
          description: "We take the time to listen and understand your needs.",
        },
        {
          title: "Thorough evaluation",
          description: "We focus on prevention and long-term wellness.",
        },
        {
          title: "Ongoing support",
          description: "We’re here for you at every step after your first visit.",
        },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Ready to Become a New Patient?",
      description:
        "We’d love to welcome you to our practice — schedule your appointment today.",
    },
    closing: {
      lead: "We look forward to meeting you and your family.",
      script: "Your health. Our priority.",
    },
    related: [
      "/primary-care-doctor-toledo",
      "/same-day-primary-care-toledo",
      "/medicare-primary-care-doctor-toledo",
    ],
  },

  // -------------------------------------------------------------- weight loss
  {
    path: "/weight-loss-doctor-toledo",
    label: "Weight Loss & GLP-1",
    metaTitle: "Weight Loss & GLP-1 Programs in Toledo, OH",
    metaDescription:
      "Dr. Saudia Mushkbar, MD offers GLP-1 programs and personalized weight loss and wellness plans in Toledo, Ohio, as part of your primary care.",
    serviceName: "Medical weight management",
    badge: { label: "Weight Loss & Wellness", icon: "Scale" },
    headingLead: "Weight Loss",
    headingAccent: "& Wellness",
    tagline: "GLP-1 programs and personalized plans.",
    intro:
      "GLP-1 programs and personalized plans to help you feel your best. Weight is managed here as part of your primary care, alongside your blood pressure, blood sugar and the rest of your health — not in isolation.",
    points: [
      { title: "GLP-1 programs", description: "Medically supervised.", icon: "Pill" },
      { title: "Personalized plans", description: "Built around your goals.", icon: "ClipboardCheck" },
      { title: "Nutrition & lifestyle", description: "Practical, sustainable changes.", icon: "Apple" },
      { title: "Ongoing follow-up", description: "Regular reviews of your progress.", icon: "CalendarCheck" },
    ],
    image: {
      src: "/images/doctor/weight-loss-doctor-toledo.jpg",
      alt: "Dr. Saudia Mushkbar, MD measuring a patient’s waist beside a panel headed “Medically Supervised Weight Loss”, covering personalized weight loss plans, nutrition and lifestyle counseling, GLP-1 medication guidance, and ongoing support",
      width: 1224,
      height: 1285,
    },
    grid: {
      title: "Comprehensive Weight & Wellness Care",
      items: [
        { title: "Medical evaluation", description: "Understanding the whole health picture first.", icon: "Stethoscope" },
        { title: "GLP-1 programs", description: "Medically supervised treatment where appropriate.", icon: "Pill" },
        { title: "Nutrition counseling", description: "Practical guidance you can keep up with.", icon: "Apple" },
        { title: "Activity & lifestyle", description: "Movement, sleep and stress management.", icon: "Footprints" },
        { title: "Metabolic screening", description: "Blood sugar, cholesterol and blood pressure.", icon: "Microscope" },
        { title: "Ongoing support", description: "Regular check-ins to keep momentum.", icon: "HeartHandshake" },
      ],
    },
    whyChoose: {
      title: "Why Patients Choose Dr. Mushkbar",
      items: commonReasons,
    },
    cta: {
      title: "Talk Through Your Options",
      description: "Book a visit to discuss weight loss and wellness with Dr. Mushkbar.",
    },
    closing: {
      lead: "Personalized plans, medical supervision and support that lasts.",
      script: "Let’s help you feel your best.",
    },
    related: [
      "/diabetes-doctor-toledo",
      "/high-blood-pressure-doctor-toledo",
      "/primary-care-doctor-toledo",
    ],
  },
];

const bySlug = new Map(landingPages.map((page) => [page.path, page]));

/** Looks up a landing page by path, throwing at build time if it is missing. */
export function getLandingPage(path: string): LandingPageData {
  const page = bySlug.get(path);
  if (!page) {
    throw new Error(`No landing page content defined for "${path}"`);
  }
  return page;
}
