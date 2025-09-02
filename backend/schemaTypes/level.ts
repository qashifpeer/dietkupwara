import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'level',
  title: 'Level',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
