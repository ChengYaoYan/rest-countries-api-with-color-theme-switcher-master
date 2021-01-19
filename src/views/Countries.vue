<template>
  <div class="content-center-container">
    <div class="search-container">
      <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search for a country..."
          prefix-icon="el-icon-search"
          @select="handleSelect"
          @change="fetchCountryInformation(state)"
          class="search-box"
      ></el-autocomplete>
      <el-select class="select-box" v-model="value" filterable placeholder="Filter by Region"
                 filter-method="filterByRegion(value)">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.region"
            :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="card-container">
        <template v-for="(country, id) in countryInformation">
          <CountryCard v-if="filter === false" :country="country" :key="id"/>
        </template>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import CountryCard from "@/components/CountryCard";

export default {
  components: {
    CountryCard
  },
  data() {
    return {
      countries: [],
      filterCountry: [],
      state: "",
      timeout: null,
      options: [
        {
          value: "item 1",
          region: "Africa"
        },
        {
          value: "item 2",
          region: "America"
        },
        {
          value: "item 3",
          region: "Asia"
        },
        {
          value: "item 4",
          region: "Europe"
        },
        {
          value: "item 5",
          region: "Oceania"
        }
      ],
      value: "",
      filter: false
    };
  },
  computed: {
    ...mapState(["countryInformation"]),
  },
  methods: {
    ...mapActions(["fetchCountryInformation"]),
    loadAll() {
      return [
        {"value": "Germany"},
        {"value": "United States of America"},
        {"value": "Brazil"},
        {"value": "Iceland"},
        {"value": "Afghanistan"},
        {"value": "Aland Islands"},
        {"value": "Albania"},
        {"value": "Algeria"}
      ]
    },
    querySearchAsync(queryString, cb) {
      var countries = this.countries;
      var results = queryString ? countries.filter(this.createStateFilter(queryString)) : countries;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      this.filter = true;
      this.fetchCountryInformation(item.value);
    },
    filterByRegion(region) {
      this.filter = true;
      this.filterCountry = this.$store.getters.filterCountryByRegion(region);
    }
  },
  mounted() {
    this.countries = this.loadAll();
  }
};
</script>

<style lang="scss">
</style>