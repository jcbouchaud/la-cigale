import { cn } from "@/lib/utils";

type VStackProps = {
  children: React.ReactNode;
  className?: string;
};

export const VStack = ({ children, className }: VStackProps) => {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
};
