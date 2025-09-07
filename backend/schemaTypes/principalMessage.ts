import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'principalMessage',
    title: 'Principal Message',
    type: 'document',
    fields: [
        defineField({
            name: 'principalName',
            title: 'Principal Name',
            type: 'string',
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
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
})