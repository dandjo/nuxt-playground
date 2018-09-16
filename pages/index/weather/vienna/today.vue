<template>
  <div>
    <h2>{{ data.name }}</h2>
    <table>
      <tr>
        <td>Current temperature</td>
        <td>{{ data.d0.t }}°C</td>
      </tr>
      <tr>
        <td>Maximum temperature</td>
        <td>{{ data.d0.tmax }}°C</td>
      </tr>
      <tr>
        <td>Minimum temperature</td>
        <td>{{ data.d0.tmin }}°C</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table {
    color: #333333;
    font-family: Helvetica, Arial, sans-serif;
    width: 300px;
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    border: 1px solid transparent;
    padding: 5px;
    transition: all 0.3s;
    background: #fafafa;
  }

  tr:nth-child(odd) td {
    background: #f1f1f1;
  }

  tr:nth-child(even) td {
    background: #fefefe;
  }

  tr td:hover {
    background: #666666;
    color: #ffffff;
  }
</style>

<script>
export default {
  async asyncData ({ app }) {
    let data = await app.$axios.$get('https://api.kurier.at/v1/weather/austria/wien/wien')
    return { data: data }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  }
}
</script>
