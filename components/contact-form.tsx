"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "@phosphor-icons/react/dist/ssr";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-10 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-5 w-5" />
        </span>
        <p className="font-heading text-lg font-medium text-foreground">
          Thanks — we&apos;ll get back to you soon.
        </p>
        <p className="text-sm text-muted-foreground">
          (This is a demo form — no message was actually sent.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Catering inquiry, custom cake order, feedback..."
          rows={5}
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md sm:w-auto"
      >
        Send Message
      </Button>
    </form>
  );
}
