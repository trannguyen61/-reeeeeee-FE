<template>
  <div>
    <div v-if="dataFetched" class="body-container">
      <h4 v-if="cards.length === 0">No forms needed to be checked.</h4>
      <card v-for="card in cards" :key="card.formID" :data="card" @reloadCards="reloadCards" />
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
      cards: null,
      dataFetched: false
    };
  },
  created() {
    this.$store.dispatch('getForm').then(() => {
      this.cards = this.$store.getters.getForm
      this.dataFetched = true
      console.log('cards', this.cards)
    }).catch(e => console.log(e))
  },
  methods: {
    ...mapActions(["getForm"]),
    reloadCards() {
      this.$store.dispatch('getForm').then(() => {
      this.cards = this.$store.getters.getForm
      console.log('cards', this.cards)
    }).catch(e => console.log(e))
    }
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  flex-wrap: wrap;
}
</style>