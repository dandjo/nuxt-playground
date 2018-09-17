<template>
  <div>
    <h2>Enter an IP address</h2>
    <input
      v-model="ip">
    <br><br>
    {{ city }} | {{ region }} | {{ country }}
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
import IPLOCATION from '@/gql/iplocation'

export default {
  async asyncData (context) {
    let response = await context.app.$axios.$get('https://ipapi.co/json')
    return {
      ip: response.ip,
      city: response.city,
      region: response.region,
      country: response.country
    }
  },

  data () {
    return {
      ip: null,
      city: null,
      region: null,
      country: null,
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  },

  computed: {
    bbox: function () {
      return {
        lat1: parseFloat(this.location.latitude) - 0.1,
        lon1: parseFloat(this.location.longitude) - 0.1,
        lat2: parseFloat(this.location.latitude) + 0.1,
        lon2: parseFloat(this.location.longitude) + 0.1
      }
    }
  },

  apollo: {
    location: {
      query: IPLOCATION,
      variables () {
        return {
          ip: this.ip
        }
      },
      // We need this to assign the value of the 'location' component property
      update (data) {
        if (data.getLocation) {
          return data.getLocation.location
        }
        return this.location
      }
    }
  }
}
</script>
