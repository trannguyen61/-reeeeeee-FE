export default {
  getForm() {
    return axios.get(`/api/form`).then(response => {
      if (response.status === 200) {
        return response.data.forms;
      } else throw new Error(response.data.err);
    });
  },

  checkForm(payload) {
    return axios
      .patch(`/api/form`, {
        formID: payload.formID,
        value: payload.value
      })
      .then(response => {
        if (response.status === 200) return "CHECK FORM SUCCEEDED";
        else throw new Error(response.data.err);
      });
  },

  postForm(payload) {
    return axios
      .post(`/api/form`, {
        patient: payload.patient,
        clinic: payload.clinic,
        checkUpDate: payload.checkUpDate,
        description: payload.description
      })
      .then(response => {
        if (response.status === 200) return "SUCCESSFULLY POSTED";
        else throw new Error(response.data.err);
      });
  }
};
