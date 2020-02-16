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
          <b-img
            src="http://linnekoren.se/images/sponsorer/studieframjandet.png" 
            alt="Studiefrämjandet" 
            fluid 
          />
        </b-col>
        <b-col xs="10" sm="5">
          <b-img 
            src="http://linnekoren.se/images/sponsorer/kulturparken.png" 
            alt="Kulturparken" 
            fluid 
          />
        </b-col>
        <b-col xs="10" sm="5" offset-sm="1">
          <b-img 
            src="http://linnekoren.se/images/sponsorer/linnestudenterna.png" 
            alt="Linnéstudenterna" 
            fluid 
          />
        </b-col>
        <b-col xs="10" sm="5">
          <b-img 
            src="http://linnekoren.se/images/sponsorer/inCampus.png" 
            alt="inCampus" 
            fluid 
          />
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