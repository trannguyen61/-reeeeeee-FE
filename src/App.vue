<template>
  <div id="app">
    <navBar />
    <transition name="fadeUp" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar";
export default {
  components: { NavBar }
};
</script>

<style lang="scss"></style>
