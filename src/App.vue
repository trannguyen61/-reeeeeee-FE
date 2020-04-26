<template>
  <div id="app">
    <navBar />
    <transition name="slideDown" mode="out-in">
      <Warning v-if="isSuccess || isError" />
    </transition>
    <transition name="fadeUp" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar";
import Warning from "../src/components/Warning";
import { mapGetters } from "vuex";
export default {
  components: { NavBar, Warning },
  computed: {
    ...mapGetters(["isSuccess", "isError"])
  }
};
</script>

<style lang="scss">
.slideDown-enter,
.slideDown-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slideDown-enter-active,
.slideDown-leave-active {
  transition: all 1s;
}
</style>
