<template>
  <main-layout
    page="404"
  >
    <b-container class="main">
      <p>404!!! Sidan hittades inte! \(*o*)/ \(*o*)/ \(*o*)/</p>
      <p>Det måste kännas jobbigt nu. Som tröst, lyssna på lite av vår fina körsång:</p>
    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";

</style>