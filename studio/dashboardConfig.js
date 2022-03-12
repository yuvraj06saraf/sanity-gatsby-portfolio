export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '622cfa1b34cc7f2b38a38c48',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1kv4kquf',
                  apiId: 'd7fb09c1-63ec-439d-80df-c356dd5c1b2c'
                },
                {
                  buildHookId: '622cfa1b3697de16e08118c5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qothaoxo',
                  apiId: '95ba8ee1-e585-484d-800b-828e3cb9600b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuvraj06saraf/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qothaoxo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
