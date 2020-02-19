<template>
  <main-layout
    page="Kontakt"
    description="Kontakta Linnékörens styreslse eller besök oss på sociala medier."
    keywords="kontakt, mejl, e-post, facebook, instagram, adress, organisationsnummer"
  >
    <b-container class="main">

      <!-- Conductor -->
      <div id="conductor">
        <heading title="Körledare" />
        <b-row>
          <b-col sm="4">
            <figure>
              <b-img
                :src="'https://linnekoren.se/images/körledare/' + kebabName(conductor) + '.jpg'"
                :alt="conductor"
                @error="replaceImageByDefault"
                fluid
              />
            </figure>
          </b-col>
          <b-col sm="8" class="contact-entity">
            <p class="contact-name">{{ conductor }}</p>
            <p class="e-mail">korledare@linnekoren.se</p>
          </b-col>
        </b-row>
      </div>

      <!-- Board -->
      <div id="board">
        <heading title="Styrelse" />

        <!-- Whole board -->
        <b-row>
          <b-col md="6" lg="7">
            <figure>
              <b-img
                v-if="showBoardImage"
                src="https://linnekoren.se/images/styrelse/board.jpg"
                alt="Bild på styrelsen"
                @error="showBoardImage = false"
                fluid
              />
            </figure>
          </b-col>
          <b-col md="6" lg="5" class="contact-entity">
            <p class="contact-name">Vi i styrelsen</p>
            <p class="e-mail">styrelse@linnekoren.se</p>
          </b-col>
        </b-row>

        <!-- Individual members -->
        <b-row id="board-members">
          <b-col cols="12" sm="6" md="4" lg="3" v-for="(member, index) in board" :key="index">
            <figure>
              <b-img
                :src="'https://linnekoren.se/images/styrelse/' + kebabName(member.name) + '.jpg'"
                :alt="member.name"
                @error="replaceImageByDefault"
                fluid
              />
              <figcaption>
                {{ member.name }}<br />
                <small>{{ member.position }}</small>
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </div>

      <!-- Other ways of making contact -->
      <div id="other-contact">
        <heading title="Andra kontaktvägar" />
        <b-container>
          <b-row>
            <!-- Social -->
            <b-col sm="6">
              <h3>Varför inte följa oss på någon av våra sociala medier!</h3>
              <a href="https://www.facebook.com/linnekoren" class="facebook-link">
                <span class="fa fa-facebook-square"></span> Facebook
              </a>
              <a href="https://www.instagram.com/linnekoren/" class="instagram-link">
                <span class="fa fa-instagram"></span> Instagram
              </a>
            </b-col>
            <!-- Address -->
            <b-col sm="6">
              <h3>Behöver du skicka något via post?</h3>
              <table>
                <tr>
                  <td>Föreningen Linnékören Växjö</td>
                </tr>
                <tr>
                  <td>C/O Linnéstudenterna</td>
                </tr>
                <tr>
                  <td>Box 5015</td>
                </tr>
                <tr>
                  <td>350 05 Växjö</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          <!-- Organisation number -->
          <b-row>
            <b-col>
              <h3>Vårt organisationsnummer är 802490-0279.</h3>
            </b-col>
          </b-row>
        </b-container>
      </div>

    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import { kebabName } from "../globalFunctions";
  import json from "../data/nuvarande-ledning.json";
  export default {
    components: {
      MainLayout
    },
    data: function() {
      return {
        conductor: "",
        board: [],
        showBoardImage: true
      };
    },
    methods: {
      replaceImageByDefault(e) {
        e.target.src = require('../assets/images/person-placeholder.png')
      },
      kebabName: function(name) {
        return kebabName(name)
      }
    },
    created: function() {
      // Load data
      this.conductor = json.conductor
      this.board = json.board
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";
  .contact-entity {
    .contact-name {
      font-size: 3em;
    }

    .e-mail {
      padding: 10px 20px;
      font-size: 1.5em;
      @include respond-to("small") {
        font-size: 2em;
      }
    }
  }

  #board {
    #board-members {
      padding-top: 1em;

      figure {
        font-size: 20px;
        padding-bottom: 1em;

        small {
          display: inline-block;
          padding: 2px 5px;
          border-radius: 5px;
          background: map-get($color-defs, button-default);
          color: map-get($color-defs, button-default-text);
        }
      }
    }
  }

  #other-contact {
    a {
      text-decoration: none;
      display: inline-block;
      padding-right: 1em;

      &.facebook-link {
        color: #3b5998;

        &:hover {
          text-shadow: 1px 1px 5px #3b5998;
        }
      }

      &.instagram-link {
        color: #cd486b;

        &:hover {
          text-shadow: 1px 1px 5px #cd486b;
        }
      }
    }

    .fa {
      font-size: 3em;
    }
  }
</style>