import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "nprogress/nprogress.css";

import AOS from "aos";
import "aos/dist/aos.css";
import nProgress from "nprogress";

global.axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

global.axios.interceptors.request.use(
  config => {
    nProgress.start();
    return config;
  },
  error => {
    nProgress.done();
    return Promise.reject(error);
  }
);

global.axios.interceptors.response.use(
  response => {
    nProgress.done();
    return response;
  },
  error => {
    nProgress.done();
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
