import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MediaEmbed } from "@/components/sections/MediaEmbed";
import { copy, mediaAppearances } from "@/lib/content";

/** "Health Insights & Media Appearances" */
export function MediaAppearances() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="WTOL TV · iHeartRadio · YouTube"
          title="Health Insights & Media Appearances"
          description={copy.mediaIntro}
          align="center"
          rule
        />

        <ul className="mt-14 grid gap-10 lg:grid-cols-2">
          {mediaAppearances.map((item) => (
            <li key={item.embedUrl} className="flex flex-col gap-4">
              <MediaEmbed item={item} />
              <h3 className="font-display text-xl leading-snug">
                {item.title}
              </h3>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-gold">
                {item.outlet}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
