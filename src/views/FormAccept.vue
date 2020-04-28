<template>
  <div>
    <div v-if="dataFetched" class="form">
      <h4 v-if="cards.length === 0" class="body-container--mt-80">
        No forms needed to be checked.
      </h4>

      <div class="body-container sm-mh20">
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
import formApi from "../../api/form";

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: null,
      dataFetched: false
    };
  },
  created() {
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
        .catch(e => this.$store.commit("SET_ERROR", e))
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
