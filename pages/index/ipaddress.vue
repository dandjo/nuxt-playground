<template>
  <div>
    <h2>Enter an IP address</h2>
    <input
      v-model="ipaddress">
    <br><br>
    Country: {{ iplocation.country.iso_code }}
    <br>
    Location: {{ iplocation.location.latitude }}, {{ iplocation.location.longitude }}
    <br>
    <div style="width: 100%">
      <iframe
        :src="'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox.lon1 + ',' + bbox.lat1 + ',' + bbox.lon2 + ',' + bbox.lat2 + '&layer=mapnik&marker=' + iplocation.location.latitude + ',' + iplocation.location.longitude"
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
    let ipaddress = await context.app.$axios.$get('https://ipapi.co/ip')
    return { ipaddress: ipaddress }
  },

  data () {
    return {
      ipaddress: null,
      iplocation: {
        country: {
          iso_code: null
        },
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    }
  },

  computed: {
    bbox: function() {
      return {
        lat1: parseFloat(this.iplocation.location.latitude) - 0.1,
        lon1: parseFloat(this.iplocation.location.longitude) - 0.1,
        lat2: parseFloat(this.iplocation.location.latitude) + 0.1,
        lon2: parseFloat(this.iplocation.location.longitude) + 0.1
      }
    }
  },

  apollo: {
    iplocation: {
      query: IPLOCATION,
      variables () {
        return {
          ip: this.ipaddress
        }
      },
      // We need this to assign the value of the 'iplocation' component property
      // because the gql query function is called 'getLocation'
      update (data) {
        return data.getLocation || this.iplocation
      }
    }
  }
}
</script>
