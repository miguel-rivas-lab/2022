<template>
  <div class="map">
    <v-stage :config="configKonva" @wheel="zoom" ref="stage">
      <v-layer>
        <v-image :config="{image: imgConfig}"/>
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
// import { type } from "../enums/types";

export default Vue.extend({
  components: {},
  data: () => ({
    selection: {},
    panelWidth: 0,
    imgConfig: null,
    configKonva: {
      width: 0,
      height: 0,
      draggable: true,
    },
  }),
  computed: {
    ...mapGetters({
        panel: "getPanelVisibility",
        panelSize: "getPanelVisibility"
      }),
    // locationsDB() {
    //   return Object.values({
    //     ...this.$root.groups,
    //   }).filter((item) => item.types.includes(type.location));
    // },
  },
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    window.addEventListener("resize", this.updateCanvas);
    window.addEventListener("load", this.updateCanvas);

    const image = new window.Image();
    image.src = require("@/img/map.jpg");
    image.onload = () => {
      this.imgConfig = image;
    };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
    window.removeEventListener("load", this.updateCanvas);
  },
   watch: {
    panel: function () {
      this.updateCanvas();
    },
  },
  methods: {
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.configKonva.width = window.innerWidth - (margin - 50) ;
      this.configKonva.height = window.innerHeight;
    },
    zoom(event){
      const stage = this.$refs.stage.getStage();
      const scale = stage.scaleX();
      const increase = Math.sign(event.evt.deltaY) * 0.05;
      let newScale = Math.min(Math.max(scale + increase, 0.75), 1);
      stage.scale({x: newScale, y: newScale});
    },
  },
});
</script>