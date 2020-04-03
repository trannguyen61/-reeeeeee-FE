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
        <input v-model="patient" type="text" class="form__control" id="patientInput" />

        <label for="doctorInput">Doctor</label>
        <input v-model="doctor" type="text" class="form__control" id="doctorInput" />

        <label for="diagnosisInput">Diagnosis</label>
        <input v-model="diagnosis" type="text" class="form__control" id="diagnosisInput" />

        <label for="medicineInput">Medicine</label>
        <input v-model="medicine" type="text" class="form__control" id="medicineInput" />

        <label for="timeInput">Re-examination time</label>
        <input v-model="time" type="date" class="form__control" id="timeInput" />

        <div class="btn-group mb-0">
          <button
            class="btn-group__link mt-30 mb-0" @click="submitForm"
          >SUBMIT</button>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for patients</label>

        <div class="list-card__search-bar">
          <input
            v-model="patientSearch"
            type="email"
            class="form__control"
            id="patientSearch"
            placeholder="Patient's email"
          />

          <!-- Add @click here -->

          <button class="btn-group__link btn-group__link--filled" type="button" id="searchButton" 
            @click="search">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <card v-for="result in searchResult" :key="result.patient"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

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
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch('postPres', 
          { patient: this.patient, 
          doctor: this.doctor, 
          diagnosis: this.diagnosis, 
          medicine: this.medicine, 
          time: this.time })
        .then(res => {
          Object.keys(this.$data).forEach(key => (this.$data[key] = ""));
          console.log(res)
        })
        .catch(e => console.log(e))
      },

      search() {
        this.$store.dispatch('searchPatient', this.patientSearch) 
        .then(res => {
          this.searchResult = res
          this.patientSearch = ''
        })
        .catch(e => console.log(e))
      }
    }
}
</script>

<style lang="scss" scoped>
hr {
  margin: 0 auto 20px auto;
}
</style>