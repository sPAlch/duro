/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {}

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplates = {
    landing: path.resolve(`src/templates/landing.jsx`),
    product: path.resolve(`src/templates/product.jsx`),
    about: path.resolve(`src/templates/about.jsx`),
    investigate: path.resolve(`src/templates/investigate.jsx`),
  }

  const { createPage } = actions
  const { data } = await graphql(
    `
      query {
        site {
          siteMetadata {
            routes {
              slug
              template
              routes {
                link
                slug
                template
              }
            }
          }
        }
      }
    `
  )

  const productType = [
    'automotive',
    'bicycle',
    'motorcycle',
    'atv',
    'industrial',
  ]


  const createRoutes = ({slug, template, routes}, lang, parent) => {
    if( slug && template ){
      const path = parent ? `/${parent}/${slug}` : slug
      createPage({
        path,
        component: pageTemplates[template] || pageTemplates['landing'],
        context: {
          slug,
          lang,
          pagePath: path,
        },
      })

      if(slug === 'product'){
         productType.map( type => {
          createPage({
            path: `${path}/${type}`,
            component: pageTemplates[template] || pageTemplates['landing'],
            context: {
              slug,
              lang,
              pagePath: `${path}/${type}`,
            },
          })           
         })       
      }
    }

    if(routes) routes.map( route => createRoutes(route, lang, slug))
  }

  data.site.siteMetadata.routes.map(route => createRoutes(route, route.slug))
}

exports.onCreatePage = async ({ page, actions }) => {
  console.log('onCreatePage', page.path)
}
