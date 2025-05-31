"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Text } from "./ui/text";
import Link from "next/link";
import { HStack } from "./ui/hstack";

import { ReactNode, useState } from "react";
import { zenchefRestaurantId } from "@/lib/env";

type SidebarProps = {
  logo: ReactNode;
};

export function Sidebar({ logo }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="text-primary" size="icon" variant="ghost">
          <MenuIcon className="w-6! h-6!" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 w-screen sm:max-w-3/8">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Link href="/" onClick={() => setOpen(false)}>
            <HStack className="justify-center py-16">{logo}</HStack>
          </Link>
        </SheetHeader>
        <nav>
          {[
            { label: "Lieu", href: "/#spot" },
            { label: "Cartes", href: "/#cartes" },
            {
              label: "Réservation",
              href: `https://bookings.zenchef.com/results?rid=${zenchefRestaurantId}`,
            },
            { label: "Infos pratiques", href: "/#infos-pratiques" },
            { label: "Nous contacter", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <Text
                variant="subtitle"
                className="border-b border-border py-4 text-background"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
