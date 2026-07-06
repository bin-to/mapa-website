import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  priority?: boolean;
  className?: string;
};

const sizes = {
  sm: {
    image: "h-11 sm:h-12",
    tagline:
      "px-2 pb-2 pt-1.5 text-[0.55rem] tracking-[0.3em] sm:text-[0.6rem]",
  },
  md: {
    image: "h-14 sm:h-16",
    tagline:
      "px-2 pb-2 pt-1.5 sm:px-2.5 text-[0.6rem] tracking-[0.32em] sm:text-xs",
  },
  lg: {
    image: "h-16 sm:h-20 lg:h-24",
    tagline:
      "px-2.5 pb-2.5 pt-2 sm:px-3 text-xs tracking-[0.35em] sm:text-sm",
  },
};

export function Logo({
  size = "md",
  showTagline = true,
  priority = false,
  className,
}: LogoProps) {
  const config = sizes[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex leading-none", className)}
      aria-label={`${siteConfig.name} – Startseite`}
    >
      <span
        className={cn(
          "inline-flex w-fit flex-col overflow-hidden rounded-sm bg-white shadow-md shadow-black/15 ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-black/20",
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
            config.image,
          )}
        />
        {showTagline && (
          <span
            className={cn(
              "text-center font-sans font-light uppercase text-navy-800",
              config.tagline,
            )}
          >
            In Profession
          </span>
        )}
      </span>
    </Link>
  );
}
