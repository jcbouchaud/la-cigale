import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANT_QUERY } from "@/sanity/lib/queries";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const restaurant = await sanityFetch({ query: RESTAURANT_QUERY, params });
  return (
    <div>
      <div>{restaurant.data?.title}</div>
      <div>{restaurant.data?.publishedAt}</div>
    </div>
  );
}
