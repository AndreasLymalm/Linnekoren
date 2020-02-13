<template>
  <b-col sm="6" lg="4" class="person-card">
    <a :href="readMore ? '/korledare?name=' + kebabName : '#'">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title text-center">
            <h2>{{ name }}</h2>
            <h3>{{ years }}</h3>
          </div>
        </div>
        <div class="panel-body">
          <b-img
            :src="'/images/körledare/' + kebabName + '.jpg'"
            :alt="name"
            fluid
          />
          <div class="overlay" v-if="readMore">
            <div class="read-more-about-conductor">Läs mer</div>
          </div>
        </div>
      </div>
    </a>
  </b-col>
</template>

<script>
import { kebabName } from "../globalFunctions";
export default {
  props: {
    name: {
        type: String,
        required: true
    },
    years: {
        type: String,
        required: true
    },
    readMore: {
        type: Boolean
    }
  },
  computed: {
    kebabName: function() {
      return kebabName(this.name)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../settings.scss";
.person-card {
  margin: 1em 0;
}

.panel {
    background: map-get($color, main);
    padding-top: 1em;

  .panel-body {
    padding: 0;
    position: relative;

    img {
      width: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;

      .read-more-about-conductor {
        color: map-get($color, bright);
        background: map-get($color, main);
        padding: 5px 15px;
        border-radius: 1em;
        font-size: 1.5em;
        font-weight: 800;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  // On larger screens, create hover effect
  @include respond-to("small") {
    .panel-body {
      .overlay {
        transition: 0.5s ease;

        .read-more-about-conductor {
          transition: 0.5s ease;
        }
      }
    }

    &:hover {
      .panel-body {
        .overlay {
          background: map-get($color, main);
          opacity: 0.8;
          transition: 0.5s ease;

          .read-more-about-conductor {
            background: none;
            bottom: 50%;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
</style>