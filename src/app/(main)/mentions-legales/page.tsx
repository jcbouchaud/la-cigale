import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_LEGAL_NOTICE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
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
      <PortableText value={data.legal_notice ?? []} />
    </section>
  );
}
