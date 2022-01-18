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
      <!-- <template v-for="(m, index) in markers">
        <GmapMarker
          :key="`pin-${index}`"
          :icon="{
            url: m.image.url,
            title: m.image.title,
            size: markersSize.size,
            scaledSize: markersSize.scaledSize,
          }"
          :position="m.position"
        />
      </template> -->
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
import { type } from "mr-kernel/enums/types";
// import {google} from "vue2-google-maps";

export default Vue.extend({
  components: { Pin },
  data: () => ({
    selection: {},
    markersSize: {
      size: { width: 200, height: 200, f: "px", b: "px" },
      scaledSize: { width: 70, height: 70, f: "px", b: "px" },
    },
    // markers: [
    //   {
    //     image: {
    //       url: require("@/img/montesino.svg"),
    //       title: "Montesino",
    //     },
    //     position: {
    //       lat: 18.468693394566287,
    //       lng: -69.88479641117011,
    //     },
    //   },
    //   {
    //     image: {
    //       url: require("@/img/monument.svg"),
    //       title: "Washington Monument",
    //     },
    //     position: {
    //       lat: 38.889509938828944,
    //       lng: -77.03527458895584,
    //     },
    //   },
    // ],
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