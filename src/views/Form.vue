<template>
  <div>
    <div class="body-container body-container--md">
      <div class="form form--bar form--not-stretch mb-0 md-mauto">
        <div class="form__title">
          <h4>APPOINTMENT FORM</h4>
        </div>

        <label for="clinicInput">Clinic *</label>
        <!-- <input
          id="clinicInput"
          v-model="clinic"
          type="text"
          class="form__control"
        /> -->
        <div class="select-bar">
          <select v-model="clinic" name="clinicSelect">
            <option
              v-for="data in clinicData"
              :key="data.clinicID"
              :value="data.clinicID"
              >{{ data.clinicID + " - " + data.clinicName }}</option
            >
          </select>
        </div>

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

      <div class="list-card md-mauto md-mt30">
        <SearchBar
          :search-select="searchSelect"
          :search-type="searchSelect === 'clinic' ? 'text' : 'date'"
          @searchData="searchData"
        >
          <template slot="label">Search for clinic/form</template>

          <template slot="option">
            <div class="select-bar md-ml10">
              <select
                id="searchSelect"
                v-model="searchSelect"
                name="searchSelect"
                @change="changeSelect"
              >
                <option value="clinic">Clinic</option>
                <option value="form">Form</option>
              </select>
            </div>
          </template>
        </SearchBar>

        <card
          v-for="result in searchResult"
          :key="result.clinicID || result.formID"
          :data="result"
          :data-type="searchSelect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import formApi from "../../api/form";
import userApi from "../../api/user";

export default {
  components: {
    Card,
    SearchBar
  },
  data() {
    return {
      clinic: "",
      date: "",
      description: "",
      searchResult: [],
      clinicData: [],
      searchSelect: ""
    };
  },
  created() {
    this.getClinics();
  },
  methods: {
    submitForm(clinic, date, description) {
      Object.keys(this.$data).forEach(key => {
        if (key !== "searchResult") this.$data[key] = "";
      });
      this.$store.commit("TOGGLE_LOADING");
      formApi
        .postForm({ clinic, checkUpDate: date, description })
        .then(response => {
          console.log(response);
          this.$store.commit("SET_SUCCESS", "Successfully submited!");
        })
        .catch(e => {
          this.$store.commit("SET_ERROR", e || "Submit falied.");
          console.log(e);
        })
        .finally(() => {
          this.$store.commit("TOGGLE_LOADING");
        });
    },
    getClinics() {
      userApi
        .getClinics()
        .then(data => {
          this.clinicData = data;
          console.log(data);
        })
        .catch(e => {
          this.$store.commit("SET_ERROR", e || "Fetch data falied.");
        });
    },
    searchData(data) {
      this.searchResult = data;
      console.log(this.searchResult);
    },
    changeSelect() {
      if (this.searchResult !== []) {
        console.log(this.searchSelect);

        this.searchResult = "";
        // this.searchSelect = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
