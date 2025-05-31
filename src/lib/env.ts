export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const zenchefRestaurantId = assertValue(
  process.env.NEXT_PUBLIC_ZENCHEF_RESTAURANT_ID,
  "Missing environment variable: NEXT_PUBLIC_ZENCHEF_RESTAURANT_ID"
);

export const restaurantSlug = assertValue(
  process.env.NEXT_PUBLIC_RESTAURANT_SLUG,
  "Missing environment variable: NEXT_PUBLIC_RESTAURANT_SLUG"
);
