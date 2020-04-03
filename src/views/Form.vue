<template>
  <div>
    <div class="body-container">
      <div class="form form--bar form--not-stretch mb-0">
        <div class="form__title">
          <h4>APPOINTMENT FORM</h4>
        </div>

        <label for="clinicInput">Clinic</label>
        <input v-model="clinic" type="text" class="form__control" id="clinicInput" />

        <label for="dateInput">Checkup date</label>
        <input v-model="date" type="date" class="form__control" id="dateInput" />

        <label for="descriptionInput">Description</label>
        <input v-model="description" type="text" class="form__control" id="descriptionInput" height="100"/>

        <div class="btn-group mb-0">
          <button
            class="btn-group__link mt-30 mb-0"
            @click.prevent="submitForm(clinic, date, description)"
          >SUBMIT</button>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for clinic/form</label>

        <div class="select-bar">
        <select v-model="searchSelect" name="searchSelect" id="searchSelect">
          <option value="clinic">Clinic</option>
          <option value="form">Form</option>
        </select>


        </div>

        <div class="list-card__search-bar">
          <input v-if="searchSelect === 'form'" v-model="formSearch" type="date" class="form__control" id="formSearch" />

          <input v-else v-model="clinicSearch" type="text" class="form__control" id="clinicSearch" />

          <button
            class="btn-group__link btn-group__link--filled"
            type="button"
            id="searchButton"
            @click.prevent="search()"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>

        <card v-for="result in searchResult" :key="result.clinic"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import { mapActions } from "vuex";

export default {
  components: {
    Card
  },
  data() {
    return {
      clinic: "",
      date: "",
      description: "",
      clinicSearch: "",
      formSearch: "",
      searchSelect: "",
      searchResult: []
    };
  },
  methods: {
    ...mapActions(["postForm", "searchClinic", "searchForm"]),
    submitForm(clinic, date, description) {
      Object.keys(this.$data).forEach(key => (this.$data[key] = ""));
      this.postForm({ clinic, date, description })
        .then(response => console.log(response))
        .catch(e => console.log(e));
    },
    search() {
      //placeholder
      //axios //an array of matched clinics
      //use v-for to render cards
      if (this.searchSelect === 'clinic') {
        this.searchClinic(this.clinicSearch)
          .then(response => {
            console.log(response)
            this.searchResult = response
          })
          .catch(e => console.log(e));
        this.searchSelect = ''
        this.clinicSearch = ''
      } else {
        this.searchForm(this.formSearch)
          .then(response => {
            console.log(response)
            this.searchResult = response
          })
          .catch(e => console.log(e));
        this.searchSelect = ''
        this.formSearch = ''
        console.log("RES " + this.searchResult)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>