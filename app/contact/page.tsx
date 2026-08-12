import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/social-icons";
import { WheatMark } from "@/components/wheat-mark";
import { ContactForm } from "@/components/contact-form";
import { HOURS } from "@/lib/bakery-data";

export const metadata: Metadata = {
  title: "Contact — Careen Bakery",
  description: "Visit Careen Bakery, get directions, hours, and send us a message.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-14 text-center">
        <span className="mb-4 inline-flex text-primary">
          <WheatMark className="h-8 w-8" />
        </span>
        <h1 className="font-heading text-4xl font-medium text-foreground md:text-5xl">
          Visit Us
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Stop by for bread, pastry, and coffee — or send us a note below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {/* Map placeholder */}
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-secondary/40">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="font-heading text-lg font-medium text-foreground">
                214 Elm Street
              </p>
              <p className="text-sm text-muted-foreground">
                Riverside District — map coming soon
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-border bg-card p-7">
            <h2 className="font-heading text-xl font-medium text-foreground">
              Hours
            </h2>
            <ul className="space-y-2 text-sm">
              {HOURS.map(([day, time]) => (
                <li key={day} className="flex justify-between text-muted-foreground">
                  <span>{day}</span>
                  <span className="font-medium text-foreground">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-border bg-card p-7">
            <h2 className="font-heading text-xl font-medium text-foreground">
              Get in touch
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                214 Elm Street, Riverside District
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (555) 013-0192
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                hello@careenbakery.example
              </li>
            </ul>
            <div className="flex gap-3 pt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
          <h2 className="mb-1 font-heading text-2xl font-medium text-foreground">
            Send a message
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Catering, custom cakes, or just to say hi.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
