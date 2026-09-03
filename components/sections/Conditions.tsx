import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { conditions } from "@/lib/content";

/** "My Practice Covers a Wide Range of Care, Including:" */
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
        <SectionHeading eyebrow={eyebrow} title={title} />

        <dl className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <div key={condition.title} className="border-t border-hairline pt-6">
              <dt className="font-display text-xl text-brand">
                {condition.title}
              </dt>
              <dd className="mt-2.5 text-[0.9375rem] leading-relaxed text-body">
                {condition.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
