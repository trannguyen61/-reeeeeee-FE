<template>
  <div>
    <div v-show="searchLen !== 0" class="paginate">
      <button
        v-show="searchPage !== 0"
        class="btn-group__link btn-group__link--filled"
        @click="paginate(-1)"
      >
        Prev
      </button>
      <button
        v-show="(searchPage + 1) * paginateNum < maxLen"
        class="btn-group__link btn-group__link--filled"
        @click="paginate(1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchLen: {
      type: Number,
      default: 0
    },
    searchPage: {
      type: Number,
      default: 0
    },
    paginateNum: {
      type: Number,
      default: 2
    },
    maxLen: {
      type: Number,
      default: 0
    }
  },
  methods: {
    paginate(value) {
      this.$emit("paginate", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.paginate {
  display: flex;
  justify-content: space-evenly;
  button {
    width: 30%;
  }
}
</style>
