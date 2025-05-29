import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/utils";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "next-sanity";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { OpenPdfButton } from "@/components/open-pdf-button";
import { ContactForm } from "@/components/contact-form";

export default async function RestaurantsPage() {
  const { data } = await sanityFetch({
    query: RESTAURANT_QUERY,
    params: { slug: "la-cigale" },
  });

  if (!data) {
    notFound();
  }

  return (
    <VStack className="w-full bg-primary/10 items-center">
      <section className="w-full h-[90vh] sm:h-screen flex items-center justify-center relative">
        <ScrollDownButton
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          targetId="main-image"
        />
        {data.main_logo && (
          <Image
            src={urlFor(data.main_logo).url()}
            alt={data.main_logo.alt ?? "Logo de la Cigale"}
            width={300}
            height={300}
          />
        )}
      </section>
      <section id="main-image" className="w-full">
        {data.main_image?.asset && (
          <Image
            src={urlFor(data.main_image).url()}
            alt={data.main_image.alt ?? "Image de la Cigale"}
            width={getImageDimensions(data.main_image?.asset).width}
            height={getImageDimensions(data.main_image.asset).height}
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
              {data.restaurant_menu?.asset && (
                <OpenPdfButton url={""}>Restaurant</OpenPdfButton>
              )}
              {data.bar_menu?.asset && (
                <OpenPdfButton url={""}>Bar</OpenPdfButton>
              )}
            </HStack>
          </VStack>
        </VStack>
      </section>
      <section className="p-8 w-full container" id="contact">
        <VStack className="container gap-8 items-center">
          <Text as="h2" variant="title">
            Nous contacter
          </Text>
          <ContactForm />
        </VStack>
      </section>
    </VStack>
  );
}
