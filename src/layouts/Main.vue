<template>
  <b-container fluid>
    <vue-headful 
      :title="pageTitle"
      :description="description"
      :keywords="'Linnékören, kör, Växjö, Linnéuniversitetet, ' + keywords"
      lang="sv"
    />
    <header>
      <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="/" class="brand">
          <img src="../assets/images/logo.png" class="brand-img" />
          <span class="brand-name">Linnékören</span>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Välkommen!</b-nav-item>
            <b-nav-item-dropdown text="Om kören">
              <b-dropdown-item href="/koren">Kören</b-dropdown-item>
              <b-dropdown-item href="/korledarna">Körledarna</b-dropdown-item>
              <b-dropdown-item href="/sponsorer">Sponsorer</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/se-och-lyssna">Se &amp; lyssna</b-nav-item>
            <b-nav-item href="/bli-medlem">Bli medlem</b-nav-item>
            <b-nav-item href="/kontakt">Kontakt</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <slot></slot>

    <footer>
      <p class="footer-text">Kika förbi oss på sociala medier!</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/linnekoren">
          <span class="fa fa-facebook-square"></span>
        </a>
        <a href="https://www.instagram.com/linnekoren/">
          <span class="fa fa-instagram"></span>
        </a>
      </div>
      <p class="credits">2020 &copy; Linnékören och Andreas Lymalm</p>
    </footer>
  </b-container>
</template>

<script>
import vueHeadful from 'vue-headful'

export default {
  components: {
    vueHeadful
  },
  props: {
    page: String,
    description: String,
    keywords: String
  },
  computed: {
    pageTitle: function() {
      if (this.page && this.page != '')
        return this.page + " | Linnékören"
      else 
        return "Linnékören"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../settings.scss";

header {
  margin-bottom: 1em;

  .brand {
    @include center-content;
  }

  .brand-img {
    height: 36px;
  }

  .brand-name {
    font-family: map-get($text, headline);
    font-weight: map-get($text, headline-weight);
    font-size: 1.2em;
    padding: 5px 10px 0px 5px;
  }
}

footer {
  @include center-content;
  flex-direction: column;
  background: map-get($color-defs, footer);
  color: map-get($color-defs, footer-text);

  padding-top: 1em;
  margin-top: 1em;

  /* Hack: footer takes rest of page */
  box-shadow: 0px 500px 0px 500px map-get($color-defs, footer);

  .footer-text {
    font-size: 2em;
  }

  .social-icons {
    a {
      padding: 0 1em;

      .fa {
        font-size: 3em;
        color: map-get($color-defs, footer-text);
      }

      &:hover {
        text-shadow: 1px 1px 10px map-get($color-defs, footer-text);
      }
    }
  }

  .credits {
    padding-top: 2em;
  }
}
</style>

<style lang="scss">
@import "../settings.scss";

/* Body styling */
body {
  background: map-get($color-defs, body);
  color: map-get($color-defs, body-text);
  font-family: map-get($text, body);
  font-weight: map-get($text, body-weight);
}

/* Color when user selects text */
::selection {
  background: map-get($color-defs, selection);
  color: map-get($color-defs, selection-text);
}

/* Remove underline on links */
a, a:hover {
  text-decoration: none;
  color: map-get($color-defs, body-text);
}

/* Remove list bullets */
ul {
  list-style-type: none;
}

/* Main styling */
.main {
  padding: 1em;
  margin-bottom: 1em;
  background: map-get($color-defs, main);
  border-radius: 5px;
}

/* E-mail formatting */
.e-mail {
  font-family: map-get($text, e-mail);
    display: inline-block;
    border-radius: 16px;
    background: map-get($color-defs, button-default);
    color: map-get($color-defs, button-default-text);
}

h1,
h2 {
  font-family: map-get($text, headline);
  font-weight: map-get($text, headline-weight);
  text-shadow: 1px 1px 10px map-get($color-defs, heading-background);
}

h3 {
  font-weight: 800;
}

p,
table {
  font-size: 1.1em;
}

small {
  display: block;
  font-size: 80%;
  line-height: 1.5;
  color: #999;
}
</style>