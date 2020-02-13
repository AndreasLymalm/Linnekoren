<template>
  <main-layout
    page="Sponsorer"
    description="Linnékörens sponsorer."
    keywords="sponsorer"
  >
    <b-container class="main">
      <heading title="Sponsorer" />
      <b-row class="row">
        <b-col xs="10" sm="5" offset-sm="1">
          <img :src="require('../assets/images/sponsorer/studieframjandet.png')" fluid alt="Studiefrämjandet" class="img-fluid"/>
        </b-col>
        <b-col xs="10" sm="5">
          <img :src="require('../assets/images/sponsorer/kulturparken.png')" fluid alt="Kulturparken" class="img-fluid"/>
        </b-col>
        <b-col xs="10" sm="5" offset-sm="1">
          <img :src="require('../assets/images/sponsorer/linnestudenterna.png')" fluid alt="Linnéstudenterna" class="img-fluid"/>
        </b-col>
        <b-col xs="10" sm="5">
          <img :src="require('../assets/images/sponsorer/inCampus.png')" fluid alt="inCampus" class="img-fluid"/>
        </b-col>
      </b-row>
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
.row {
  margin: 0 1em;
  img {
    margin: 1em 0;
  }
}
</style>