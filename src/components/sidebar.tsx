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
import Image from "next/image";
import { HStack } from "./ui/hstack";
import { RESTAURANT_LOGO_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

export async function Sidebar() {
  const { data: restaurant } = await sanityFetch({
    query: RESTAURANT_LOGO_QUERY,
    params: { slug: "la-cigale" },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-primary" size="icon" variant="ghost">
          <MenuIcon className="w-6! h-6!" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 w-full sm:max-w-3/8">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <HStack className="justify-center py-16">
            {restaurant?.secondary_logo?.asset && (
              <Image
                src={urlFor(restaurant?.secondary_logo?.asset).url()}
                width={200}
                height={200}
                alt={restaurant?.secondary_logo?.alt ?? ""}
              />
            )}
          </HStack>
        </SheetHeader>
        <nav>
          {[
            { label: "Lieu", href: "#lieu" },
            { label: "Cartes", href: "#cartes" },
            { label: "Réservation", href: "#reservation" },
            { label: "Infos pratiques", href: "#infos-pratiques" },
            { label: "Nous contacter", href: "#contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Text className="border-b border-border py-4 text-background text-xl">
                {item.label}
              </Text>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
