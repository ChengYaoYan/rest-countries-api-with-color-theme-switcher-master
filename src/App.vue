<template>
  <div id="app">
    <CommonHeader />
    <router-view />
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
export default {
  components: {
    CommonHeader,
  },
};
</script>
