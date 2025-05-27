import Link from "next/link";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { RESTAURANT_LOGO_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const Footer = async () => {
  const { data: restaurant } = await sanityFetch({
    query: RESTAURANT_LOGO_QUERY,
    params: { slug: "la-cigale" },
  });

  return (
    <footer>
      <VStack className="w-full h-64 justify-between bg-primary">
        <HStack className="w-full h-full justify-around items-center p-4 text-background">
          <Image
            src={urlFor(restaurant.secondary_logo).url()}
            alt="alt"
            width={120}
            height={120}
          />
          <VStack className="justify-between w-1/4">
            <Link href="https://www.instagram.com/jean_charles_bouchaud/">
              <Text>Instagram</Text>
            </Link>
            <Link href="https://www.facebook.com/jean.charles.bouchaud">
              <Text>Facebook</Text>
            </Link>
          </VStack>
          <VStack className="justify-between w-1/4">
            <Link href="mailto:jean.charles.bouchaud@gmail.com">
              <Text>Contact</Text>
            </Link>
            <Link href="/mentions-legales">
              <Text>Mentions Légales</Text>
            </Link>
          </VStack>
        </HStack>
        <HStack className="w-full justify-center bg-foreground p-1">
          <Text as="p" variant="muted" className="text-xs">
            La Cigale 2025, tous droits réservés -{" "}
            <Link href="https://www.malt.fr/profile/jeancharlesbouchaud">
              Réalisé par Jean-Charles Bouchaud
            </Link>
          </Text>
        </HStack>
      </VStack>
    </footer>
  );
};
