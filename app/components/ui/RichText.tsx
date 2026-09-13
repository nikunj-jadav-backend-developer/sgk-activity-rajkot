import { ReactNode } from "react";

interface RichTextProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero";
}

export default function RichText({
  children,
  variant = "default",
  className = "",
}: RichTextProps) {
  const variantClass =
    variant === "hero" ? "max-w-2xl mb-6" : "";

  return (
    <div
      className={`mx-auto [&_p]:mb-6 mt-5 ${variantClass} font-gujarati text-base leading-7 text-[#5C4650] md:text-lg rich-text-${variant} ${className}`}
    >
      {children}
    </div>
  );
}