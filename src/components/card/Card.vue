<template>
  <div class="card">
    <slot name="header">
      CARD HEADER
    </slot>

    <slot name="content">
      CARD CONTENT
    </slot>

    <slot name="footer">
      CARD FOOTER
    </slot>
  </div>
</template>

<script>
  import CardHeader from './CardHeader.vue'
  import CardContent from './CardContent.vue'
  import CardFooter from './CardFooter.vue'
  export default {
    name: 'hello',
    components: {
      CardHeader,
      CardContent,
      CardFooter
    },

    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    }
  }
</script>

<style lang="sass">
  .card
    display: flex
    flex-direction: column
    height: 100%
</style>
