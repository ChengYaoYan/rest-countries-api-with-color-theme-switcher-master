<template>
  <div class="header-center">
    <el-row type="flex" justify="space-between">
      <el-col :span="16">
        <div class="header-title">
          <h1>Where in the world?</h1>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="toggle-theme-container">
          <span class="toggle-theme-icon" v-if="true"><img src="../assets/icons/moon-regular.svg" alt="logo"/></span>
          <span v-else><img src="../assets/icons/moon-solid.svg" alt="logo"/></span>
          Dark Mode
        </div>
      </el-col>
    </el-row>
  </div>
</template>

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