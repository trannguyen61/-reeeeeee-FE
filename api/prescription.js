export default {
  postPrescription(payload) {
    return axios.post(`/api/prescription`, payload).then(response => {
      if (response.status === 200) return "SUBMIT SUCCESSFULLY";
      else throw new Error(response);
    });
  },

  getPrescription(payload) {
    return axios
      .get(`/api/prescription`, {
        params: {
          page: payload.page,
          num: payload.num
        }
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) return response.data;
        else throw new Error(response);
      });
  }
};
