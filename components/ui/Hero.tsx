import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: "default" | "dark" | "yellow";
  className?: string;
  children?: ReactNode;
  backgroundImage?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
  className,
  children,
  backgroundImage,
  imageAlt,
}: HeroProps) {
  const variants = {
    default: "bg-white text-black",
    dark: "bg-black text-white",
    yellow: "bg-[#FFD700] text-black",
  };

  return (
    <div
      className={cn(
        "relative min-h-[60vh] flex items-center justify-center overflow-hidden",
        variants[variant],
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={imageAlt || title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center w-full">
        {subtitle && (
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 opacity-80">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90 leading-relaxed">
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            {primaryCTA && (
              <Button
                asChild
                href={primaryCTA.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                asChild
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
