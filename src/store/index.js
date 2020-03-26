import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    userLogin({commit}, {email, password}) {
      //placeholder
      //axios
      // send {email, password}
      // receive {token} || {error}

      return new Promise((resolve, reject) => {
        if (email && password) resolve()
        else commit(reject())
      })

    },

    userSignup({commit}, {email, password}) {
      //placeholder
      return new Promise((resolve, reject) => {
        if (email && password) resolve()
        else commit(reject())
      })
    }
  },
  modules: {}
});
