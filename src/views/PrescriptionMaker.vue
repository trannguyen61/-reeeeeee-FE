<template>
  <div>
    <div class="body-container">
      <div class="form form--bar form--not-stretch">
        <header>
          <div class="form__title">
            <h4>PRESCRIPTION</h4>
          </div>

          <hr noshade />
        </header>

        <label for="patientInput">Patient</label>
        <input
          id="patientInput"
          v-model="patient"
          type="text"
          class="form__control"
        />

        <label for="doctorInput">Doctor</label>
        <input
          id="doctorInput"
          v-model="doctor"
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
          <button class="btn-group__link mt-30 mb-0" @click="submitForm">
            SUBMIT
          </button>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for patients</label>

        <div class="list-card__search-bar">
          <input
            id="patientSearch"
            v-model="patientSearch"
            type="email"
            class="form__control"
            placeholder="Patient's email"
          />

          <!-- Add @click here -->

          <button
            id="searchButton"
            class="btn-group__link btn-group__link--filled"
            type="button"
            @click="search"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>

        <card v-for="result in searchResult" :key="result.patient" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import presApi from "../../api/prescription";
import userApi from "../../api/user";

export default {
  components: {
    Card
  },
  data() {
    return {
      patient: "",
      doctor: "",
      diagnosis: "",
      medicine: "",
      time: "",
      patientSearch: "",
      searchResult: []
    };
  },
  methods: {
    submitForm() {
      presApi
        .postPrescription({
          patient: this.patient,
          doctor: this.doctor,
          diagnosis: this.diagnosis,
          medicine: this.medicine,
          time: this.time
        })
        .then(res => {
          Object.keys(this.$data).forEach(key => (this.$data[key] = ""));
          console.log(res);
        })
        .catch(e => console.log(e));
    },

    search() {
      userApi
        .searchData(this.patientSearch)
        .then(res => {
          this.searchResult = res;
          this.patientSearch = "";
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 0 auto 20px auto;
}
</style>
