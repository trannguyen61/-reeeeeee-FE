export default {
  postPrescription(payload) {
    return axios.post(`/api/prescription`, payload).then(response => {
      if (response.code === 200) return response.prescription;
      else throw new Error(response);
    });
  },

  getPrescription() {
    return axios.get(`/api/prescription`).then(response => {
      if (response.code === 200) return response.prescriptions;
      else throw new Error(response);
    });
  }
};
