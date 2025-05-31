import Link from "next/link";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { urlFor } from "@/sanity/lib/utils";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { RESTAURANT_FOOTER_QUERY } from "@/sanity/lib/queries";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { PortableText } from "next-sanity";
import { ClockIcon } from "lucide-react";
import { PhoneCallIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Button } from "./ui/button";
import { restaurantSlug } from "@/lib/env";

export const Footer = async () => {
  const { data } = await sanityFetch({
    query: RESTAURANT_FOOTER_QUERY,
    params: { slug: restaurantSlug },
  });

  if (!data) {
    return notFound();
  }

  const infos = [
    {
      icon: <MapPinIcon size={16} />,
      text: data.address,
    },
    {
      icon: <ClockIcon size={16} />,
      text: <PortableText value={data.hours ?? []} />,
    },
    {
      icon: <PhoneCallIcon size={16} />,
      text: data.phone_number,
    },
  ];

  return (
    <footer id="infos-pratiques">
      <VStack className="w-full justify-between bg-primary">
        <div className="flex flex-col items-center gap-8 px-8 py-16 w-full h-full text-background sm:flex-row sm:justify-around">
          {data.secondary_logo?.asset && (
            <Image
              src={urlFor(data.secondary_logo).url()}
              alt={data.secondary_logo.alt ?? ""}
              width={120}
              height={120}
              className="hidden sm:block"
            />
          )}
          <VStack className="items-start">
            {infos.map((info, index) => (
              <HStack key={index}>
                {info.icon}
                <Text as="span" className="text-sm">
                  {info.text}
                </Text>
              </HStack>
            ))}
          </VStack>
          <HStack className="items-start gap-0">
            {data.facebook_url && (
              <Link href={data.facebook_url} target="_blank">
                <Button variant="ghost" size="icon">
                  <FacebookIcon />
                </Button>
              </Link>
            )}
            {data.instagram_url && (
              <Link href={data.instagram_url} target="_blank">
                <Button variant="ghost" size="icon">
                  <InstagramIcon size={24} />
                </Button>
              </Link>
            )}
          </HStack>
        </div>
        <HStack className="w-full justify-center bg-foreground p-1">
          <Text as="p" variant="muted" className="text-xs">
            <Button variant="link" className="text-xs">
              <Link href="/mentions-legales">© La Cigale 2025</Link>
            </Button>
            -
            <Button variant="link" className="text-xs">
              <Link href="https://www.malt.fr/profile/jeancharlesbouchaud">
                Développé par Jean-Charles Bouchaud
              </Link>
            </Button>
          </Text>
        </HStack>
      </VStack>
    </footer>
  );
};
