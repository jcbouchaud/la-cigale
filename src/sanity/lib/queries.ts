import { defineQuery } from "next-sanity";

export const RESTAURANT_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  _id, name, slug, main_image, main_logo, secondary_logo, main_description, secondary_image, blocks, restaurant_menu, bar_menu
}`);

export const RESTAURANT_LOGO_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  main_logo, secondary_logo
}`);

export const RESTAURANT_FOOTER_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  address, phone_number, facebook_url, instagram_url, hours, secondary_logo
}`);

export const RESTAURANT_LEGAL_NOTICE_QUERY =
  defineQuery(`*[_type == "restaurant" && slug.current == $slug][0]{
  legal_notice
}`);
