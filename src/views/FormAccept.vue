<template>
  <div>
    <div class="body-container">
      <card v-for="card in cards" :key="card.form" @reloadCards="reloadCards" />
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
      cards: []
    };
  },
  created() {
    //this.$store.dispatch('getForm')
    console.log("GET FORM");
    // this.$store.dispatch('searchForm', '2020-01-01')
    // .then(res => {
    //     console.log('GET FORM SUCCEEDED')
    //     this.cards = res})
    // .catch(e => console.log(e))

    this.$store
      .dispatch("getForm")
      .then(res => {
        console.log("GET FORM SUCCEEDED");
        this.cards = res;
      })
      .catch(e => console.log(e));
  },
  methods: {
    reloadCards() {

      // this.$store.dispatch('searchForm', '2020-01-01')
      // .then(res => this.cards = res)
      // .catch(e => console.log(e))

      this.$store
        .dispatch("getForm")
        .then(res => {
          console.log("GET FORM SUCCEEDED");
          this.cards = res;
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  flex-wrap: wrap;
}
</style>