<template>
<b-container class="media-card">
  <b-row>

    <b-col md="4" lg="3" align-self="start">
      <b-row>
      
        <!-- Beskrivning -->
        <b-col sm="6" md="12">
          <div class="description">{{ description }}</div>
        </b-col>

        <!-- Affisch --> 
        <b-col class="poster d-none d-sm-flex" sm="6" md="12">
          <b-img-lazy class="poster" v-if="poster" :src="poster" fluid />
        </b-col>

      </b-row>
    </b-col>

    <!-- Media -->
    <b-col md="8" lg="9">
      <b-row>
        
        <!-- Videor -->
        <b-col>
          <video 
            class="video"
            v-for="(video, i) in internalVideos" 
            :key="i" 
            height="200px" 
            preload="metadata"
            controls
          >
            <source :src="video.src" type="video/mp4">
          </video>
          <iframe 
            class="video"
            v-for="(video, i) in externalVideos" 
            :key="i" 
            height="200px" 
            :src="video.src"
          ></iframe>
        </b-col>

      </b-row>
      <b-row>

        <!-- Bilder -->
        <b-col>
          <gallery 
            :id="'blueimp-gallery-' + id"
            :images="images" 
            :index="imageIndex" 
            :options="{ 'container': '#blueimp-gallery-' + id}"
            @close="imageIndex = null"
          ></gallery>
          <div
            class="image"
            v-for="(image, i) in images"
            :key="i"
            @click="imageIndex = i"
            :style="{ backgroundImage: 'url(' + image + ')', width: '70px', height: '70px' }"
          ></div>
        </b-col>

      </b-row>
      <b-row>

        <!-- Musikspelare -->
        <b-col>
          <aplayer 
            theme="#591845"
            v-if="audio && audio.length > 0"
            :music="audio[0]"
            :list="audio"
          />
        </b-col>

      </b-row>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import aplayer from 'vue-aplayer'
import VueGallery from 'vue-gallery';
export default {
  components: {
    aplayer,
    'gallery': VueGallery
  },
  props: {
    id: Number,
    poster: String,
    description: {
        type: String,
        required: true
    },
    images: Array,
    audio: Array,
    videos: Array
  },
  data: function () {
    return {
      imageIndex: null
    };
  },
  methods: {
    replaceImageByDefault(e) {
      e.target.src = require('../assets/images/person-placeholder.png')
    }
  },
  computed: {
    internalVideos: function() {
      return this.videos.filter(v => !v.isExternal)
    },
    externalVideos: function() {
      return this.videos.filter(v => v.isExternal)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../settings.scss";
.media-card {
  background-color: map-get($color, lightgrey);
  border: 2px solid map-get($color, main);
  border-radius: 5px;
  margin-top: 1em;
  padding: 1em;
}

.poster {
  border-radius: 5px;
}

.description {
  background-color: map-get($color, bright);
  border: 2px solid map-get($color, grey);
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 5px;
}

.video {
  margin: 5px 0px 0px 5px;
}

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }

</style>