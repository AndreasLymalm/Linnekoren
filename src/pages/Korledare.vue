<template>
  <main-layout
    :page="name"
    :description="'Körledare ' + name"
    :keywords="'körledare, ' + name"
  >
    <b-container class="main">
      <!-- Titel -->
      <div class="conductor-header">
        <b-img
          :src="'http://linnekoren.se/images/körledare/' + template + '.jpg'"
          :alt="name"
          @error="replaceImageByDefault"
          fluid
        />
        <h3>
          {{ name }}
          <small class="h3-subtitle">Körledare {{ years }}</small>
        </h3>
      </div>

      <!-- Citat -->
      <blockquote v-if="hasQuote">
        <p v-for="(part, index) in quote" :key="index">{{ part }}</p>
        <small>
          <cite>{{ name }}</cite>
        </small>
      </blockquote>

      <!-- Fem snabba -->
      <div id="fem-snabba" v-if="hasQuestions">
        <heading title="Fem snabba" />
        <b-container>
          <b-row>
            <b-col
              v-for="(question, index) in questions"
              :key="index"
              md="5"
              :offset-md="isEven(index) ? 1 : 0"
            >
              <h4>{{ question.question }}</h4>
              <p>{{ question.answer }}</p>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <!-- Musikalisk bakgrund -->
      <div id="musikalisk-bakgrund" v-if="hasMusicalHistory">
        <heading title="Musikalisk bakgrund" />
        <ul class="musical-background">
          <li
            v-for="(historyItem, index) in musicalHistory"
            :key="index"
          >{{ historyItem.what }}, {{ historyItem.where }}</li>
        </ul>
      </div>
    </b-container>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import { hasArrayItems } from "../globalFunctions";
import json from "../data/körledare.json";
export default {
  components: {
    MainLayout
  },
  data: function() {
    return {
      template: "",
      name: "",
      years: "",
      quote: [],
      questions: [],
      musicalHistory: []
    };
  },
  computed: {
    hasQuote: function() {
      return hasArrayItems(this.quote);
    },
    hasQuestions: function() {
      return hasArrayItems(this.questions);
    },
    hasMusicalHistory: function() {
      return hasArrayItems(this.musicalHistory);
    }
  },
  methods: {
    replaceImageByDefault(e) {
      e.target.src = require('../assets/images/person-placeholder.png')
    },
    isEven: function(index) {
      return index % 2 == 0
    }
  },
  created: function() {
    // Read template from URL query
    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)
    this.template = params.get("name")

    // Load data
    let korledare = json[this.template]
    if (korledare) {
      this.name = korledare.name
      this.years = korledare.years
      this.quote = korledare.quote
      this.questions = korledare.questions
      this.musicalHistory = korledare.musicalHistory
    }
    else {
      window.location.href = '404';
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../settings.scss";
blockquote {
  padding: 10px 20px;
  margin-left: 1em;
  border-left: 5px solid #eee;
  font-style: italic;

  cite:before {
    content: "\2014 \00A0";
  }
}

$img-size: 300px;

.conductor-header {
  background: map-get($color, main);
  margin-bottom: 1em;
  display: block;
  padding: 5px;

  @include respond-to("small") {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: $img-size;
    align-items: end;
    justify-items: center;
    padding: 1em;
  }

  img {
    filter: grayscale(100%);
    @include respond-to("small") {
      filter: grayscale(100%) drop-shadow(10px 10px 5px);
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  h3 {
    z-index: 1;
    background: map-get($color, main-transparency);
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    font-size: 2.5em;
    text-align: center;

    .h3-subtitle {
      color: map-get($color, bright);
      font-size: 0.5em;
      display: block;
      margin-top: 4px;
    }
  }
}

h4 {
  font-size: 25px;
}

.musical-background {
  $list-item-size: 20px;

  li {
    font-size: $list-item-size;
    margin-bottom: 10px;

    &::before {
      background-image: url("../assets/images/music-note-green.png");
      background-size: $list-item-size $list-item-size;
      display: inline-block;
      width: $list-item-size;
      height: $list-item-size;
      content: "";
      margin-right: 5px;
    }
  }
}
</style>