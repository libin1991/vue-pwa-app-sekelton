<template>
  <div id="wrapper">
    <div id="window">
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

<style lang="sass">
  #wrapper
    background: #fff
    border: 2px dotted red
    width: 100vw
    height: 100%
    background: grey
    overflow: hidden

  #window
    background: red
    border: 2px solid grey
    display: flex
    transition: all 500ms
    width: 300vw
    height: 100%

  .slider-item
    width: 100vw
    height: 100%
    background: #fff

  #window:hover
    transform: translateX(-200vw)
</style>
