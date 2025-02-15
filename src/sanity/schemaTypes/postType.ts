import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'This is part of the URL, click on generate and will show the title as part of the URL',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'Paragraph1',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image1',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'attribution',
          type: 'string',
        })
      ]
    }),
    defineField({
      name: 'Paragraph2',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image2',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'attribution',
          type: 'string',
        })
      ]
    }),
    defineField({
      name: 'Paragraph3',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image3',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'attribution',
          type: 'string',
        })
      ]
    }),
    defineField({
      name: 'Paragraph4',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

  ],
})