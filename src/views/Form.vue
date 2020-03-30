<template>
  <div>
    <div class="body-container">
      <div class="form form-bar">
        <div class="form__title">
          <h4>APPOINTMENT FORM</h4>
        </div>

        <label for="clinicInput">Clinic</label>
        <input v-model="clinic" type="text" class="form__control" id="clinicInput" />

        <label for="dateInput">Checkup date</label>
        <input v-model="date" type="date" class="form__control" id="dateInput" />

        <label for="descriptionInput">Description</label>
        <input v-model="description" type="text" class="form__control" id="descriptionInput" />

        <div class="btn-group">
          <button
            class="btn-group__link"
            @click.prevent="submitForm(clinic, date, description)"
          >SUBMIT</button>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for clinic</label>

        <div class="list-card__search-bar">
          <input v-model="clinicSearch" type="text" class="form__control" id="clinicSearch" />

          <button class="btn-group__link btn-group__link--filled" type="button" id="searchButton"
            @click.prevent="search">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      clinic: "",
      date: "",
      description: "",
      clinicSearch: ""
    };
  },
  methods: {
    submitForm(clinic, date, description) {
      //placeholder
      clinic = "";
      date = "";
      this.description = description;
    },
    search() {
        //placeholder
        //axios //an array of matched clinics
        //use v-for to render cards
    }
  }
};
</script>

<style lang="scss" scoped>

</style>