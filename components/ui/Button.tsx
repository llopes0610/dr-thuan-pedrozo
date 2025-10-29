import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "outline-gold";
};

export function Button({ variant = "gold", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-soft px-5 py-2.5 transition-smooth focus:outline-none";

  const variants = {
    gold: "bg-gold text-black shadow-[0_0_6px_rgba(212,175,55,0.4)] hover:shadow-[0_0_12px_rgba(212,175,55,0.55)] active:scale-[.97]",
    "outline-gold":
      "border border-gold text-gold bg-transparent hover:bg-gold hover:text-black hover:shadow-[0_0_10px_rgba(212,175,55,0.45)] active:scale-[.97]",
  };

  return (
    <button
      {...props}
      className={cn(base, variants[variant], className)}
    />
  );
}
