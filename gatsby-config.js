module.exports = {
  siteMetadata: {
    title: `DURO`,
    routes: [
      {
        slug: 'en',
        template: 'landing',
        routes: [
          { slug: 'product', template: 'product' },
          { slug: 'about', template: 'about' },
          { slug: 'online-shop', link: '#' },
        ]
      },
      {
        slug: 'zh',
        template: 'landing',
        routes: [
          { slug: 'product', template: 'product' },
          { slug: 'about', template: 'about' },
          { slug: 'investigate', template: 'investigate' },
        ]
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assests`,
        path: `${__dirname}/src/assests`,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/product/*`] },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylus`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
