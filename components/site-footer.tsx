import Link from "next/link";
import { InstagramLogo, FacebookLogo, Bread } from "@phosphor-icons/react/dist/ssr";

const HOURS = [
  ["Mon – Fri", "7:00am – 6:00pm"],
  ["Saturday", "8:00am – 5:00pm"],
  ["Sunday", "8:00am – 2:00pm"],
];

export function SiteFooter() {
  return (
    <footer className="mt-16 w-full rounded-t-2xl bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="text-center sm:text-left">
            <div className="flex justify-center gap-2 text-primary sm:justify-start">
              <Bread className="h-6 w-6" weight="duotone" />
              <span className="font-heading text-lg font-medium text-foreground">
                Careen Bakery
              </span>
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground sm:mx-0">
              Small-batch bread and pastry, baked by hand every morning.
            </p>
            <div className="mt-5 flex justify-center gap-4 sm:justify-start">
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

          <div className="text-center sm:text-left">
            <p className="font-heading text-base font-medium text-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
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

          <div className="text-center sm:text-left">
            <p className="font-heading text-base font-medium text-foreground">
              Visit
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              214 Elm Street, Riverside District
            </p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {HOURS.map(([day, time]) => (
                <li key={day} className="flex justify-center gap-3 sm:justify-start">
                  <span>{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground sm:flex sm:justify-between sm:text-left">
          <p>Demo site — content for illustration only.</p>
          <p className="mt-2 sm:mt-0">© {new Date().getFullYear()} Careen Bakery</p>
        </div>
      </div>
    </footer>
  );
}
