<template>
  <h2>{{ name }}: {{ id }}</h2>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  asyncData (context) {
    // Called every time before loading the component
    return { name: 'Article', id: context.params.id }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  }
}
</script>
