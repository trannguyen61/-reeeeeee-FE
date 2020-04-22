import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

global.axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
