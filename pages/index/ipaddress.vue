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
    <br>
    <div style="width: 100%">
      <iframe
        :src="'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox.lon1 + ',' + bbox.lat1 + ',' + bbox.lon2 + ',' + bbox.lat2 + '&layer=mapnik&marker=' + location.latitude + ',' + location.longitude"
        width="100%"
        height="500"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      />
    </div>
    <br>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  async asyncData ({ app }) {
    let data = await app.$axios.$get('https://ipapi.co/ip')
    return { ipaddress: data }
  },

  data () {
    return {
      ipaddress: null,
      country: {
        iso_code: null
      },
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  },

  computed: {
    bbox: function() {
      return {
        lat1: parseFloat(this.location.latitude) - 0.1,
        lon1: parseFloat(this.location.longitude) - 0.1,
        lat2: parseFloat(this.location.latitude) + 0.1,
        lon2: parseFloat(this.location.longitude) + 0.1
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
