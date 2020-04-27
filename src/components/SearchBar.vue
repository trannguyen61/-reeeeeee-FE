<template>
  <div>
    <label><slot name="label"></slot></label>

    <slot name="option"></slot>

    <div class="list-card__search-bar">
      <input
        v-if="searchType === 'date'"
        id="formSearch"
        v-model="searchQuery"
        type="date"
        class="form__control"
      />

      <input
        v-else
        id="formSearch"
        v-model="searchQuery"
        type="text"
        class="form__control"
      />

      <button
        id="searchButton"
        data-testid="searchBtn"
        class="btn-group__link btn-group__link--filled"
        type="button"
        @click.prevent="search()"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import userApi from "../../api/user";
export default {
  props: {
    searchType: {
      type: String,
      default: "text"
    },
    searchSelect: {
      type: String,
      default: "patient"
    }
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.$store.commit("TOGGLE_LOADING");
      userApi
        .searchData({
          search: this.searchSelect,
          data: this.searchQuery
        })
        .then(response => {
          // console.log(response);
          this.$emit("searchData", response);
          if (response.length === 0)
            this.$store.commit("SET_SUCCESS", "No data :(");
        })
        .catch(e => {
          this.$store.commit("SET_ERROR", e || "Fetch data falied.");
          console.log(e);
        })
        .finally(() => {
          this.$store.commit("TOGGLE_LOADING");
        });
      this.searchQuery = "";
    }
  }
};
</script>

<style></style>
