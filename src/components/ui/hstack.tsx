import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type HStackProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const HStack = ({ children, className, ...props }: HStackProps) => {
  return (
    <div className={cn("flex flex-row gap-2", className)} {...props}>
      {children}
    </div>
  );
};
