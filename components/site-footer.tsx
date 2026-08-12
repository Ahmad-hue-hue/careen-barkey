import Link from "next/link";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { WheatMark } from "@/components/wheat-mark";

const HOURS = [
  ["Mon – Fri", "7:00am – 6:00pm"],
  ["Saturday", "8:00am – 5:00pm"],
  ["Sunday", "8:00am – 2:00pm"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <WheatMark className="h-7 w-7" />
            <span className="font-heading text-lg font-medium text-foreground">
              Careen Bakery
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Small-batch bread and pastry, mixed, shaped, and baked by hand
            every morning.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-sm font-medium tracking-wide text-foreground uppercase">
            Visit
          </h3>
          <p className="text-sm text-muted-foreground">
            214 Elm Street
            <br />
            Riverside District
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {HOURS.map(([day, time]) => (
              <li key={day} className="flex justify-between gap-4">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-sm font-medium tracking-wide text-foreground uppercase">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/menu" className="hover:text-foreground">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-sm font-medium tracking-wide text-foreground uppercase">
            Follow
          </h3>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramLogo className="h-4 w-4" weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookLogo className="h-4 w-4" weight="bold" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Careen Bakery. Demo site — content for
        illustration only.
      </div>
    </footer>
  );
}
