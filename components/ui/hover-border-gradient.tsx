"use client";

import { useState, useEffect, useRef, type ElementType, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

const MOVING_MAP: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, var(--primary) 0%, rgba(168,71,31,0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, var(--primary) 0%, rgba(168,71,31,0) 100%)",
  BOTTOM:
    "radial-gradient(20.7% 50% at 50% 100%, var(--primary) 0%, rgba(168,71,31,0) 100%)",
  RIGHT:
    "radial-gradient(16.2% 41.199999999999996% at 100% 50%, var(--primary) 0%, rgba(168,71,31,0) 100%)",
};

const HIGHLIGHT =
  "radial-gradient(75% 181.15942028985506% at 50% 50%, var(--crust) 0%, var(--primary) 100%)";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  fillClassName = "bg-secondary/90",
  as,
  href,
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<{
  as?: ElementType;
  href?: string;
  containerClassName?: string;
  className?: string;
  fillClassName?: string;
  duration?: number;
  clockwise?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
}>) {
  const Tag: ElementType = href ? Link : (as ?? "button");
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const order: Direction[] = clockwise
      ? ["TOP", "RIGHT", "BOTTOM", "LEFT"]
      : ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = order.indexOf(current);
    const nextIndex = (currentIndex + 1) % order.length;
    return order[nextIndex];
  };

  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!hovered) {
      timerRef.current = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
    }
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-min w-fit flex-none items-center justify-center overflow-visible rounded-full border border-primary/20 bg-secondary/40 p-px decoration-clone",
        containerClassName,
      )}
      href={href}
      {...props}
    >
      <div
        className={cn(
          "z-10 flex items-center gap-1.5 rounded-[inherit] px-6 py-2.5 text-sm font-medium",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{ filter: "blur(2px)" }}
        initial={{ background: MOVING_MAP[direction] }}
        animate={{ background: MOVING_MAP[direction] }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <motion.div
        className={cn("absolute inset-[2px] z-[1] flex-none rounded-[inherit]", fillClassName)}
      />
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit] transition-opacity duration-500"
        style={{ background: HIGHLIGHT, opacity: hovered ? 1 : 0 }}
      />
    </Tag>
  );
}
