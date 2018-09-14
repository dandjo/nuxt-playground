module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],
  mode: 'spa',
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
