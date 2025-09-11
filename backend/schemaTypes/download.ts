import { defineType, defineField } from "sanity";

export default defineType({
  name: "download",
  title: "Downloads",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
       defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "file",
      title: "Download File (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "file",
    },
  },
});
