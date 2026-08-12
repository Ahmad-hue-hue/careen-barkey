"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type TimelineEntry = {
  title: string;
  content: ReactNode;
};

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl">
      {data.map((item) => (
        <div key={item.title} className="flex justify-start gap-6 pt-10 md:gap-10 md:pt-16">
          <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row">
            <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full bg-secondary md:left-3">
              <div className="h-3 w-3 rounded-full border border-primary/40 bg-primary" />
            </div>
            <h3 className="hidden font-heading text-xl font-medium text-foreground/70 md:block md:pl-16 md:text-2xl">
              {item.title}
            </h3>
          </div>

          <div className="relative w-full pr-4 pl-14 md:pl-4">
            <h3 className="mb-3 block font-heading text-xl font-medium text-foreground md:hidden">
              {item.title}
            </h3>
            {item.content}
          </div>
        </div>
      ))}
      <div
        style={{ height: "100%" }}
        className="absolute top-0 left-4.5 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-border to-transparent md:left-7.5"
      >
        <motion.div
          style={{
            scaleY: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0 w-[2px] origin-top rounded-full bg-gradient-to-t from-primary via-crust to-transparent"
        />
      </div>
    </div>
  );
}
