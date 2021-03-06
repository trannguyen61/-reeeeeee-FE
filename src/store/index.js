import Vue from "vue";
import Vuex from "vuex";

//modules
import userModule from "./modules/user";
import notiModule from "./modules/noti";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    notiModule
  }
});
