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
            :src="imageLink + 'studieframjandet.png'" 
            alt="Studiefrämjandet" 
            fluid 
          />
        </b-col>
        <b-col xs="10" sm="5">
          <b-img 
            :src="imageLink + 'kulturparken.png'" 
            alt="Kulturparken" 
            fluid 
          />
        </b-col>
        <b-col xs="10" sm="5" offset-sm="1">
          <b-img 
            :src="imageLink + 'linnestudenterna.png'" 
            alt="Linnéstudenterna" 
            fluid 
          />
        </b-col>
        <b-col xs="10" sm="5">
          <b-img 
            :src="imageLink + 'inCampus.png'" 
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
  import links from "../data/länkar.json"
  export default {
    components: {
      MainLayout
    },
    data: function() {
      return {
        imageLink: ''
      }
    },
    created: function() {
      this.imageLink = links.sponsors;
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