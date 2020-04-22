import store from "../src/store/index";

export default {
  postPrescription(payload) {
    store.commit("TOGGLE_LOADING");
    return axios
      .post(`/api/prescription`, payload, {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenCredential}`
        }
      })
      .then(response => {
        if (response.code === 200) return response.prescription;
        else throw new Error(response);
      })
      .finally(() => {
        store.commit("TOGGLE_LOADING", { root: true });
      });
  },

  getPrescription() {
    store.commit("TOGGLE_LOADING");
    return axios
      .get(`/api/prescription`)
      .then(response => {
        if (response.code === 200) return response.prescriptions;
        else throw new Error(response);
      })
      .finally(() => {
        store.commit("TOGGLE_LOADING", { root: true });
      });
  }
};
