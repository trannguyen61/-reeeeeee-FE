<template>
  <div>

    <div class="body-container">
      <div class="form form--bar">
        <header>
          <div class="form__title">
            <h4>PRESCRIPTION</h4>
          </div>

          <hr noshade />
        </header>

        <label for="patientInput">Patient</label>
        <input v-model="clinic" type="text" class="form__control" id="patientInput" />

        <label for="doctorInput">Doctor</label>
        <input v-model="doctor" type="text" class="form__control" id="doctorInput" />

        <label for="diagnosisInput">Diagnosis</label>
        <input v-model="diagnosis" type="text" class="form__control" id="diagnosisInput" />

        <label for="medicineInput">Medicine</label>
        <input v-model="medicine" type="text" class="form__control" id="medicineInput" />

        <label for="timeInput">Re-examination time</label>
        <input v-model="time" type="date" class="form__control" id="timeInput" />

<!-- Add @click here -->
        <div class="btn-group mb-0">
          <button
            class="btn-group__link mt-30 mb-0"
          >SUBMIT</button>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for patients</label>

        <div class="list-card__search-bar">
          <input
            v-model="patientSearch"
            type="date"
            class="form__control"
            id="patientSearch"
          />

          <!-- Add @click here -->

          <button class="btn-group__link btn-group__link--filled" type="button" id="searchButton">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>

</style>