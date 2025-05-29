import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { HStack } from "./ui/hstack";

import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_LOGO_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/utils";
import { ReservationButton } from "./reservation-button";

type HeaderProps = {
  className?: string;
};

export const Header = async ({ className }: HeaderProps) => {
  const { data } = await sanityFetch({
    query: RESTAURANT_LOGO_QUERY,
    params: { slug: "la-cigale" },
  });

  if (!data) {
    return null;
  }

  return (
    <header>
      <HStack className={cn("w-screen justify-between p-4", className)}>
        {data?.secondary_logo?.asset && (
          <Sidebar
            logo={
              <Image
                src={urlFor(data?.secondary_logo?.asset).url()}
                width={200}
                height={200}
                alt={data?.secondary_logo?.alt ?? ""}
              />
            }
          />
        )}
      </HStack>
      <ReservationButton />
    </header>
  );
};
