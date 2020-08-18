// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '', // required
        accessToken: '', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
  templates:{
    ContentfulServicios:'/servicios/:slug',
    ContentfulFibra:'/fibras/:slug'
  }
}
