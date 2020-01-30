import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from 'axios';
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import StarRating from 'vue-star-rating'

Vue.use(VueSweetalert2);
Vue.use(StarRating)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorizaton'] = token
}

// Require the main Sass manifest file
require('./assets/sass/main.scss');

require("dotenv").config();

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY}
});



Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");