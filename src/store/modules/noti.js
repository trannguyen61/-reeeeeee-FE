export default {
  state: {
    isLoading: false,
    successNoti: "",
    errorNoti: ""
  },
  getters: {
    getLoading(state) {
      return state.isLoading;
    },
    isSuccess(state) {
      return state.successNoti ? true : false;
    },
    isError(state) {
      return state.errorNoti ? true : false;
    },
    getSuccess(state) {
      return state.successNoti;
    },
    getError(state) {
      return state.errorNoti;
    }
  },
  mutations: {
    TOGGLE_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
    SET_SUCCESS(state, noti) {
      state.successNoti = noti;
    },
    SET_ERROR(state, noti) {
      state.errorNoti = noti;
    }
  }
};
