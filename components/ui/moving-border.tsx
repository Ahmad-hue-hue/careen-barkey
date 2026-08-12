"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MovingBorderButton({
  children,
  as,
  href,
  borderRadius = "9999px",
  duration = 2500,
  containerClassName,
  borderClassName,
  className,
  ...props
}: React.PropsWithChildren<{
  as?: ElementType;
  href?: string;
  borderRadius?: string;
  duration?: number;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}>) {
  const Tag: ElementType = href ? Link : (as ?? "button");

  return (
    <Tag
      href={href}
      className={cn(
        "relative overflow-hidden bg-transparent p-[1.5px]",
        containerClassName,
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0" style={{ borderRadius }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-16 w-16 bg-[radial-gradient(var(--primary)_40%,transparent_65%)] opacity-90",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center gap-2 bg-primary px-7 py-3 text-base font-medium text-primary-foreground",
          className,
        )}
        style={{ borderRadius: `calc(${borderRadius} - 1.5px)` }}
      >
        {children}
      </div>
    </Tag>
  );
}

function MovingBorder({
  children,
  duration = 2500,
  rx,
  ry,
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        {children}
      </motion.div>
    </>
  );
}
