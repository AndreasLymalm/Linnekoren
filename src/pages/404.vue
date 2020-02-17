<template>
  <main-layout
    page="404"
  >
    <b-container class="main">
      <p>404!!! Sidan hittades inte! \(*o*)/ \(*o*)/ \(*o*)/</p>
      <p>Det måste kännas jobbigt nu. Som tröst, lyssna på lite av vår fina körsång:</p>
      <aplayer 
        theme="#599832"
        :music="{
          title: 'Fin är du',
          artist: 'Linnékören',
          src: 'http://linnekoren.se/audio/2014höst-fin-är-du.wav',
          pic: require('../assets/images/logo.png')
        }" />
    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import aplayer from 'vue-aplayer'
  export default {
    name: 'ErrorPage',
    components: {
      MainLayout,
      aplayer
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";

</style>