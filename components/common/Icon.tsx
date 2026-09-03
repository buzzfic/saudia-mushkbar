import {
  Activity,
  Apple,
  Baby,
  BriefcaseMedical,
  CalendarCheck,
  CalendarClock,
  ClipboardCheck,
  Droplet,
  Flower2,
  Footprints,
  Gauge,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MessageCircleHeart,
  Microscope,
  Pill,
  Scale,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Syringe,
  Thermometer,
  UserPlus,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon names are stored as strings in `lib/content.ts` and `lib/landing.ts` so
 * the content layer stays free of React imports. This map is the only place
 * that resolves them, which keeps the icon bundle explicit and tree-shakeable.
 */
const icons = {
  Activity,
  Apple,
  Baby,
  BriefcaseMedical,
  CalendarCheck,
  CalendarClock,
  ClipboardCheck,
  Droplet,
  Flower2,
  Footprints,
  Gauge,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MessageCircleHeart,
  Microscope,
  Pill,
  Scale,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Syringe,
  Thermometer,
  UserPlus,
  UserRound,
  Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Resolved = icons[name as IconName] ?? Stethoscope;
  return <Resolved className={className} aria-hidden="true" />;
}
