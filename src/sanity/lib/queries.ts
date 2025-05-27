import { defineQuery } from "next-sanity";

export const RESTAURANT_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  _id, name, slug, main_image, main_logo, secondary_logo, main_description, secondary_image, blocks
}`);

export const RESTAURANT_LOGO_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  main_logo, secondary_logo
}`);
