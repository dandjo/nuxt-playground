<template>
  <div>
    <h1>Hello my friend!</h1>
    <p>
      Consider visiting our article page at
      <nuxt-link to="/article/99">Article 99</nuxt-link>
      <br>
      or be happy with the weather in
      <nuxt-link to="/weather/vienna/today">Vienna</nuxt-link>
      today.
      <br>
      We also got a nice GraphQL query to get metadata for your
      <nuxt-link to="/ipaddress">IP address</nuxt-link>.
    </p>
    <nuxt-child/>
  </div>
</template>
