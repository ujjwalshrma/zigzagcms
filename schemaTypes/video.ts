import {defineType} from 'sanity'

export default defineType({
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'creditList',
      type: 'array',
      title: 'Credit List',
      description: 'A formatted list of credits for the video with rich text options',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoSize',
      type: 'string',
      title: 'Video Size',
    },
    {
      name: 'resolution',
      type: 'string',
      title: 'Resolution',
    },
    {
      name: 'director',
      type: 'reference',
      title: 'Director Name',
      to: [{type: 'director'}],
    },
    {
      name: 'producer',
      type: 'reference',
      title: 'Producer Name',
      to: [{type: 'producer'}],
      description: 'Add producer name and videos to show in the roster window.',
    },
    {
      name: 'dop',
      type: 'string',
      title: 'Director of Photography (DoP)',
    },
    {
      name: 'format',
      type: 'string',
      title: 'Format',
    },
    {
      name: 'team',
      type: 'reference',
      title: 'Team Member Name',
      to: [{type: 'team'}],
      description: 'Add team member name and videos to show in the roster window.',
    },
    {
      name: 'Meow',
      type: 'reference',
      title: 'Meow Name',
      to: [{type: 'Meow'}],
      description: 'Add Meow names and videos to show in the roster window.',
    },
    {
      name: 'industry',
      type: 'reference',
      title: 'Industry',
      to: [{type: 'industry'}],
    },
    {
      name: 'client',
      type: 'reference',
      title: 'Client',
      to: [{type: 'client'}],
    },
    {
      name: 'isShowreel',
      type: 'boolean',
      title: 'Make this video Showreel for Home Launcher Section',
      options: {
        layout: 'checkbox',
      },
    },
  ],
})
