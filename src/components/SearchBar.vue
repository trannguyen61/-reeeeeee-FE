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
        @change="setDefault"
      />

      <input
        v-else
        id="formSearch"
        v-model="searchQuery"
        type="text"
        class="form__control"
        @change="setDefault"
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
        :key="
          result.prescriptionID ||
            result.clinicID ||
            result.formID ||
            result.userID
        "
        :data="result"
        :data-type="searchSelect"
      />
    </slot>

    <Paginate
      v-show="searchResult"
      :search-len="searchResult.length"
      :search-page="searchPage"
      :paginate-num="paginateNum"
      :max-len="maxLen"
      @paginate="paginate"
    />
  </div>
</template>

<script>
import Card from "./Card";
import userApi from "../../api/user";
import Paginate from "../components/Paginate";
// import presApi from "../../api/prescription";

export default {
  components: { Card, Paginate },
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
        this.setDefault();
      }
    }
  },
  created() {
    if (this.defaultCard) this.search();
  },
  methods: {
    setDefault() {
      this.searchResult = [];
      this.searchPage = 0;
      this.maxLen = 0;
    },
    search() {
      console.log(this.searchResult);
      this.$store.commit("TOGGLE_LOADING");
      userApi
        .searchData({
          search: this.searchSelect,
          data: this.searchQuery,
          page: this.searchPage,
          num: this.paginateNum
        })
        .then(response => {
          this.maxLen = response.dataLength;
          if (this.maxLen === 0)
            this.$store.commit("SET_SUCCESS", "No data :(");
          if (this.defaultCard) {
            this.searchResult = response.result;
            this.$emit("searchData", response.result);
          } else {
            this.searchResult = response.result;
          }
        })
        .catch(e => {
          this.$store.commit(
            "SET_ERROR",
            e.response.data.message || "Fetch data falied."
          );
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
