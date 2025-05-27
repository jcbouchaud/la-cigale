"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ScrollDownButtonProps = {
  className?: string;
  targetId: string;
};

export const ScrollDownButton = ({
  className,
  targetId,
}: ScrollDownButtonProps) => {
  return (
    <Link href={`#${targetId}`}>
      <Button size="icon" variant="ghost" className={cn(className)}>
        <ChevronDown className="text-primary w-6! h-6!" />
      </Button>
    </Link>
  );
};
