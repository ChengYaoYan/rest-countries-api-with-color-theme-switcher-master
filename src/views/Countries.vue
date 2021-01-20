<template>
  <div class="content-center-container">
    <div class="search-container">
      <el-autocomplete
          v-model="country"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search for a country..."
          prefix-icon="el-icon-search"
          @select="handleSelect"
          @change="fetchCountryInformation(country)"
          class="search-box"
      ></el-autocomplete>
      <el-select class="select-box" v-model="region" clearable placeholder="Filter by Region"
                 @change="filter = true" @clear="filter = false">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.region"
            :value="item.region"
        >
        </el-option>
      </el-select>
    </div>
    <div class="card-container">
      <template v-for="(country, id) in (filter === false ? countryInformation : filterCountryByRegion(region))">
        <CountryCard :country="country" :key="id"/>
      </template>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
import CountryCard from "@/components/CountryCard";

export default {
  components: {
    CountryCard
  },
  data() {
    return {
      countriesOption: [],
      country: "",
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
      filter: false,
      region: ""
    };
  },
  computed: {
    ...mapState(["countryInformation"]),
    ...mapGetters(["filterCountryByRegion"])
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
      var countriesOption = this.countriesOption;
      var results = queryString ? countriesOption.filter(this.createStateFilter(queryString)) : countriesOption;

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
      this.filter = false;
      this.fetchCountryInformation(item.value);
    },
  },
  mounted() {
    this.countriesOption = this.loadAll();
  }
};
</script>
