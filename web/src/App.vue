<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  background: white;
}
</style>

<script>
export default {
  mounted() {
    this.$router.push("/index/object-manage");
  },
};
</script>
