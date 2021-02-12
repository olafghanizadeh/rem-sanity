export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '602657fd011f399c41c139d3',
                  title: 'Sanity Studio',
                  name: 'rem-sanity-studio',
                  apiId: '8cd32385-5f08-4cdd-b491-7c6c94858712'
                },
                {
                  buildHookId: '602657fe356820af8f74ad20',
                  title: 'Landing pages Website',
                  name: 'rem-sanity',
                  apiId: '41ac39ef-4ced-4a35-abd1-5103deeed377'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olafghanizadeh/rem-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rem-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
