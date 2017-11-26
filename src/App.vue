<template>
  <div id="app">
    <app-header></app-header>

    <main>
      <router-view></router-view>
    </main>

    <app-footer>
      PAGE: {{ page }}
      <ul slot="footer">
        <li v-on:click="navigate(1)" v-bind:class="{ active: page === 1 }">
        </li>
        <li v-on:click="navigate(2)" v-bind:class="{ active: page === 2 }">
        </li>
        <li v-on:click="navigate(3)" v-bind:class="{ active: page === 3 }">
        </li>
      </ul>
    </app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    },

    computed: {
      page () {
        return this.$store.state.page
      }
    },

    methods: {
      ...mapActions([
        'navigate' // map `this.increment()` to `this.$store.dispatch('increment')`
      ])
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
    background: #607d8a
    height: 5vh
    line-height: 5vh

  main
    text-align: center
    flex: 1

  footer
    background: #607d8a
    height: 5vh

    li
      cursor: pointer
      color: #fff
      opacity: 0.5

      &.active
        background: #42b983
        opacity: 1

      &:hover
        opacity: 1


    // align-self: stretch



</style>
