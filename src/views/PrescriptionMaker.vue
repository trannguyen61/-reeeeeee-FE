<template>
  <div>
    <div class="body-container body-container--md">
      <div class="form form--bar form--not-stretch md-mauto">
        <header>
          <div class="form__title">
            <h4>PRESCRIPTION</h4>
          </div>

          <hr noshade />
        </header>

        <label for="formInput">Check-up form ID</label>
        <input
          id="formInput"
          v-model="form"
          type="text"
          class="form__control"
        />

        <label for="diagnosisInput">Diagnosis</label>
        <input
          id="diagnosisInput"
          v-model="diagnosis"
          type="text"
          class="form__control"
        />

        <label for="medicineInput">Medicine</label>
        <input
          id="medicineInput"
          v-model="medicine"
          type="text"
          class="form__control"
        />

        <label for="timeInput">Re-examination time</label>
        <input
          id="timeInput"
          v-model="time"
          type="date"
          class="form__control"
        />

        <div class="btn-group mb-0">
          <button
            data-testid="presSubmitBtn"
            class="btn-group__link mt-30 mb-0"
            @click="submitForm"
          >
            SUBMIT
          </button>
        </div>
      </div>

      <SearchBar>
        <template slot="label">Search for patients</template>
      </SearchBar>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import presApi from "../../api/prescription";

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      form: "",
      diagnosis: "",
      medicine: "",
      time: ""
    };
  },
  methods: {
    submitForm() {
      presApi
        .postPrescription({
          form: this.form,
          diagnosis: this.diagnosis,
          medicine: this.medicine,
          time: this.time
        })
        .then(res => {
          Object.keys(this.$data).forEach(key => (this.$data[key] = ""));
          console.log(res);
          this.$store.commit("SET_SUCCESS", "Successfully submited!");
        })
        .catch(e =>
          this.$store.commit(
            "SET_ERROR",
            e.response.data.message || "Something's wrong."
          )
        );
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 0 auto 20px auto;
}
</style>
