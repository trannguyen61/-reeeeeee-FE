<template>
  <div>
    <navBar />

    <div class="body-container">
      <div class="form form-bar">
        <header>
          <div class="form__title">
            <h4>PRESCRIPTION</h4>
          </div>

          <hr noshade />
        </header>

        <div class="card__section">
          <div class="card__section__title">Patient's name:</div>

          <div class="card__section__text">this is a name</div>
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
import NavBar from "../components/NavBar";
import Card from "../components/Card";

export default {
  components: {
    NavBar,
    Card
  },
  data() {
      return {

      }
  }
};
</script>

<style lang="scss" scoped>
.form-bar {
  margin: 0;
}

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