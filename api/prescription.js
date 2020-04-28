export default {
  postPrescription(payload) {
    return axios.post(`/api/prescription`, payload).then(response => {
      if (response.status === 200) return "SUBMIT SUCCESSFULLY";
      else throw new Error(response);
    });
  },

  getPrescription() {
    return axios.get(`/api/prescription`).then(response => {
      console.log(response);
      if (response.status === 200) return response.data.forms;
      else throw new Error(response);
    });
  }
};
