// import userAxios from '../../../test/user'
import userApi from "../../../api/user";

export default {
  state: {
    token: "",
    role: ""
  },
  getters: {
    getRole(state) {
      return state.role;
    },
    getToken(state) {
      return state.token !== "" ? true : false;
    },
    getTokenCredential(state) {
      return state.token;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLE(state, role) {
      state.role = role;
    }
  },
  actions: {
    userLogin({ commit, getters }, payload) {
      commit("TOGGLE_LOADING", { root: true });
      return userApi
        .userLogin({ email: payload.email, userPassword: payload.password })
        .then(response => {
          if (response.status === 200) {
            const token = response.data.token;
            commit("SET_TOKEN", token);
            commit("SET_ROLE", response.data.role);
            localStorage.setItem("access_token", token);
            axios.defaults.headers.common = {
              Authorization: `Bearer ${getters.getTokenCredential}`
            };
          } else throw new Error(response.data.err);
        })
        .catch(e => {
          localStorage.removeItem("access_token");
          throw new Error(e);
        })
        .finally(() => {
          commit("TOGGLE_LOADING", { root: true });
        });
    },

    userSignup({ commit, getters }, payload) {
      commit("TOGGLE_LOADING", { root: true });
      // userAxios.signup({ email, password })
      userApi
        .userSignup(payload)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            const token = response.data.token;
            commit("SET_TOKEN", token);
            commit("SET_ROLE", response.data.role);
            localStorage.setItem("access_token", token);
            axios.defaults.headers.common = {
              Authorization: `Bearer ${getters.getTokenCredential}`
            };
          } else throw new Error(response.data.err);
        })
        .catch(e => {
          localStorage.removeItem("access_token");
          throw new Error(e);
        })
        .finally(() => {
          commit("TOGGLE_LOADING", { root: true });
        });
    },

    userSignout({ commit }) {
      console.log("SIGN OUT");
      commit("SET_TOKEN", "");
      commit("SET_ROLE", "");
      localStorage.removeItem("access_token");
    }
  }
};
