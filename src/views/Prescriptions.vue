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

      <SearchBar
        search-select="prescription"
        search-type="text"
        :default-card="true"
        @searchData="searchData"
      >
        <template slot="label">Search for prescription</template>

        <template slot="card">
          <card
            v-for="result in pres"
            :key="result.prescriptionID"
            class="card-item"
            data-type="prescription"
            :data="result"
            @click.native="show(result)"
          />
        </template>
      </SearchBar>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default {
  components: {
    Card,
    SearchBar
  },
  data() {
    return {
      propList: {
        "Check-up date": "ABC",
        Doctor: "XYZ",
        Diagnosis: "",
        Medicine: "",
        Dose: "",
        "Re-examination time": ""
      },
      pres: []
    };
  },
  methods: {
    searchData(data) {
      this.pres = data;
    },
    show(pres) {
      console.log("CLICKED");
      this.propList["Check-up date"] = new Date(
        pres.checkUpDate
      ).toDateString();
      this.propList["Doctor"] = pres.doctor;
      this.propList["Diagnosis"] = pres.diagnosis;
      this.propList["Medicine"] = pres.medicine;
      this.propList["Dose"] = pres.dose;
      this.propList["Re-examination time"] = new Date(
        pres.reExaminationTime
      ).toDateString();
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
