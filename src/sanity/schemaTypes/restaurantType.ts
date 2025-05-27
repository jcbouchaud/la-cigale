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
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "main_description",
    },
  },
});
