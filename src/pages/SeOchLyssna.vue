<template>
  <main-layout
    page="Se och lyssna"
    description="Lyssna på Linnékörens tidigare uppträdanden."
    keywords="lyssna, körsång, uppträdanden, konserter, historik"
  >
    <b-container class="main">
      <heading title="Se och lyssna" />

      <b-container>
        <video height="200px" controls>
          <source src="http://linnekoren.se/videos/2016höst-där-du-andas.mp4" type="video/mp4">
        </video>
        <b-row>
          <b-col class="d-none d-sm-flex" sm="3" md="2" lg="3">
            <b-img-lazy src="http://linnekoren.se/images/affischer/2014höst-bring-the-beat-in.jpg" fluid />
          </b-col>
          <b-col sm="9" md="10" lg="3">Inspelningarna skedde under Linnékörens konsert “Bring The Beat In!” på Palladium i Växjö den 5 november 2014. Medverkade gjorde även musiker från S:t Sigfrids Folkhögskola. Körledare var Frida Johansson.</b-col>
          <b-col cols="12" lg="6">
            <b-row>
              <b-col>
                <!-- Bilder -->
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                  class="image"
                  v-for="(image, imageIndex) in images"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')', width: '70px', height: '70px' }"
                ></div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <!-- Musikspelare -->
                <aplayer 
                  theme="#591845"
                  :music="{
                    title: 'Fin är du',
                    artist: 'Linnékören, Palladium Växjö, hösten 2014',
                    src: 'http://linnekoren.se/audio/2014höst-fin-är-du.wav',
                    pic: ''
                  }"
                  :list="[
                    {
                      title: 'Fin är du',
                      artist: 'Linnékören, Palladium Växjö, hösten 2014',
                      src: 'http://linnekoren.se/audio/2014höst-fin-är-du.wav'
                    },
                    {
                      title: 'Torn',
                      artist: 'Linnékören, Palladium Växjö, hösten 2014',
                      src: 'http://linnekoren.se/audio/2014höst-torn.wav'
                    }
                  ]"
                />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>


    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import aplayer from 'vue-aplayer'
  import VueGallery from 'vue-gallery';
  export default {
    components: {
      MainLayout,
      aplayer,
      'gallery': VueGallery
    },
    data: function () {
      return {
        images: [
          'http://linnekoren.se/images/posters/2014höst-bring-the-beat-in.jpg',
          'http://linnekoren.se/images/sponsorer/linnestudenterna.png',
          'http://linnekoren.se/videos/2016höst-där-du-andas.mp4',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>