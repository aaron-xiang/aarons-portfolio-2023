export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'projectLink',
      title: 'ProjectLink',
      type: 'string'
    },
    {
      name: 'githubLink',
      title: 'GithubLink',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    }
  ]
}