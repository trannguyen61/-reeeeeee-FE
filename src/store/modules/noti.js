export default {
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
  }
};
