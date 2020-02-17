<template>
  <main-layout
    page="Körledarna"
    description="Linnékörens körledare genom åren."
    keywords="körledare"
  >
    <b-container class="main">
      <heading title="Körledarna" />
      <b-row>

        <!-- Shu Tabira -->
        <person-card 
          name="Shu Tabira"
          years="2020-nu" />

        <!-- Sofia Dahlén -->
        <person-card 
          name="Sofia Dahlén"
          years="2017-2018" />

        <!-- Frida Johansson -->
        <person-card 
          name="Frida Johansson"
          years="2014-2017" 
          readMore />

        <!-- Magnus Järvelid -->
        <person-card 
          name="Magnus Järvelid"
          years="2013-2014"
          readMore />

      </b-row>
    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import PersonCard from '../components/PersonCard'
  export default {
    components: {
      MainLayout,
      PersonCard
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";

</style>