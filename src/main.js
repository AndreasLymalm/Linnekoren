import Vue from 'vue'
import routes from './routes'

// Components
import vueHeadful from 'vue-headful'
import Heading from './components/Heading.vue'
Vue.component('vue-headful', vueHeadful)
Vue.component('heading', Heading)

// Bootstrap
import { 
  BootstrapVue, 
  IconsPlugin, 
  LayoutPlugin 
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute] || "404"
      return require('./pages/' + matchingView + '.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})