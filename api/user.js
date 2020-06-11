export default {
  userLogin(payload) {
    return axios.post(`/api/login`, {
      email: payload.email,
      userPassword: payload.userPassword
    });
  },

  userSignup(payload) {
    return axios.post(`/api/signup`, payload);
  },

  searchData(payload) {
    return axios
      .post(`/api/search`, null, {
        params: {
          search: payload.search,
          data: payload.data,
          page: payload.page,
          num: payload.num
        }
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          return response.data;
        } else throw new Error(response.data.err || "No data of your search.");
      });
  },

  getClinics() {
    return axios.get("/api/search/clinics").then(response => {
      console.log(response);
      if (response.status === 200 && response.data.result.length !== 0)
        return response.data.result;
      else throw new Error(response.data.err || "No data of your search.");
    });
  }
};
