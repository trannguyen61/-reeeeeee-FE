<template>
  <div>
    <div v-if="dataFetched" class="form">
      <h4 v-if="cards.length === 0" class="body-container--mt-80">
        No forms needed to be checked.
      </h4>
      <warning :error-message="errorMessage" />

      <div class="body-container">
        <card
          v-for="card in cards"
          :key="card.formID"
          :data="card"
          @reloadCards="reloadCards"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import Warning from "../components/Warning";
import formApi from "../../api/form";

export default {
  components: {
    Card,
    Warning
  },
  data() {
    return {
      cards: null,
      dataFetched: false,
      errorMessage: ""
    };
  },
  created() {
    this.$store.commit("TOGGLE_LOADING");
    this.reloadCards();
  },
  methods: {
    reloadCards() {
      this.$store.commit("TOGGLE_LOADING");
      formApi
        .getForm()
        .then(data => {
          this.cards = data;
          this.dataFetched = true;
          console.log(this.cards);
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.$store.commit("TOGGLE_LOADING");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  flex-wrap: wrap;
}
</style>
