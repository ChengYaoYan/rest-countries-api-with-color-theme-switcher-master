<template>
  <div id="app" :class="[ themeMode === 0 ? 'light' : 'dark' ]">
    <CommonHeader/>
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  components: {
    CommonHeader,
  },
  computed: {
    ...mapState(["themeMode"])
  },
  methods: {
    ...mapActions(["changeThemeMode"]),

    // ***** LOCAL STORAGE *****
    getLocalStorage() {
      return localStorage.getItem("themeModeCode")
          ? JSON.parse(localStorage.getItem("themeModeCode"))
          : 0;
    }
  },
  created() {
    this.changeThemeMode(this.getLocalStorage());
  }
};
</script>

<style lang="scss">
@import "./assets/sass/base/variables";
@import "./assets/sass/libraries/light-theme/index.css";

#app {
  min-height: 100vh;
}

.light {
  background-color: $very-light-gray;

  h1,
  h2,
  p,
  span,
  li {
    color: $very-dark-blue-light;
  }

  .element-background {
    background-color: $white;
  }
}

.dark {
  @import "./assets/sass/libraries/dark-theme/index.css";
  background-color: $very-dark-blue-dark;

  h1,
  h2,
  p,
  span,
  strong,
  li {
    color: $white;
  }

  .element-background {
    background-color: $dark-blue;
  }
}
</style>
