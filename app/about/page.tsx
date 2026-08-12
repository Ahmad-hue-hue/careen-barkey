import type { Metadata } from "next";
import Image from "next/image";
import { WheatMark } from "@/components/wheat-mark";
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

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-flex text-primary">
            <WheatMark className="h-8 w-8" />
          </span>
          <h1 className="font-heading text-4xl font-medium text-foreground md:text-5xl">
            A decade of flour on the floor.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Careen Bakery started in a home kitchen with one sourdough starter
            and a stubborn refusal to cut corners. We still bake that way.
          </p>
        </div>
      </section>

      <ScallopDivider above="bg-secondary/30" below="text-background" />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)]">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&q=80&fm=jpg&fit=crop&auto=format"
              alt="Baker pulling fresh loaves from the oven"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              How it started
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              One starter, a wood oven, and no plan to open a shop.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              It began as a hobby — feeding a starter on the kitchen counter,
              baking loaves for neighbors on weekends. Word spread faster than
              we expected. Within a year we&apos;d outgrown the kitchen;
              within three, we&apos;d found the space on Elm Street
              that&apos;s still home today.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The process hasn&apos;t changed much since then. We still mix small
              batches, still shape everything by hand, and still taste-test
              every new recipe on the same neighbors who encouraged us to
              open in the first place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
              What we believe
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              Our values, baked in
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-[0_12px_30px_-18px_rgba(43,27,18,0.3)]"
              >
                <h3 className="mb-3 font-heading text-xl font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="space-y-5 md:order-1">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              The team
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              Six bakers, one oven, up before sunrise.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Our team arrives at 4am to mix and shape the day&apos;s bread before
              the shop opens at 7. Most of us started as regulars ourselves —
              a couple of us used to just come in for the coffee.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)] md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1000&q=80&fm=jpg&fit=crop&auto=format"
              alt="Bakery team working together in the kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
