import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { FlipWords } from "@/components/ui/flip-words";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ScallopDivider } from "@/components/scallop-divider";
import { Reveal } from "@/components/reveal";
import { HoverImage } from "@/components/hover-image";
import { WheatMark } from "@/components/wheat-mark";
import { FEATURED_PRODUCTS, TESTIMONIALS } from "@/lib/bakery-data";

const HERO_TAGLINES = [
  "waking up for.",
  "the walk across town.",
  "skipping breakfast for.",
  "your Saturday morning.",
];

export default function Home() {
  const cards = FEATURED_PRODUCTS.map((product, index) => (
    <Card
      key={product.title}
      index={index}
      card={{
        src: product.src,
        title: product.title,
        category: product.category,
        content: (
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {product.description}
          </p>
        ),
      }}
    />
  ));

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-secondary/30">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:py-28">
          <Reveal className="space-y-6">
            <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
              214 Elm Street · Riverside District
            </p>
            <h1 className="font-heading text-5xl leading-[1.05] font-medium tracking-tight text-foreground md:text-6xl">
              Bread worth
              <br />
              <span className="italic text-primary">
                <FlipWords words={HERO_TAGLINES} />
              </span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Careen Bakery is a small neighborhood shop making slow-fermented
              sourdough, hand-laminated pastry, and cakes from scratch — every
              single morning, no shortcuts.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MovingBorderButton href="/menu" duration={3200}>
                See the Menu <ArrowRight className="h-4 w-4" />
              </MovingBorderButton>
              <MovingBorderButton
                href="/about"
                duration={4200}
                className="bg-transparent text-foreground"
                borderClassName="bg-[radial-gradient(var(--border)_40%,transparent_65%)]"
              >
                Our Story
              </MovingBorderButton>
            </div>
            <div className="flex items-center gap-3 pt-4 text-muted-foreground">
              <WheatMark className="h-6 w-6 text-primary" />
              <span className="text-sm">Est. 2016 — baking by hand ever since</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <HoverImage
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&q=80&fm=jpg&fit=crop&auto=format"
              alt="Fresh bread loaves cooling on a wooden rack at Careen Bakery"
              className="aspect-[4/5] rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(43,27,18,0.35)]"
              priority
            />
            <div className="absolute -right-5 -bottom-8 h-40 w-32 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-48 sm:w-36">
              <HoverImage
                src="https://images.unsplash.com/photo-1621236378699-8597faf6a176?w=500&q=80&fm=jpg&fit=crop&auto=format"
                alt="Fresh almond croissant"
                className="h-full w-full"
              />
            </div>
            <div className="absolute -top-5 -left-5 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-border bg-card text-center shadow-md">
              <p className="font-heading text-lg font-medium text-primary">6am</p>
              <p className="text-[0.65rem] leading-tight text-muted-foreground">
                first loaves
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ScallopDivider above="bg-secondary/30" below="text-background" />

      {/* Featured products */}
      <section className="bg-background py-16 md:py-24">
        <Reveal className="mx-auto max-w-6xl px-6">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
                From the case
              </p>
              <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
                What&apos;s baking today
              </h2>
            </div>
          </div>
        </Reveal>
        <Carousel items={cards} />
      </section>

      {/* Story teaser */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <Reveal className="relative order-2 md:order-1">
            <HoverImage
              src="https://images.unsplash.com/photo-1533910534207-90f31029a78e?w=1000&q=80&fm=jpg&fit=crop&auto=format"
              alt="Baker shaping dough by hand"
              className="aspect-[4/3] rounded-[2rem] shadow-[0_20px_50px_-25px_rgba(43,27,18,0.4)]"
            />
          </Reveal>
          <Reveal delay={0.1} className="order-1 space-y-5 md:order-2">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Our story
            </p>
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              Started with one starter, a decade ago.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Careen Bakery began in a home kitchen with a single sourdough
              starter and a wood-fired oven. Ten years later, we still mix,
              shape, and bake everything by hand — no par-baked shortcuts, no
              industrial mixes. Just flour, water, salt, and time.
            </p>
            <Button
              variant="link"
              className="px-0 text-primary"
              render={<Link href="/about" />}
            >
              Read the full story <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-16 md:py-24">
        <Reveal className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            Word around the neighborhood
          </p>
          <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
            What our regulars say
          </h2>
        </Reveal>
        <AnimatedTestimonials testimonials={[...TESTIMONIALS]} />
      </section>

      <ScallopDivider above="bg-background" below="text-primary" />

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-heading text-3xl font-medium md:text-4xl">
            Come by before the sourdough sells out.
          </h2>
          <p className="max-w-lg text-primary-foreground/85">
            214 Elm Street, Riverside District — open daily from 7am.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full bg-primary-foreground px-8 text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90 hover:shadow-md"
            render={<Link href="/contact" />}
          >
            Get Directions
          </Button>
        </Reveal>
      </section>
    </>
  );
}
