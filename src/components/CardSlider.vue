<template>
  <div id="wrapper">
    <div id="window" v-bind:class="current">
      <div class="slider-item">
        <slot name="left">
          LEFT
        </slot>
      </div>
      <div class="slider-item">
        <slot name="center">
          <img slot="content" src="../assets/logo.png" alt="Vue.js PWA">
        </slot>
      </div>
      <div class="slider-item">
        <slot name="right">
          RIGHT
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import CardSlider from './CardSlider.vue'
  import Card from './card/Card.vue'
  export default {
    name: 'Index',
    components: {
      CardSlider,
      Card
    },

    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },

    computed: {
      current () {
        return `page-${this.$store.state.page}`
      }
    }
  }
</script>

<style lang="sass">
  #wrapper
    background: #fff
    width: 100vw
    height: 100%
    background: grey
    overflow: hidden

  #window
    background: red
    display: flex
    transition: all 500ms
    width: 300vw
    height: 100%

    &.page-1
      transform: translateX(0)
    &.page-2
      transform: translateX(-100vw)
    &.page-3
      transform: translateX(-200vw)

  .slider-item
    width: 100vw
    height: 100%
    background: #fff

  // #window:hover
  //   transform: translateX(-200vw)
</style>
