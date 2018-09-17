<template>
  <div>
    <h2>Cat content</h2>
    <img :src="url">
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    let result = await context.app.$axios.$get('https://api.thecatapi.com/v1/images/search')
    return {
      url: result[0].url
    }
  },

  data () {
    return {
      url: null
    }
  }
}
</script>
