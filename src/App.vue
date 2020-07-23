<template>
  <div id="app">
    <SearchMap />
  </div>
</template>

<script>
import SearchMap from "./components/SearchMap";
export default {
  name: "App",
  components: {
    SearchMap,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
