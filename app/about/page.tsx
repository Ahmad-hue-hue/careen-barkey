import type { Metadata } from "next";
import { Bread } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { HoverImage } from "@/components/hover-image";
import { ScallopDivider } from "@/components/scallop-divider";

export const metadata: Metadata = {
  title: "Our Story — Careen Bakery",
  description:
    "How Careen Bakery grew from a home kitchen starter to a neighborhood bakery baking everything by hand.",
};

const VALUES = [
  {
    title: "Slow, on purpose",
    body: "Our sourdough ferments for 36 hours and our croissant dough rests for three days. Flavor takes time — we don't rush it.",
  },
  {
    title: "Made by hand",
    body: "Every loaf is shaped, every croissant laminated, every cake frosted by hand. No par-baked shortcuts, no industrial mixes.",
  },
  {
    title: "Honest ingredients",
    body: "Stone-milled flour, cultured butter, real vanilla. If we wouldn't want to eat it, it doesn't go in.",
  },
];

const STATS = [
  { value: "10", label: "Years baking" },
  { value: "6", label: "Bakers on the team" },
  { value: "4am", label: "First mix of the day" },
  { value: "36hr", label: "Sourdough ferment" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/30 py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-flex text-primary">
            <Bread className="h-8 w-8" weight="duotone" />
          </span>
          <h1 className="font-heading text-4xl font-medium text-foreground md:text-5xl">
            A decade of flour on the floor.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Careen Bakery started in a home kitchen with one sourdough starter
            and a stubborn refusal to cut corners. We still bake that way.
          </p>
        </Reveal>
      </section>

      <ScallopDivider above="bg-background" below="text-secondary" flip />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <HoverImage
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&q=80&fm=jpg&fit=crop&auto=format"
              alt="Baker pulling fresh loaves from the oven"
              className="aspect-[4/3] rounded-2xl shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)]"
            />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              How it started
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              One starter, a wood oven, and no plan to open a shop.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              It began as a hobby — feeding a starter on the kitchen counter,
              baking loaves for neighbors on weekends. Word spread faster
              than we expected. Within a year we&apos;d outgrown the
              kitchen; within three, we&apos;d found the space on Elm Street
              that&apos;s still home today.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The process hasn&apos;t changed much since then. We still mix
              small batches, still shape everything by hand, and still
              taste-test every new recipe on the same neighbors who
              encouraged us to open in the first place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-12">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-medium text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
              What we believe
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              Our values, baked in
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(43,27,18,0.35)]">
                  <h3 className="mb-3 font-heading text-xl font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <Reveal className="space-y-5 md:order-1">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              The team
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              Six bakers, one oven, up before sunrise.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Our team arrives at 4am to mix and shape the day&apos;s bread
              before the shop opens at 7. Most of us started as regulars
              ourselves — a couple of us used to just come in for the
              coffee.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:order-2">
            <HoverImage
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1000&q=80&fm=jpg&fit=crop&auto=format"
              alt="Bakery team working together in the kitchen"
              className="aspect-[4/3] rounded-2xl shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
