import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type AvatarProps = { src: StaticImageData; alt?: string; size?: number; className?: string };

export function Avatar({ src, alt = "", size = 48, className }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      sizes={`${size * 2}px`}
      className={cn("shrink-0 rounded-full object-cover ring-2 ring-white", className)}
      style={{ width: size, height: size }}
    />
  );
}
