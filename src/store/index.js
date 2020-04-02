import Vue from "vue";
import Vuex from "vuex";

//modules
import userModule from './modules/user'
import formModule from './modules/form'
import prescriptionModule from './modules/prescription'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  getters: {
    getLoading(state) {
      return state.isLoading
    },
  },
  mutations: {
    'TOGGLE_LOADING'(state) {
      state.isLoading = !state.isLoading
    },
  },
  actions: {

  },
  modules: {
    userModule, formModule, prescriptionModule
  }
});
