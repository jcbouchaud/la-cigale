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
    <Link href={`#${targetId}`} aria-label="Scroll down">
      <Button
        size="icon"
        variant="ghost"
        className={cn(className, "animate-bounce")}
      >
        <ChevronDown
          className="text-primary w-6! h-6!"
          aria-label="Scroll down"
        />
      </Button>
    </Link>
  );
};
