<template>
  <div>
    <small v-show="errorMessage !== ''" class="form__text text-danger">{{
      errorMessage
    }}</small>
    <small
      v-show="$store.getters.getLoading"
      id="loading"
      class="form__text text-success"
      >Loading</small
    >
  </div>
</template>

<script>
export default {
  props: ["errorMessage"],
  data() {
    return {
      interval: null
    };
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  watch: {
    loading() {
      console.log("LOADING ", this.$store.getters.getLoading);
      if (!this.$store.getters.getLoading) {
        clearInterval(this.interval);
        return;
      }
      this.interval = setInterval(function() {
        if (document.getElementById("loading").innerText === "Loading...")
          document.getElementById("loading").innerText = "Loading";
        else document.getElementById("loading").innerText += ".";
      }, 1000);
    }
  }
};
</script>

<style></style>
