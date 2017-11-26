<template>
  <footer class="center">
    <slot name="footer">DEFAULT FOOTER</slot>
  </footer>
</template>

<style lang="sass">
  footer
    margin: 0
    // background-color: #35495E
    color: #ffffff
    display: block
    position: relative
    font-size: 20px
    line-height: 1
    letter-spacing: .02em
    font-weight: 400

    li
      display: inline-block
      background: #fff
      width: 2rem
      height: 2rem
      line-height: 2rem
      outline: none
      border-radius: 50%
</style>
