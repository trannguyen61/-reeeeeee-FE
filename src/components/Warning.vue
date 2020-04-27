<template>
  <div class="notif" :class="[isSuccess ? 'notif--success' : 'notif--error']">
    <p>{{ isSuccess ? getSuccess : getError }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      timeout: null
    };
  },
  computed: {
    ...mapGetters(["getSuccess", "getError", "isSuccess", "isError"])
  },
  mounted() {
    this.timeout = setTimeout(() => {
      if (this.isSuccess) this.setSuccess("");
      else this.setError("");
    }, 3000);
  },
  methods: {
    ...mapMutations({ setSuccess: "SET_SUCCESS", setError: "SET_ERROR" })
  }
};
</script>

<style lang="scss" scoped>
.notif {
  position: fixed;
  left: auto;
  right: 10px;
  top: 90px;
  padding: 30px;
  width: 15vw;
  z-index: 3;
  border-radius: 10px;

  p {
    color: white;
  }

  &--success {
    background: #42b983;
  }

  &--error {
    background: darkred;
  }
}

@media only screen and (max-width: 600px) {
  /* For smol mobile phones: */
  .notif {
    width: 100vw;
    right: -15px;
  }
}
</style>
