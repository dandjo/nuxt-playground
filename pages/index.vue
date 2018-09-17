<template>
  <div>
    <nav>
      <ul>
        <li>
          <a href="javascript:">Articles</a>
          <ul>
            <li>
              <nuxt-link to="/article/5">Article 5</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/article/99">Article 99</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:">Weather</a>
          <ul>
            <li>
              <nuxt-link to="/weather/vienna/today">Vienna Today</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/ip">IP address</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cat">CAT content</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child/>
  </div>
</template>

<style lang="scss">
  body {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  nav {
    margin-top: 15px;
    width: 100%;
    height: 32px;
    background-color: #000000;
    ul {
      list-style: none;
      position: relative;
      float: left;
      margin: 0;
      padding: 0;
      a {
        display: block;
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;
        font-size: 12px;
        line-height: 32px;
        padding: 0 15px;
      }
      li {
        position: relative;
        float: left;
        margin: 0;
        padding: 0;
        border-right: 1px solid #ffffff;
        &:hover {
          background: #f2f2f2;
          color: #000000;
          transition: all 0.3s;
        }
        &:hover > ul {
          display: block;
        }
        &:hover > a {
          color: #000000;
        }
      }
      ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #000000;
        padding: 0;
        li {
          float: none;
          width: 200px;
        }
        a {
          line-height: 120%;
          padding: 10px 15px;
        }
        ul {
          top: 0;
          left: 100%;
        }
      }
    }
  }

  p {
    clear: left;
  }
</style>
