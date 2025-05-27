import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      title: "text-4xl font-bold tracking-tight",
      subtitle: "text-2xl font-semibold tracking-tight",
      body: "text-base font-normal",
      emphasized: "text-base font-medium",
      muted: "text-sm text-gray-500",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TextComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: TextComponent;
  className?: string;
  children: React.ReactNode;
}

const Text = ({
  as: Component = "p",
  variant,
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
};

export { Text, type TextProps, textVariants };
