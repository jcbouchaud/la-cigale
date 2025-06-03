import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import { buildFileUrl, urlFor } from "@/sanity/lib/utils";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "next-sanity";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { OpenPdfButton } from "@/components/open-pdf-button";
import { ContactForm } from "@/components/contact-form";
import { restaurantSlug } from "@/lib/env";
import InstaFeed from "@/components/insta-feed";
export default async function RestaurantsPage() {
  const { data } = await sanityFetch({
    query: RESTAURANT_QUERY,
    params: { slug: restaurantSlug },
  });

  if (!data) {
    notFound();
  }
  const restaurantMenuUrl = buildFileUrl({
    assetId: data.restaurant_menu?.file?.asset?._ref.split("-")[1] ?? "",
    extension: data.restaurant_menu?.file?.asset?._ref.split("-")[2] ?? "",
  });

  const barMenuUrl = buildFileUrl({
    assetId: data.bar_menu?.file?.asset?._ref.split("-")[1] ?? "",
    extension: data.bar_menu?.file?.asset?._ref.split("-")[2] ?? "",
  });

  return (
    <VStack className="w-full bg-primary/10 items-center gap-0">
      <section className="w-full h-[80vh] flex items-center justify-center relative">
        <div className="w-full h-full absolute top-0 left-0 bg-background/20" />
        {data.main_image?.asset && (
          <Image
            src={urlFor(data.main_image).url()}
            alt={data.main_image.alt ?? "Image de la Cigale"}
            width={getImageDimensions(data.main_image?.asset).width}
            height={getImageDimensions(data.main_image.asset).height}
            className="object-cover h-full"
          />
        )}
      </section>
      <section id="main-image" className="w-full p-8 mt-2 sm:mt-16  container">
        {data.secondary_image?.asset && (
          <Image
            src={urlFor(data.secondary_image).url()}
            alt={data.secondary_image.alt ?? "Image de la Cigale"}
            width={getImageDimensions(data.secondary_image?.asset).width}
            height={getImageDimensions(data.secondary_image.asset).height}
            className="w-full min-h-[500px] object-cover"
          />
        )}
      </section>
      <section className="p-8 container">
        <PortableText value={data.main_description ?? []} />
      </section>
      <section className="p-8 container" id="spot">
        <HStack className="flex-wrap items-end justify-between">
          {data.blocks &&
            data.blocks.map((block, index) => (
              <VStack
                key={index}
                className={cn(
                  index % 3 === 0
                    ? "w-full"
                    : index % 2 === 0
                      ? "sm:w-7/12"
                      : "sm:w-4/12",
                  "mb-8 sm:align-baseline"
                )}
              >
                {block.image?.asset && (
                  <Image
                    src={urlFor(block.image).url()}
                    alt={block.image.alt ?? "Image de la Cigale"}
                    width={getImageDimensions(block.image.asset).width}
                    height={getImageDimensions(block.image.asset).height}
                    className="w-full"
                  />
                )}
                <VStack>
                  <Text
                    as="h4"
                    variant="subtitle"
                    className="uppercase sm:py-4"
                  >
                    {block.title}
                  </Text>
                  <Text as="p">{block.description}</Text>
                </VStack>
              </VStack>
            ))}
        </HStack>
      </section>
      <section className="p-8 bg-background w-full" id="cartes">
        <VStack className="w-full items-center">
          <VStack className="container gap-8 items-center">
            <Text as="h2" variant="title">
              Cartes
            </Text>
            <HStack className="w-full justify-center items-center gap-8">
              {data.restaurant_menu?.file && (
                <OpenPdfButton url={restaurantMenuUrl}>
                  Restaurant
                </OpenPdfButton>
              )}
              {data.bar_menu?.file && (
                <OpenPdfButton url={barMenuUrl}>Bar</OpenPdfButton>
              )}
            </HStack>
          </VStack>
        </VStack>
      </section>
      <section className="p-8 w-full" id="contact">
        <InstaFeed />
      </section>
      <section className="p-8 w-full bg-background" id="contact">
        <VStack className="w-full items-center">
          <VStack className="container gap-8 items-center">
            <Text as="h2" variant="title">
              Nous contacter
            </Text>
            <ContactForm />
          </VStack>
        </VStack>
      </section>
    </VStack>
  );
}
