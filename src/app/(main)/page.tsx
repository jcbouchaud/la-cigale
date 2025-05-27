import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "next-sanity";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ScrollDownButton } from "@/components/scroll-down-button";

export default async function RestaurantsPage() {
  const { data: restaurant } = await sanityFetch({
    query: RESTAURANT_QUERY,
    params: { slug: "la-cigale" },
  });

  if (!restaurant) {
    notFound();
  }

  return (
    <VStack className="w-full bg-primary/10 font-delius">
      <section className="w-full h-[70vh] flex items-center justify-center relative">
        <ScrollDownButton
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          targetId="main-image"
        />
        {restaurant.main_logo && (
          <Image
            src={urlFor(restaurant.main_logo).url()}
            alt="alt"
            width={300}
            height={300}
          />
        )}
      </section>
      <section id="main-image" className="w-full">
        {restaurant.main_image?.asset && (
          <Image
            src={urlFor(restaurant.main_image).url()}
            alt="alt"
            width={getImageDimensions(restaurant.main_image?.asset).width}
            height={getImageDimensions(restaurant.main_image.asset).height}
            className="w-full min-h-[500px] object-cover"
          />
        )}
      </section>
      <section className="p-8">
        <PortableText value={restaurant.main_description ?? []} />
      </section>
      {/* <section className="p-8">
        <Image
          src={urlFor(restaurant.secondary_image).url()}
          alt="alt"
          width={getImageDimensions(restaurant.secondary_image.asset).width}
          height={getImageDimensions(restaurant.secondary_image.asset).height}
          className="object-fit w-full"
        />
      </section> */}
      <section className="p-8">
        <HStack className="flex-wrap items-end w-full gap-0 sm:px-8">
          {restaurant.blocks &&
            restaurant.blocks.map((block, index) => (
              <VStack
                key={index}
                className={cn(
                  index % 3 === 0
                    ? "w-full"
                    : index % 2 === 0
                      ? "sm:w-2/3"
                      : "sm:w-1/3",
                  "sm:p-4 mb-8 sm:align-baseline"
                )}
              >
                {block.image?.asset && (
                  <Image
                    src={urlFor(block.image).url()}
                    alt="alt"
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
                  <Text as="p" className="font-delius italic">
                    {block.description}
                  </Text>
                </VStack>
              </VStack>
            ))}
        </HStack>
      </section>
      <section className="w-full bg-background p-8">
        <Text as="h2" variant="subtitle" className="uppercase">
          Actualités
        </Text>
      </section>
      {/* <HStack id="contact" className="p-8">
        <ContactForm />
      </HStack> */}
    </VStack>
  );
}
