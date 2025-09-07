import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'About Us',
            type: 'string',
        }),
        defineField({
            name: 'dietImage',
            title: 'DIET Image',
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [{
                type: 'string',
                name: 'alt',
                title: 'Alt',
            }]
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
         {
            name: "publishedAt",
            title: 'Published at',
            type: 'datetime',
            initialValue : () => new Date().toISOString(),
        },

    ]
});


