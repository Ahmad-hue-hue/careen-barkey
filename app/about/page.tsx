import type { Metadata } from "next";
import Image from "next/image";
import { WheatMark } from "@/components/wheat-mark";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Timeline } from "@/components/ui/timeline";

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
      <section className="relative overflow-hidden bg-secondary/30 py-16 md:py-24">
        <BackgroundBeams className="opacity-60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
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

      <section className="bg-background px-6 py-16 md:py-24">
        <Timeline
          data={[
            {
              title: "2016",
              content: (
                <div className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    It began as a hobby — feeding a starter on the kitchen
                    counter, baking loaves for neighbors on weekends. Word
                    spread faster than we expected.
                  </p>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)]">
                    <Image
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80&fm=jpg&fit=crop&auto=format"
                      alt="Baker pulling fresh loaves from the oven"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "2019",
              content: (
                <div className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    Within a year we&apos;d outgrown the kitchen; within
                    three, we&apos;d found the space on Elm Street
                    that&apos;s still home today. The process hasn&apos;t
                    changed much since then.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {VALUES.map((value) => (
                      <div
                        key={value.title}
                        className="rounded-xl border border-border bg-card p-5"
                      >
                        <h3 className="mb-2 font-heading text-base font-medium text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {value.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              title: "Today",
              content: (
                <div className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    Six bakers, one oven, up before sunrise. Our team arrives
                    at 4am to mix and shape the day&apos;s bread before the
                    shop opens at 7 — most of us started as regulars
                    ourselves.
                  </p>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)]">
                    <Image
                      src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=900&q=80&fm=jpg&fit=crop&auto=format"
                      alt="Bakery team working together in the kitchen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>
    </>
  );
}
