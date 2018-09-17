module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],
  // mode: 'spa',
  generate: {
    routes: [
      '/article/5',
      '/article/99'
    ]
  },
  axios: {
    proxyHeaders: false,
    credentials: false
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.graphloc.com/graphql',
      }
    }
  }
}
