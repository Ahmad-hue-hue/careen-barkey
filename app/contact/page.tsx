import type { Metadata } from "next";
import { MapPin, Phone, EnvelopeSimple, InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { WheatMark } from "@/components/wheat-mark";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { HoverImage } from "@/components/hover-image";
import { HOURS } from "@/lib/bakery-data";

export const metadata: Metadata = {
  title: "Contact — Careen Bakery",
  description: "Visit Careen Bakery, get directions, hours, and send us a message.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal className="mb-14 text-center">
        <span className="mb-4 inline-flex text-primary">
          <WheatMark className="h-8 w-8" />
        </span>
        <h1 className="font-heading text-4xl font-medium text-foreground md:text-5xl">
          Visit Us
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Stop by for bread, pastry, and coffee — or send us a note below.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <Reveal className="space-y-8">
          <HoverImage
            src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=900&q=80&fm=jpg&fit=crop&auto=format"
            alt="Careen Bakery storefront on Elm Street"
            className="aspect-[4/3] rounded-2xl shadow-[0_20px_50px_-25px_rgba(43,27,18,0.35)]"
          />

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" weight="bold" />
            <div>
              <p className="font-medium text-foreground">214 Elm Street</p>
              <p className="text-sm text-muted-foreground">Riverside District</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Hours
              </p>
              <ul className="space-y-1 text-sm text-foreground">
                {HOURS.map(([day, time]) => (
                  <li key={day}>
                    <span className="text-muted-foreground">{day}: </span>
                    {time}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Contact
              </p>
              <ul className="space-y-1.5 text-sm text-foreground">
                <li className="flex items-start gap-1.5">
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" weight="bold" />
                  (555) 013-0192
                </li>
                <li className="flex items-start gap-1.5">
                  <EnvelopeSimple className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" weight="bold" />
                  <span className="break-all">hello@careenbakery.example</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Follow
              </p>
              <div className="flex gap-3">
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
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h2 className="mb-1 font-heading text-2xl font-medium text-foreground">
            Send a message
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Catering, custom cakes, or just to say hi.
          </p>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
