export default {
  name: 'author',
  type: 'document',
	title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'post',
      type: 'object',
      fields: [
        {
          title: 'Post',
          name: 'post',
          type: 'array',
          of: [{type: 'reference', to:[{type:'post'}]}]
        }
      ]
    }
  ]
}