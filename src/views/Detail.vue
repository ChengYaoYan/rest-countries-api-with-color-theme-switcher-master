<template>
  <div class="content-center-container">
    <el-button @click="$router.go(-1)">
      <span class="arrow">
        &#129040;
      </span>
      back
    </el-button>
    <div class="content-inner-container">
      <div>
        <img class="flag-image" :src="country.flag" alt="flag"/>
      </div>
      <div class="information-container">
        <div class="title">
          <h2>{{ country.nativeName }}</h2>
        </div>
        <div class="information-block-container">
          <p><strong class="strong">Native Name:</strong> {{ country.nativeName }}</p>
          <p><strong class="strong">Population:</strong> {{ formatPopulation(country.population) }}</p>
          <p><strong class="strong">Region:</strong> {{ country.region }}</p>
          <p><strong class="strong">Sub Region:</strong> {{ country.subRegion }}</p>
          <p><strong class="strong">Capital:</strong> {{ country.capital }}</p>
        </div>
        <div class="information-block-container">
          <p><strong class="strong">Top Level Domain:</strong> {{ country.topLevelDomain[0] }}</p>
          <p><strong class="strong">Currencies:</strong> {{ country.currencies[0].name }}</p>
          <p><strong class="strong">Languages:</strong> {{ getLanguagesString(country.languages) }}</p>
        </div>
        <div class="information-block-container">
          <p><strong class="strong-secondary">BorderCountries:</strong></p>
          <ul class="border-countries">
            <li class="item" v-for="(item, id) in country.borderCountries" :key="id">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      country: null
    }
  },
  methods: {
    formatPopulation(population) {
      population = String(population);
      let formattedPopulation = "";
      let chunk = "";

      for (let i = population.length - 1; i >= 0; i--) {
        if (chunk.length >= 3) {
          formattedPopulation = "," + chunk + formattedPopulation;
          chunk = "";
        }
        chunk = population[i] + chunk;
      }
      formattedPopulation = chunk + formattedPopulation;
      return formattedPopulation;
    },
    getLanguagesString(languages) {
      let array = [];

      for (let language of languages) {
        array.push(language.name);
      }
      return array.join(", ");
    }
  },
  computed: {
    ...mapGetters(["getCountryByName"]),
  },
  created() {
    this.country = this.getCountryByName(this.$route.params.name);
  }
}
</script>
<style lang="scss" scoped>
.arrow {
  font-weight: 600;
}

.title {
  font-size: 1.3rem;
}

.strong {
  font-weight: 600;
}

.strong-secondary {
  font-weight: 600;
  font-size: 1.05rem;
}

.border-countries {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;

  .item {
    font-size: 0.8rem;
    padding: 0.4rem 1.5rem;
    text-align: center;
    background-color: hsl(0, 0, 100%);
    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

@media screen and (min-width: 1000px) {
  .flag-image {
    height: 20rem;
  }
  .border-countries {
    margin-top: 0;

    .item {
      margin-left: 1rem;
      padding: 0.2rem 1rem;
    }
  }
}
</style>