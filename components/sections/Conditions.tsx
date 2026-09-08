import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { conditions } from "@/lib/content";

/**
 * "My Practice Covers a Wide Range of Care, Including:"
 *
 * Cards rather than a plain list, matching the original site. The row wraps
 * with `flex` instead of `grid` so the trailing three cards centre under the
 * first four rather than hanging off to the left.
 */
export function Conditions({
  eyebrow = "Symptoms & conditions",
  title = "My Practice Covers a Wide Range of Care, Including:",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" rule />

        <ul className="mt-14 flex flex-wrap justify-center gap-6">
          {conditions.map((condition) => (
            <li
              key={condition.title}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <article className="flex h-full flex-col items-center rounded-card border border-hairline bg-white px-6 py-8 text-center shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                <Icon
                  name={condition.icon}
                  className="size-9 text-accent-strong"
                />
                <h3 className="mt-5 font-display text-xl leading-snug">
                  {condition.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                  {condition.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
