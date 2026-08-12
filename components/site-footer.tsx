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
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <WheatMark className="h-6 w-6" />
            <span className="font-heading text-lg font-medium text-foreground">
              Careen Bakery
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Small-batch bread and pastry, baked by hand every morning.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <InstagramLogo className="h-5 w-5" weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FacebookLogo className="h-5 w-5" weight="bold" />
            </a>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-heading text-base font-medium text-foreground">
            Explore
          </h3>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>
              <Link href="/menu" className="hover:text-primary">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-heading text-base font-medium text-foreground">
            Visit
          </h3>
          <p className="text-muted-foreground">
            214 Elm Street, Riverside District
          </p>
          <ul className="space-y-1 text-muted-foreground">
            {HOURS.map(([day, time]) => (
              <li key={day} className="flex justify-between gap-4">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Careen Bakery. Demo site — content for
        illustration only.
      </div>
    </footer>
  );
}
