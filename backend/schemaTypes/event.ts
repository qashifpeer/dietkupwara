import { defineField, defineType } from "sanity";
import { Calendar } from "lucide-react";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: Calendar,
  fields: [
    // Event Title
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (rule) => rule.required().min(5).max(100),
    }),

    // Event Slug (SEO-friendly URL)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // Date of Event
    defineField({
      name: "date",
      title: "Date of Event",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),

    // Feature Image
    defineField({
      name: "featureImage",
      title: "Feature Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),

    // Event Organizer
    defineField({
      name: "eventOrganizer",
      title: "Event Organizer",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    // Short Description
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),

    // Full Event Details (Rich Text)
    defineField({
      name: "eventDetails",
      title: "Event Details",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),

    // SEO Fields
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom title for search engines (leave empty to use Event Title).",
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      description:
        "Short SEO description (recommended 150–160 characters). Leave empty to use Short Description.",
      validation: (rule) => rule.max(160),
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      media: "featureImage",
      organizer: "eventOrganizer",
    },
    prepare(selection) {
      const { title, date, media, organizer } = selection;
      return {
        title,
        subtitle: `${organizer} | ${date ? new Date(date).toDateString() : ""}`,
        media,
      };
    },
  },
});
