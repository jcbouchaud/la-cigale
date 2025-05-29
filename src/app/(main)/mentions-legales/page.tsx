import { VStack } from "@/components/ui/vstack";
import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_LEGAL_NOTICE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { Text } from "@/components/ui/text";
export default async function LegalNoticePage() {
  const { data } = await sanityFetch({
    query: RESTAURANT_LEGAL_NOTICE_QUERY,
    params: { slug: "la-cigale" },
  });

  if (!data) {
    return notFound();
  }

  return (
    <section className="p-8">
      <VStack className="items-center w-full">
        <VStack className="container gap-4">
          <Text as="h1" variant="title">
            Mentions légales
          </Text>
          <PortableText value={data.legal_notice ?? []} />
        </VStack>
      </VStack>
    </section>
  );
}
