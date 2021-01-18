<template>
  <div class="content-center-container">
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Search for a country..."
        prefix-icon="el-icon-search"
        @select="handleSelect"
    ></el-autocomplete>

    <el-select v-model="value" filterable placeholder="Filter by Region" filter-method="">
      <el-option
          v-for="item in region"
          :key="item.value"
          :label="item.region"
          :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      countries: [],
      state: "",
      timeout: null,
      value: "",
    };
  },
  computed: {
    ...mapState(["region"]),
  },
  methods: {
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
      console.log(item);
    }
  },
  mounted() {
    this.countries = this.$store.state.countries;
  }
};
</script>
