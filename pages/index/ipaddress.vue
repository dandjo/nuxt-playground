<template>
  <div>
    <h2>Enter an IP address</h2>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="ipaddress">
      <button
        type="submit">
        fetch
      </button>
    </form>
    Country: {{ country.iso_code }}
    <br>
    Location: {{ location.latitude }}, {{ location.longitude }}
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      ipaddress: null,
      country: {
        iso_code: null
      },
      location: {
        latitude: null,
        longitude: null
      }
    }
  },

  methods: {
    async handleSubmit () {
      const client = this.$apollo.getClient()
      let response = await client.query({
        query: gql`
          query GetLocation($ip: String!) {
            getLocation(ip: $ip) {
              country {
                iso_code
              }
              location {
                latitude
                longitude
              }
            }
          }
        `,
        variables: {
          ip: this.ipaddress
        }
      })
      if (response.data.geoLocation === null) {
        return
      }
      this.country = response.data.getLocation.country
      this.location = response.data.getLocation.location
    }
  }
}
</script>
