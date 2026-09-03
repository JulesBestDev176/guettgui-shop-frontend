"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "gradient-brand text-white shadow-sm hover:opacity-90 active:scale-[0.98]",
        outline: "border-2 border-[#B91C1C] bg-transparent text-[#B91C1C] hover:bg-[#FEF2F2]",
        ghost: "text-[#1F2937] hover:bg-stone-100",
        white: "bg-white text-[#B91C1C] shadow-sm hover:bg-stone-50",
        soft: "bg-[#FEF2F2] text-[#991B1B] hover:bg-[#FEE2E2]",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-7 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
