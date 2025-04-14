import { sanityFetch } from "@/sanity/lib/live";
import { RESTAURANTS_QUERY } from "@/sanity/lib/queries";

export default async function RestaurantsPage() {
  const restaurants = await sanityFetch({ query: RESTAURANTS_QUERY });

  return (
    <ul>
      {restaurants.data.map((restaurant) => (
        <li key={restaurant._id}>
          <a href={`/${restaurant?.slug?.current}`}>{restaurant?.title}</a>
        </li>
      ))}
    </ul>
  );
}
