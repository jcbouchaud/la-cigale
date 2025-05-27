import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const restaurantType = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: "Logo",
      name: "main_logo",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/png",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (Rule) =>
            Rule.required().error("Texte alternatif requis"),
        },
      ],
      validation: (Rule) => Rule.required().error("Logo requis"),
    }),
    defineField({
      title: "Logo secondaire",
      name: "secondary_logo",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/png",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (Rule) =>
            Rule.required().error("Texte alternatif requis"),
        },
      ],
      validation: (Rule) => Rule.required().error("Logo requis"),
    }),
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().error("Nom requis"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required().error("Slug requis"),
    }),
    defineField({
      title: "Image principale",
      name: "main_image",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/jpeg",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (Rule) =>
            Rule.required().error("Texte alternatif requis"),
        },
      ],
      validation: (Rule) => Rule.required().error("Image principale requise"),
    }),
    defineField({
      title: "Image secondaire",
      name: "secondary_image",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/jpeg",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (Rule) =>
            Rule.required().error("Texte alternatif requis"),
        },
      ],
      validation: (Rule) => Rule.required().error("Image secondaire requise"),
    }),
    defineField({
      title: "Description principale",
      name: "main_description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) =>
        Rule.required().error("Description principale requise"),
    }),
    defineField({
      title: "Blocs",
      name: "blocks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Titre",
              validation: (Rule) => Rule.required().error("Titre requis"),
            },
            {
              type: "string",
              name: "description",
              title: "Description",
              validation: (Rule) =>
                Rule.required().error("Description requise"),
            },
            {
              type: "image",
              name: "image",
              title: "Image",
              validation: (Rule) => Rule.required().error("Image requise"),
              options: {
                hotspot: true,
                accept: "image/jpeg",
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Texte alternatif",
                  validation: (Rule) =>
                    Rule.required().error("Texte alternatif requis"),
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      title: "Adresse",
      name: "address",
      type: "string",
      validation: (Rule) => Rule.required().error("Adresse requise"),
    }),
    defineField({
      title: "Horaires",
      name: "hours",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Horaires requises"),
    }),
    defineField({
      title: "Téléphone",
      name: "phone_number",
      type: "string",
      validation: (Rule) => Rule.required().error("Téléphone requis"),
    }),
    defineField({
      title: "Url Facebook",
      name: "facebook_url",
      type: "url",
      validation: (Rule) => Rule.required().error("Url Facebook requise"),
    }),
    defineField({
      title: "Url Instagram",
      name: "instagram_url",
      type: "url",
      validation: (Rule) => Rule.required().error("Url Instagram requise"),
    }),
    defineField({
      title: "Mentions légales",
      name: "legal_notice",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Mentions légales requises"),
    }),
    defineField({
      title: "Carte Restaurant",
      name: "restaurant_menu",
      type: "file",
      validation: (Rule) => Rule.required().error("Carte Restaurant requise"),
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      title: "Carte Bar",
      name: "bar_menu",
      type: "file",
      validation: (Rule) => Rule.required().error("Carte Bar requise"),
      options: {
        accept: "application/pdf",
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "main_description",
    },
  },
});
