<template>
  <div>
    <small class="form__text text-danger" v-show="errorMessage !== ''">{{errorMessage}}</small>
    <small class="form__text text-success" v-show="$store.getters.getLoading" id="loading">Loading</small>
  </div>
</template>

<script>
export default {
  props: ["errorMessage"],
  data() {
    return {
      interval: null,
    }
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading
    }
  },
  watch: {
    loading() {
      if (!this.$store.getters.getLoading) {
        clearInterval(this.interval)
        return;
      }
      this.interval = setInterval(function() {
        if (document.getElementById("loading").innerText === "Loading...")
          document.getElementById("loading").innerText = "Loading";
        else document.getElementById("loading").innerText += ".";
      }, 1000);
    }
  },
};
</script>

<style>
</style>