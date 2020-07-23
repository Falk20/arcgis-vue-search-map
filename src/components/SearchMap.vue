<template>
  <div class="search-map"></div>
</template>

<script>
import { loadMap } from "../mapSetting";

export default {
  name: "search-map",
  mounted() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadMap(this);
  },
  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  },
};
</script>

<style lang="scss">
.search-map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
