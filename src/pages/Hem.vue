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
          <table class="table table-striped table-responsive">
            <thead>
              <th>Datum</th>
              <th>Tid</th>
              <th>Aktivitet</th>
            </thead>
            <tbody>
              <tr class="passed-event">
                <td class="date">Tisdagar</td>
                <td class="time">19.00</td>
                <td class="event">Körövning</td>
              </tr>
            </tbody>
          </table>
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
  export default {
    components: {
      MainLayout
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

    // Calendar
    #calendar {
      table {
        tr {
          &.passed-event {
            background: map-get($color, grey);
          }

          .date {
            width: 50px;
          }

          .time {
            width: 50px;
          }
        }
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