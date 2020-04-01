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

        <div class="card__section" v-for="(value, name) in propList" :key="name">
          <div class="card__section__title">{{name}}:</div>

          <div class="card__section__text">{{value}}</div>
        </div>
      </div>

      <div class="list-card">
        <label for="clinicSearch">Search for prescription</label>

        <div class="list-card__search-bar">
          <input
            v-model="prescriptionSearch"
            type="date"
            class="form__control"
            id="prescriptionSearch"
          />

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
import Card from "../components/Card";

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
      }
    };
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
</style>