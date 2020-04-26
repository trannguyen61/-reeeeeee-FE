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

        <div
          v-for="(value, name) in propList"
          :key="name"
          class="card__section"
        >
          <div class="card__section__title">{{ name }}:</div>

          <div class="card__section__text">{{ value }}</div>
        </div>
      </div>

      <div class="list-card md-mauto">
        <label for="clinicSearch">Search for prescription</label>

        <div class="list-card__search-bar">
          <input
            id="prescriptionSearch"
            v-model="prescriptionSearch"
            type="date"
            class="form__control"
          />

          <button
            id="searchButton"
            data-testid="presSearchBtn"
            class="btn-group__link btn-group__link--filled"
            type="button"
            @click="search()"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>

        <card
          v-for="result in searchResult"
          :key="result.prescription"
          class="card-item"
          @click.native="show(result)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import presApi from "../../api/prescription";

export default {
  components: {
    Card
  },
  data() {
    return {
      propList: {
        Patient: "ABC",
        Doctor: "XYZ",
        Diagnosis: "",
        Medecine: "",
        "Re-examination time": ""
      },
      prescriptionSearch: "",
      searchResult: []
    };
  },
  methods: {
    search() {
      presApi
        .getPrescription(this.prescriptionSearch)
        .then(response => {
          console.log(this.prescriptionSearch);
          console.log(response);
          this.searchResult = response;
          if (response.length === 0)
            this.$store.commit("SET_SUCCESS", "No data :(");
        })
        .catch(e => this.$store.commit("SET_ERROR", e || "Something's wrong."));

      this.prescriptionSearch = "";
    },
    show(pres) {
      console.log("CLICKED");
      this.propList["Patient"] = pres.prescription;
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 0 auto 20px auto;
}

.card {
  &__section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;

    &__title {
      font-weight: bold;
    }
  }
}

.card-item:hover {
  cursor: pointer;
}
</style>
