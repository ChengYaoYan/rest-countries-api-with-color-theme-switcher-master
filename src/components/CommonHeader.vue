<template>
  <div class="header-center element-background">
    <el-row type="flex" justify="space-between">
      <el-col :span="16">
        <div class="header-title">
          <h1>Where in the world?</h1>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <div @click="changeTheme(1)" class="toggle-theme-container" v-if="themeMode === 0">
            <span class="toggle-theme-icon">
              <img src="../assets/icons/moon-regular.svg" alt="logo"/>
            </span>
            <span>Dark Mode</span>
          </div>
          <div @click="changeTheme(0)" class="toggle-theme-container" v-else>
            <span class="toggle-theme-icon">
              <img src="../assets/icons/moon-outline.svg" alt="logo"/>
            </span>
            <span>Light Mode</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  computed: {
    ...mapState(["themeMode"])
  },
  methods: {
    ...mapActions(["changeThemeMode"]),
    changeTheme(modeCode) {
      this.changeThemeMode(modeCode);
      this.addToLocalStorage(modeCode);
    },
    // ***** LOCAL STORAGE *****
    addToLocalStorage(themeModeCode) {
      localStorage.setItem("themeModeCode", JSON.stringify(themeModeCode));
    }
  },
}
</script>

<style lang="scss" scoped>
.header-title {
  font-weight: 800;
}

.toggle-theme-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  .toggle-theme-icon {
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.3rem;
  }
}

@media screen and (min-width: 800px) {
  .toggle-theme-container {
    font-size: 1.2rem;

    .toggle-theme-icon {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
}
</style>