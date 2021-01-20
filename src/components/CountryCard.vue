<template>
  <div class="card">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img class="flag-image"
           :src="country.flag" alt="flag"/>
      <div class="card-information-container">
        <h2>{{ country.nativeName }}</h2>
        <div>
          <p><strong class="strong">Population:</strong> {{ formatPopulation(country.population) }}</p>
          <p><strong class="strong">Region:</strong> {{ country.region }}</p>
          <p><strong class="strong">Capital:</strong> {{ country.capital }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    country: Object
  },
  methods: {
    formatPopulation(population) {
      population = String(population);
      let formattedPopulation = "";
      let chunk = "";

      for (let i = population.length - 1; i >=0; i--) {
        if (chunk.length >= 3) {
          formattedPopulation = "," + chunk + formattedPopulation;
          chunk = "";
        }
        chunk = population[i] + chunk;
      }
      formattedPopulation = chunk + formattedPopulation;
      return formattedPopulation;
    }
  }
}
</script>

<style lang="scss" scoped>
.flag-image {
  width: 100%;
  height: 10rem;
}

.strong {
  font-weight: 600;
}
</style>
