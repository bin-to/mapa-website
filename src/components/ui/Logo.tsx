import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};

const imageSizes = {
  sm: "h-11 sm:h-12",
  md: "h-14 sm:h-16",
  lg: "h-16 sm:h-20 lg:h-24",
} as const;

export function Logo({
  size = "md",
  priority = false,
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex leading-none", className)}
      aria-label={`${siteConfig.name} – Startseite`}
    >
      <span
        className={cn(
          "inline-flex w-fit overflow-hidden rounded-sm bg-white px-2.5 py-0 shadow-md shadow-black/15 ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-black/20 sm:px-3",
        )}
      >
        <Image
          src={images.logo.src}
          alt={images.logo.alt}
          width={images.logo.width}
          height={images.logo.height}
          priority={priority}
          className={cn(
            "block w-auto object-contain transition-opacity duration-300 group-hover:opacity-90",
            imageSizes[size],
          )}
        />
      </span>
    </Link>
  );
}
