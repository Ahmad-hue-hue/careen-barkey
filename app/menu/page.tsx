import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Bread } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { MENU_CATEGORIES } from "@/lib/bakery-data";

export const metadata: Metadata = {
  title: "Menu — Careen Bakery",
  description: "Breads, pastries, cakes, and coffee baked fresh daily at Careen Bakery.",
};

export default function MenuPage() {
  return (
    <div>
      <section className="bg-secondary/30 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-flex text-primary">
            <Bread className="h-8 w-8" weight="duotone" />
          </span>
          <h1 className="font-heading text-4xl font-medium text-foreground md:text-5xl">
            The Menu
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Baked in small batches, every morning. Availability changes daily
            — come early for the best selection.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="space-y-16">
          {MENU_CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.05}>
            <section id={category.id}>
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-heading text-2xl font-medium whitespace-nowrap text-primary md:text-3xl">
                  {category.name}
                </h2>
                <Separator className="flex-1 bg-border" />
              </div>
              <ul className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex flex-col gap-1 rounded-xl p-3 -m-3 transition-colors hover:bg-secondary/40"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-heading text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                        {item.name}
                      </span>
                      <span className="h-px flex-1 border-b border-dotted border-border" />
                      <span className="text-sm font-medium text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
