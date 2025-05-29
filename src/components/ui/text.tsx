import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      title: "text-2xl sm:text-4xl font-serif tracking-tight text-primary",
      subtitle: "text-xl sm:text-2xl font-serif tracking-tight",
      body: "text-base font-sans tracking-tight",
      emphasized: "text-base font-sans tracking-tight",
      muted: "text-sm text-muted-foreground",
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
