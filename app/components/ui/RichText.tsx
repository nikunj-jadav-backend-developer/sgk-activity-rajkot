import { ReactNode } from "react";

interface RichTextProps {
  children: ReactNode;
  className?: string;
}

export default function RichText({
  children,
  className = "",
}: RichTextProps) {
  return (
    <div
      className={`mt-8 font-gujarati text-base leading-8 text-[#5F4A50] md:text-lg [&>p+p]:mt-5 ${className}`}
    >
      {children}
    </div>
  );
}