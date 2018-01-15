module.exports = {
  siteMetadata: {
    title: 'Product Highway',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`,
        name: 'blog'
      }
    },
    'gatsby-transformer-remark'
  ],
};
