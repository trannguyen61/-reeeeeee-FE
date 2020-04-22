import store from "../src/store/index";

export default {
  getForm() {
    store.commit("TOGGLE_LOADING");
    return axios
      .get(`/api/form`, {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenCredential}`
        }
      })
      .then(response => {
        if (response.data.code === 200) {
          return response.data.forms;
        } else throw new Error(response.data.err);
      })
      .finally(() => {
        store.commit("TOGGLE_LOADING");
      });
  },

  checkForm(payload) {
    store.commit("TOGGLE_LOADING");
    return axios
      .patch(
        `/api/form`,
        {
          formID: payload.formID,
          value: payload.value
        },
        {
          headers: {
            Authorization: `Bearer ${store.getters.getTokenCredential}`
          }
        }
      )
      .then(response => {
        if (response.data.code === 200) return "CHECK FORM SUCCEEDED";
        else throw new Error(response.data.err);
      })
      .finally(() => {
        store.commit("TOGGLE_LOADING");
      });
  },

  postForm(payload) {
    store.commit("TOGGLE_LOADING", { root: true });
    return axios
      .post(
        `/api/form`,
        {
          patient: payload.patient,
          clinic: payload.clinic,
          checkUpDate: payload.checkUpDate,
          description: payload.description
        },
        {
          headers: {
            Authorization: `Bearer ${store.getters.getTokenCredential}`
          }
        }
      )
      .then(response => {
        if (response.data.code === 200) return "SUCCESSFULLY POSTED";
        else throw new Error(response.data.err);
      })
      .finally(() => {
        store.commit("TOGGLE_LOADING", { root: true });
      });
  }
};
