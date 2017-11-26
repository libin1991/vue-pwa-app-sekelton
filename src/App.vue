<template>
  <div id="app">
    <app-header></app-header>

    <main>
      <router-view></router-view>
    </main>

    <app-footer>
      <ul slot="footer">
        <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">1</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">2</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">3</a></li>
      </ul>
    </app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="sass">
  #app
    background: #98C2C2
    background-image: linear-gradient(to top, #98C2C2 25%, #98C2C2 50%, #50A7C2 75%, #50A7C2 100%);

    display: flex
    flex-flow: column
    height: 100%
    // display: flex
    // flex-direction: column
    // align-items: space-around
    // justify-content: space-around
    // flex: 1
    // align-self: stretch
    flex-basis: fill
    flex-wrap: wrap

  header
    background: green
    height: 10vh
    // align-self: stretch

  main
    text-align: center
    flex: 1

  footer
    background: red
    height: 10vh


    // align-self: stretch



</style>
