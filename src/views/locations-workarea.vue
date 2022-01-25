<template>
  <div class="map" ref="mapContainer">
    <v-stage
      :config="{
        x: mapPos.x,
        y: mapPos.y,
        draggable: true,
        width: configKonva.width,
        height: configKonva.height,
      }"
      @dragmove="dragging"
      ref="stage"
    >
      <v-layer>
        <v-image
          :config="{
            image: map.config,
          }"
        />
        <template v-for="(image, index) in img">
          <v-image
            v-bind:key="`mapImg${index}`"
            @mouseover="hoverImg"
            @mouseout="mouseOutImg"
            :config="{
              image: image.config,
              x: image.position.x,
              y: image.position.y,
              opacity: image.opacity,
            }"
          />
        </template>
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    panelWidth: 0,
    map: {
      config: null,
    },
    averageBuildingImageWidth: 150,
    img: [
      {
        name: "itesa",
        config: null,
        position: { x: 2256, y: 665 },
        opacity: 0,
      },
      {
        name: "itla",
        config: null,
        position: { x: 2483, y: 799 },
        opacity: 0,
      },
      {
        name: "several",
        config: null,
        position: { x: 1905, y: 997 },
        opacity: 0,
      },
      {
        name: "avante",
        config: null,
        position: { x: 1461, y: 1168 },
        opacity: 0,
      },
      {
        name: "capital",
        config: null,
        position: { x: 1343, y: 856 },
        opacity: 0,
      },
      {
        name: "pixel",
        config: null,
        position: { x: 694, y: 1060 },
        opacity: 0,
      },
      {
        name: "planttherapy",
        config: null,
        position: { x: 1188, y: 501 },
        opacity: 0,
      },
      {
        name: "enovational",
        config: null,
        position: { x: 2323, y: 294 },
        opacity: 0,
      },
    ],
    selection: {},
    stage: undefined,
    configKonva: {
      width: 0,
      height: 0,
    },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
    }),
    mapPos() {
      if (this.map.config) {
        return {
          x: Math.max(
            Math.min(
              this.selection.mapCenter.x - this.averageBuildingImageWidth + this.configKonva.width / 2,
              0
            ),
            -this.map.config.width
          ),
          y: Math.max(
            Math.min(
              this.selection.mapCenter.y - this.averageBuildingImageWidth + this.configKonva.height / 2,
              0
            ),
            -this.map.config.height
          ),
        };
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    window.addEventListener("resize", this.updateCanvas);

    this.map.temp = new window.Image();
    this.map.temp.src = require(`@/img/map.jpg`);
    this.map.temp.onload = () => {
      this.map.config = this.map.temp;
    };

    this.img.forEach((item) => {
      item.temp = new window.Image();
      item.temp.src = require(`@/img/${item.name}.jpg`);
      item.temp.onload = () => {
        item.config = item.temp;
      };
    });
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.$refs.mapContainer.style.cursor = "grab";
    this.updateCanvas();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
  },
  methods: {
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.configKonva.width = window.innerWidth - (margin - 50);
      this.configKonva.height = window.innerHeight;
      this.dragging();
    },
    hoverImg(event) {
      event.target.opacity(1);
      this.$refs.mapContainer.style.cursor = "pointer";
    },
    mouseOutImg(event) {
      event.target.opacity(0);
      this.$refs.mapContainer.style.cursor = "grab";
    },
    dragging() {
      let nx = Math.max(
        Math.min(this.stage.position().x, 0),
        -(this.map.config.width - this.configKonva.width)
      );
      let ny = Math.max(
        Math.min(this.stage.position().y, 0),
        -(this.map.config.height - this.configKonva.height)
      );

      this.stage.position({ x: nx, y: ny });
    },
  },
});
</script>