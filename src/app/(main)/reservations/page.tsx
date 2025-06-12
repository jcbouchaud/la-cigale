import { ContactForm } from "@/components/contact-form";
import { VStack } from "@/components/ui/vstack";
import { urlFor } from "@/sanity/lib/utils";
import { restaurantSlug } from "@/lib/env";
import { RESTAURANT_SECONDARY_IMAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { Text } from "@/components/ui/text";

export default async function ReservationsPage() {
  const { data } = await sanityFetch({
    query: RESTAURANT_SECONDARY_IMAGE_QUERY,
    params: { slug: restaurantSlug },
  });

  if (!data) {
    notFound();
  }
  return (
    <VStack className="w-full items-center">
      <section className="w-full h-[65vh] flex items-center justify-center relative">
        <div className="w-full h-full absolute top-0 left-0 bg-background/10" />
        {data.secondary_image?.asset && (
          <Image
            src={urlFor(data.secondary_image).url()}
            alt={data.secondary_image.alt ?? "Image de la Cigale"}
            width={getImageDimensions(data.secondary_image?.asset).width}
            height={getImageDimensions(data.secondary_image.asset).height}
            className="object-cover h-full"
          />
        )}
      </section>
      <section className="container w-full p-8">
        <VStack className="w-full items-center gap-8">
          <Text as="h1" variant="title">
            Réservations de groupes
          </Text>
          <ContactForm />
        </VStack>
      </section>
    </VStack>
  );
}
