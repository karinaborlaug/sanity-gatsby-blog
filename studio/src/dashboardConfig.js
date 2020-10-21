export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f906f859befe400d74dfd00',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pyxgki3t',
                  apiId: '5f7eb584-fdd1-4af1-8a67-db8212beb905'
                },
                {
                  buildHookId: '5f906f86bf957b00de55fa7e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cpxojj8f',
                  apiId: '8400acbe-4fda-4dee-943b-5013d440bbfb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karinabot/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cpxojj8f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
