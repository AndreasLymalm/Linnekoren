<template>
  <main-layout
    description="Välkommen till linnékörens hemsida!"
    keywords="hemsida"
  >
    <div id="welcome-message">
      <img src="../assets/images/logo_big.png" />
      <h1>Linnékören Växjö</h1>
    </div>

    <b-container class="main">
      <div class="content">

        <!-- Kalender -->
        <div id="calendar">
          <heading title="Kalender" />
          <b-table 
            :items="calendar" 
            :fields="calendarHeaders"
            sort-by="date"
            head-variant="light"
          >
            <template v-slot:table-colgroup="scope">
              <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'date' ? '120px' : false }"
              >
            </template>
          </b-table>
        </div>

        <!-- På gång --> 
        <div id="happenings">
          <heading title="På gång" />
          <!-- Facebook plugin -->
          <div class="facebook-feed">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/linnekoren"
              data-tabs="timeline"
              data-width="500"
              data-height="700"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite="https://www.facebook.com/linnekoren"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/linnekoren">Linnékören</a>
              </blockquote>
            </div>
          </div>
        </div>
        
      </div>
    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import json from "../data/kalender.json";
  export default {
    components: {
      MainLayout
    },
    data: function () {
      return {
        calendar: [],
        calendarHeaders: [
          {
            key: 'date', 
            label: 'Datum'
          },
          {
            key: 'time', 
            label: 'Tid'
          },
          {
            key: 'description', 
            label: 'Aktivitet'
          }
        ]
      };
    },
    created: function() {
      this.calendar = []
      let allEntries = json.calendar;

      if (Array.isArray(allEntries)) {
        for (let i = 0; i < allEntries.length; i++) {
          let now = new Date()
          let entryDateTime = new Date(allEntries[i].date)
          entryDateTime.setHours(23)
          entryDateTime.setMinutes(59)

          if (entryDateTime >= now) {
            this.calendar.push(allEntries[i])
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";
#welcome-message {
  padding-bottom: 1em;

  // Logotype image
  img {
    width: 200px;
    display: block;
    margin: 0 auto;
  }

  // Brand name
  h1 {
    text-align: center;
  }
}

  // Main content
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include respond-to("medium") {
      flex-direction: row;

      #calendar {
        width: 49%;
        order: 1;
      }

      #happenings {
        width: 49%;
      }
    }

    // Happenings
    #happenings {
      .facebook-feed {
        width: 100%;
        text-align: center;
        .fb-page {
          margin: 0 auto;
        }
      }
    }
  }
</style>