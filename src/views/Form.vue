<template>
  <div>
    <div class="body-container">
      <div class="form form--bar form--not-stretch mb-0">
        <div class="form__title">
          <h4>APPOINTMENT FORM</h4>
        </div>

        <label for="clinicInput">Clinic ID *</label>
        <input
          id="clinicInput"
          v-model="clinic"
          type="text"
          class="form__control"
        />

        <label for="dateInput">Checkup date *</label>
        <input
          id="dateInput"
          v-model="date"
          type="datetime-local"
          class="form__control"
        />

        <label for="descriptionInput">Description</label>
        <input
          id="descriptionInput"
          v-model="description"
          type="text"
          class="form__control"
          height="100"
        />

        <div class="btn-group mb-0">
          <button
            data-testid="submitBtn"
            class="btn-group__link mt-30 mb-0"
            :disabled="!clinic && !date"
            @click.prevent="submitForm(clinic, date, description)"
          >
            SUBMIT
          </button>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for clinic/form</label>

        <div class="select-bar">
          <select id="searchSelect" v-model="searchSelect" name="searchSelect">
            <option value="clinic">Clinic</option>
            <option value="form">Form</option>
          </select>
        </div>

        <div class="list-card__search-bar">
          <input
            v-if="searchSelect === 'form'"
            id="formSearch"
            v-model="formSearch"
            type="date"
            class="form__control"
          />

          <input
            v-else
            id="clinicSearch"
            v-model="clinicSearch"
            type="text"
            class="form__control"
          />

          <button
            id="searchButton"
            data-testid="searchBtn"
            class="btn-group__link btn-group__link--filled"
            type="button"
            @click.prevent="search()"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>

        <warning :error-message="errorMessage" />

        <card
          v-for="result in searchResult"
          :key="result.clinicID || result.formID"
          :data="result"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import Warning from "../components/Warning";
import formApi from "../../api/form";
import userApi from "../../api/user";

export default {
  components: {
    Card,
    Warning
  },
  data() {
    return {
      clinic: "",
      date: "",
      description: "",
      clinicSearch: "",
      formSearch: "",
      searchSelect: "",
      searchResult: [],
      errorMessage: ""
    };
  },
  methods: {
    submitForm(clinic, date, description) {
      Object.keys(this.$data).forEach(key => {
        if (key !== "searchResult") this.$data[key] = "";
      });
      this.$store.commit("TOGGLE_LOADING");
      formApi
        .postForm({ clinic, checkUpDate: date, description })
        .then(response => console.log(response))
        .catch(e => {
          this.errorMessage = e || "Submit form failed. Please try again.";
          console.log(e);
        })
        .finally(() => {
          this.$store.commit("TOGGLE_LOADING");
        });
    },
    search() {
      this.$store.commit("TOGGLE_LOADING");
      userApi
        .searchData({
          search: this.searchSelect,
          data: this.formSearch || this.clinicSearch
        })
        .then(response => {
          console.log(response);
          this.searchResult = response;
        })
        .catch(e => {
          this.errorMessage = e || "Fetch data failed. Please try again.";
          console.log(e);
        })
        .finally(() => {
          this.$store.commit("TOGGLE_LOADING");
        });
      this.searchSelect = "";
      this.formSearch = "";
      this.clinicSearch = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
