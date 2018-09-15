module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],
  // mode: 'spa',
  generate: {
    routes: [
      '/article/99'
    ]
  },
  axios: {
    // proxyHeaders: false
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.graphloc.com/graphql',
      }
    }
  }
}
