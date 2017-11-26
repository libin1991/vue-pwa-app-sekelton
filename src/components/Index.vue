<template>
  <div class="page">
    <card-slider>
      <card slot="left">
        <div slot="header">HEAD1 </div>
        <div slot="content">MAIN1</div>
        <div slot="footer">
          <router-link to="settings">Settings</router-link>
        </div>
      </card>

      <card slot="center">
        <div slot="header">HEAD2 </div>
        <div slot="content">MAIN2</div>
        <div slot="footer">
          <router-link to="settings">Settings</router-link>
        </div>
      </card>

      <card slot="right">
        <div slot="header">HEAD3</div>
        <div slot="content">MAIN3</div>
        <div slot="footer">
          <router-link to="settings">Settings</router-link>
        </div>
      </card>
    </card-slider>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.page {
  display: flex;
  height: 80vh;
}
</style>
