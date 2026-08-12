import { cn } from "@/lib/utils";

const METEOR_COUNT = 30;

const METEORS = Array.from({ length: METEOR_COUNT }, (_, i) => ({
  id: i,
  left: `${Math.floor(Math.random() * 100)}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 4}s`,
}));

export function Meteors({
  number = 16,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = METEORS.slice(0, number);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-primary-foreground shadow-[0_0_0_1px_rgba(252,248,239,0.15)] before:absolute before:top-1/2 before:h-px before:w-12 before:-translate-y-1/2 before:bg-gradient-to-r before:from-primary-foreground/80 before:to-transparent"
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
}
