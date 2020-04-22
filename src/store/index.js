import Vue from "vue";
import Vuex from "vuex";

//modules
import userModule from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  getters: {
    getLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    TOGGLE_LOADING(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {},
  modules: {
    userModule
  }
});
