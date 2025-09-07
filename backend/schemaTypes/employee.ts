import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
     defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
     defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
     defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
    }),
     defineField({
      name: 'postHeld',
      title: 'Post Held',
      type: 'string',
    }),
     defineField({
      name: 'qualification',
      title: 'Qualifications',
      type: 'string',
    }),
     defineField({
      name: 'dob',
      title: 'Born In',
      type: 'string',
    }),
      defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
      defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
    }),
    defineField({
      name: 'profileImage',
      title : 'Profile Image',
      type : "image",
            options : {
                hotspot : true,
            },
            fields: [{
                type: 'string',
                name: 'alt',
                title: 'Alt',
            }]
           
    }),
     defineField({
      name: 'bio',
      title: 'BIO',
      type: 'text',
    }),
    
    // defineField({
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
