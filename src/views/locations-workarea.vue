<template>
  <div class="map">
    <GmapMap
      map-type-id="roadmap"
      :center="selection.mapCenter"
      :zoom="selection.mapZoom"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        mapId: 'dd79fd2df77ae359',
        zoomControl: false,
      }"
    >
      <template v-for="(m, index) in locationsDB">
        <pin :key="`marker-${index}`" :position="m.position" :title="m.title" />
      </template>
      <GmapPolyline
        v-if="selection.viewPath"
        :path="mapPaths"
        :options="{ strokeColor: '#5c322c' }"
      />
    </GmapMap>
    <div class="clouds" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Pin from "../components/pin.vue";
import { type } from "../enums/types";

export default Vue.extend({
  components: { Pin },
  data: () => ({
    selection: {},
    markersSize: {
      size: { width: 200, height: 200, f: "px", b: "px" },
      scaledSize: { width: 70, height: 70, f: "px", b: "px" },
    },
  }),
  computed: {
    mapPaths() {
      const paths = [];
      this.locationsDB.forEach((item) => {
        paths.push(item.position);
      });
      return paths;
    },
    locationsDB() {
      return Object.values({
        ...this.$root.groups,
      }).filter((item) => item.types.includes(type.location));
    },
  },
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    this.$store.commit("setValue", {
      name: "panelSize",
      value: ["35%", "65%-50"],
    });
  },
  beforeDestroy() {
    this.$store.commit("setValue", {
      name: "panelSize",
      value: ["300", "100%-350"],
    });
  },
});
</script>