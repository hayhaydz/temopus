module.exports = {
  siteMetadata: {
    title: "Home",
    titleTemplate: " // Temopus // Bringing the past into the future. // Wells, Somerset",
    description: "Focussed on creating the best experience for our clients and their customers. Using modern technlogies to provide an enjoyable and unique experience to our users. Based in Somerset. Built in Somerset.",
    url: "https://temopus.digital",
    siteUrl: "https://temopus.digital",
    image: "/social_image.jpg"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Temopus`,
        short_name: `Temopus`,
        start_url: `/`,
        background_color: `#F9F3E9`,
        theme_color: `#121212`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2400,
              quality: 100,
              withWebp: true,
              loading: 'lazy',
              linkImagesToOriginal: false,
              wrapperStyle: 'overflow: hidden'
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify-cms`
  ],
}
