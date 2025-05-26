import {defineType} from 'sanity'

export default defineType({
  name: 'zigzagtv',
  type: 'document',
  title: 'ZigzagTv Videos',
  fields: [
    {
      name: 'videos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'video'}]}],
    },
  ],
})
