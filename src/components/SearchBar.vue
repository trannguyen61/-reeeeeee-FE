<template>
  <div class="list-card md-mauto md-mt30">
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

    <slot name="card">
      <card
        v-for="result in searchResult"
        :key="result.clinicID || result.formID || result.userID"
        :data="result"
        :data-type="searchSelect"
      />
    </slot>

    <div v-show="searchResult.length !== 0" class="paginate">
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
import Card from "./Card";
import userApi from "../../api/user";

export default {
  components: { Card },
  props: {
    searchType: {
      type: String,
      default: "text"
    },
    searchSelect: {
      type: String,
      default: "patient"
    },
    paginateNum: {
      type: Number,
      default: 2
    },
    defaultCard: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchQuery: "",
      searchResult: [],
      searchPage: 0,
      maxLen: 0
    };
  },
  watch: {
    searchSelect() {
      if (this.searchResult !== []) {
        this.searchQuery = "";
        this.searchResult = [];
        this.searchPage = 0;
        this.maxLen = 0;
      }
    }
  },
  methods: {
    search() {
      this.$store.commit("TOGGLE_LOADING");
      userApi
        .searchData({
          search: this.searchSelect,
          data: this.searchQuery,
          page: this.searchPage,
          num: this.paginateNum
        })
        .then(response => {
          // console.log(response);
          this.maxLen = response.dataLength;

          if (this.defaultCard) this.$emit("searchData", response.result);
          if (this.maxLen === 0)
            this.$store.commit("SET_SUCCESS", "No data :(");
          else {
            this.searchResult = response.result;
          }
        })
        .catch(e => {
          this.$store.commit("SET_ERROR", e || "Fetch data falied.");
          console.log(e);
        })
        .finally(() => {
          this.$store.commit("TOGGLE_LOADING");
        });
    },

    paginate(value) {
      this.searchPage += value;
      this.search();
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
