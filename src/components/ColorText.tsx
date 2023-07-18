import { HTMLAttributes } from "react";

interface ColorTextProps extends HTMLAttributes<HTMLHeadingElement> {
  Variant?: "h1" | "h2" | "span" | "p";
  className?: string;
}

export default function ColorText({
  Variant = "h1",
  className,
  ...props
}: ColorTextProps) {
  return (
    <Variant
      className={`bg-clip-text bg-orange-fade text-transparent ${className} ${
        Variant === "h1" && "font-bold text-4xl text-center"
      } ${Variant === "h2" && "font-semibold text-3xl text-center"}`}
      {...props}
    >
      {props.children}
    </Variant>
  );
}
