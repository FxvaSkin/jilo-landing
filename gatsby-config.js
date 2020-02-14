module.exports = {
  siteMetadata: {
    title: `Ломбард Jilo`,
    description: `Разного рода сео описание`,
    siteUrl: `https://domain.tj`,
    author: `@fxvaskin`,
    items: [
      { key: 'calculator', to: '/#calculator', title: 'Онлайн оценка' },
      { key: 'why', to: '/#why', title: 'Почему мы?' },
      { key: 'branches', to: '/#branches', title: 'Филиалы' },
      { key: 'faq', to: '/#faq', title: 'Популярные вопросы' },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lombard-jilo`,
        short_name: `jilo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
  ],
}
