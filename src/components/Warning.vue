<template>
  <div>
    <small class="form__text text-danger" v-show="errorMessage !== ''">{{errorMessage}}</small>
    <small class="form__text text-success" v-show="$store.getters.getLoading" id="loading">Loading</small>
  </div>
</template>

<script>
export default {
  props: ["errorMessage"],
  beforeUpdate() {
    if (this.$store.getters.getLoading) this.dotCount();
  },
  methods: {
    dotCount() {
      setInterval(function() {
        if (document.getElementById("loading").innerText === "Loading...")
          document.getElementById("loading").innerText = "Loading";
        else document.getElementById("loading").innerText += ".";
      }, 1000);
    }
  }
};
</script>

<style>
</style>