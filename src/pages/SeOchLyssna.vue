<template>
  <main-layout
    page="Se och lyssna"
    description="Lyssna på Linnékörens tidigare uppträdanden."
    keywords="lyssna, körsång, uppträdanden, konserter, historik"
  >
    <b-container class="main">
      <heading title="Se och lyssna" />

        <!-- List years -->
        <ul class="year-selection">
          <li 
            v-for="(year, i) in activeYears" 
            :key="i" 
            :class="{ active: isActive(year) }"
            @click="currentYear = year"
          >{{ year }}</li>
        </ul>

        <!-- Media -->
        <media v-for="(resource, i) in currentYearResources"
          :key="i"
          :id="i"
          :poster="resource.poster"
          :description="resource.description"
          :images="resource.images"
          :audio="resource.audio"
          :videos="resource.videos"
        />

    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Media from '../components/Media'
  import json from "../data/se-och-lyssna.json";
  export default {
    components: {
      MainLayout,
      Media
    },
    data: function () {
      return {
        resources: [],
        activeYears: [],
        currentYear: new Date().getFullYear()
      };
    },
    computed: {
      currentYearResources: function() {
        return this.resources.filter(r => {
          let year = new Date(r.date).getFullYear()
          
          return year === this.currentYear
        })
      }
    },
    methods: {
      isActive: function(year) {
        return year == this.currentYear
      }
    },
    created: function() {
      this.resources = JSON.parse(JSON.stringify(json.history));

      // Check JSON
      if (this.resources && Array.isArray(this.resources)) {
        let base = 'https://linnekoren.se/'

        for (let resourceIndex = 0; resourceIndex < this.resources.length; resourceIndex++) {
          let resource = this.resources[resourceIndex]

          // Check key 'date'
          if (resource.date) {
            let year = new Date(resource.date).getFullYear()
            if (!this.activeYears.includes(year))
              this.activeYears.push(year)
          }

          // Check key 'poster'
          if (resource.poster) {
            resource.poster = base + 'images/affischer/' + resource.poster
          }
          // Check key 'images'
          if (resource.images) {
            if (Array.isArray(resource.images)) {
              for (let i = 0; i < resource.images.length; i++) {
                resource.images[i] = base + 'images/kören/' + resource.images[i]
              }
            }
            else {
              resource.images = []
            }
          }
          // Check key 'audio'
          if (resource.audio) { 
            if (Array.isArray(resource.audio)) {
              for (let i = 0; i < resource.audio.length; i++) {
                if (!resource.audio[i].src) {
                  resource.audio = []
                  break
                }
                resource.audio[i].src = base + 'audio/' + resource.audio[i].src
                resource.audio[i].artist = 'Linnékören'
              }
            }
            else {
              resource.audio = []
            }
          }
          // Check key 'videos'
          if (resource.videos) {
            if (Array.isArray(resource.videos)) {
              for (let i = 0; i < resource.videos.length; i++) {
                if (!resource.videos[i].src) {
                  resource.videos = []
                  break
                }
                if (!resource.videos[i].isExternal)
                resource.videos[i].src = base + 'videos/' + resource.videos[i].src
              }
            }
            else {
              resource.videos = []
            }
          }
        }

        this.currentYear = Math.max(...this.activeYears)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";
.year-selection {
  padding: 0px;

  & > li {
    display: inline-block;
    border: 1px solid map-get($color, grey);
    border-radius: 5px;
    padding: 5px 1em;
    margin: 5px;

    &:hover, &.active {
      background-color: map-get($color, lightgrey);
      border-color: map-get($color, main);
    } 
  }
}
</style>