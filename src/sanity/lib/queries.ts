import { defineQuery } from "next-sanity";

export const RESTAURANTS_QUERY =
  defineQuery(`*[_type == "restaurant" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const RESTAURANT_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  _id, title, slug, publishedAt
}`);
