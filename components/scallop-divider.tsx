import { cn } from "@/lib/utils";

/**
 * A scalloped (pastry-edge) section divider.
 * `above` = bg color class of the section above (fills the flat backdrop).
 * `below` = text color class matching the section below (fills the SVG bumps).
 */
export function ScallopDivider({
  above,
  below,
  flip = false,
}: {
  above: string;
  below: string;
  flip?: boolean;
}) {
  return (
    <div className={cn("relative h-8 w-full overflow-hidden md:h-12", above)} aria-hidden="true">
      <svg
        className={cn(
          "absolute inset-x-0 bottom-0 block h-6 w-full md:h-10",
          below,
          flip && "top-0 bottom-auto rotate-180",
        )}
        viewBox="0 0 240 20"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 20 L0 0 C 6 14 14 14 20 0 C 26 14 34 14 40 0 C 46 14 54 14 60 0 C 66 14 74 14 80 0 C 86 14 94 14 100 0 C 106 14 114 14 120 0 C 126 14 134 14 140 0 C 146 14 154 14 160 0 C 166 14 174 14 180 0 C 186 14 194 14 200 0 C 206 14 214 14 220 0 C 226 14 234 14 240 0 L 240 20 Z" />
      </svg>
    </div>
  );
}
