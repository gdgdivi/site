module.exports = {
  siteMetadata: {
    title: 'Google Developer Group Divinópolis',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Google Developer Group Divinópolis',
        short_name: 'GDG Divi',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#4688f1',
        display: 'minimal-ui',
        icon: 'favicon.png',
      },
    },
  ]
};
