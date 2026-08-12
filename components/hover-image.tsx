import Image from "next/image";
import { cn } from "@/lib/utils";

export function HoverImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]",
          imgClassName,
        )}
      />
    </div>
  );
}
