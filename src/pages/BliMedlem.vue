<template>
  <main-layout
    page="Bli medlem"
    description="Hur man blir medlem."
    keywords="medlem"
  >
    <b-container class="main">
      <!-- Why become member? -->
      <div id="why">
        <heading title="Vill du bli medlem?" />
        <p>
          Har du sjungit i kör innan, eller tycker du kanske helt enkelt bara om att sjunga i duschen? Då är du hjärtligt välkommen
          att komma och prova att sjunga med oss när som helst! Vill du vara med och sjunga på våra konserter så
          rekommenderar vi att du är med på våra auditions i början av terminsstart.
        </p>
      </div>

      <!-- How become member? -->
      <div id="how">
        <heading title="Hur blir du medlem?" />
        <p>
          Vi riktar oss främst till studenter vid Linnéuniversitetet men alla med körintresse är välkomna att vara med. Vi tillämpar
          inträdesprov till kören då du tillsammans med körledaren bokar en tid i samband med körrepetitionen för
          att lyssna på din röst. Vid provtillfället kollas röstkvalitéer, omfång och gehör. För att vara med i
          kören måste du inte kunna läsa noter eller ha tidigare körvana, även om detta förstås alltid är bra!
          Vid godkänt inträdesprov blir du registrerad som medlem. Medlemsavgiften är 200 kronor per termin.
        </p>
        <p>
          Har du frågor? Kontakta styrelsen på
          <span class="e-mail">styrelse@linnekoren.se</span>.
        </p>
      </div>

      <!-- Where are we? -->
      <div id="where">
        <heading title="Var finns vi?" />
        <p>
          Vi håller till i F-huset på Linnéuniversitetet (<a class="external-link" href="https://lnu.se/mot-linneuniversitetet/karta/vaxjo/hus-f/">Karta här</a>), i salen Hjertén. Den ligger till vänster förbi huvudingången, i korridoren
          förbi första dörren. Där övar vi varje tisdag under terminens gång, från klockan 19 till 21. 
        </p>
        <b-img 
          v-if="showImage"
          src="https://linnekoren.se/images/kören/F-huset.jpg" 
          alt="F-huset"
          @error="showImage = false"
          fluid />
      </div>
    </b-container>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    data: function() {
      return {
        showImage: true
      }
    },
    components: {
      MainLayout
    }
  }
</script>

<style lang="scss" scoped>
@import "../settings.scss";
.e-mail {
  padding: 0.5em;
}
</style>