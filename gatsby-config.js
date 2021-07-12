/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },        
    /*{
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: [`300`]
            //subsets: [`latin`]
          },
        ],
      },
    },*/    
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /_icons/
        }
      }
    }    
  ],
}
