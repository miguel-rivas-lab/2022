<template>
  <div class="map">
    <v-stage :config="configKonva" @dragmove="dragging" ref="stage">
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
// import { type } from "../enums/types";

export default Vue.extend({
  components: {},
  data: () => ({
    selection: {},
    panelWidth: 0,
    map: {
      config: null,
    },
    img: [
      {
        name: "itesa",
        ext: "png",
        config: null,
        position: { x: 2256, y: 665 },
        opacity: 0,
      },
      {
        name: "itla",
        ext: "png",
        config: null,
        position: { x: 2483, y: 799 },
        opacity: 0,
      },
      {
        name: "several",
        ext: "png",
        config: null,
        position: { x: 1905, y: 997 },
        opacity: 0,
      },
      {
        name: "avante",
        ext: "png",
        config: null,
        position: { x: 1461, y: 1168 },
        opacity: 0,
      },
      {
        name: "capital",
        ext: "png",
        config: null,
        position: { x: 1343, y: 856 },
        opacity: 0,
      },
      {
        name: "pixel",
        ext: "png",
        config: null,
        position: { x: 694, y: 1060 },
        opacity: 0,
      },
      {
        name: "planttherapy",
        ext: "png",
        config: null,
        position: { x: 1188, y: 501 },
        opacity: 0,
      },
      {
        name: "enovational",
        ext: "png",
        config: null,
        position: { x: 2323, y: 294 },
        opacity: 0,
      },
    ],
    stage: undefined,
    configKonva: {
      width: 0,
      height: 0,
      draggable: true,
    },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
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

    this.map.temp = new window.Image();
    this.map.temp.src = require(`@/img/map.jpg`);
    this.map.temp.onload = () => {
      this.map.config = this.map.temp;
    };

    this.img.forEach((item) => {
      item.temp = new window.Image();
      item.temp.src = require(`@/img/${item.name}.${item.ext}`);
      item.temp.onload = () => {
        item.config = item.temp;
      };
    });
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
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
      this.configKonva.width = window.innerWidth - (margin - 50);
      this.configKonva.height = window.innerHeight;
      this.dragging();
    },
    // zoom(event) {
    //   const scale = this.stage.scaleX();
    //   const increase = Math.sign(event.evt.deltaY) * -0.05;
    //   let newScale = Math.min(Math.max(scale + increase, 0.75), 1);
    //   this.stage.scale({ x: newScale, y: newScale });

    //   const mousePointTo = {
    //     x: this.stage.getPointerPosition().x / scale - this.stage.x() / scale,
    //     y: this.stage.getPointerPosition().y / scale - this.stage.y() / scale,
    //   };

    //   const newX = Math.min(
    //     (mousePointTo.x - this.stage.getPointerPosition().x / newScale) * -newScale,
    //     0
    //   );
    //   const newY = Math.min(
    //     (mousePointTo.y - this.stage.getPointerPosition().y / newScale) * -newScale,
    //     0
    //   );

    //   this.stage.position({ x: newX, y: newY });
    // },
    hoverImg(event){
      event.target.opacity(1);
    },
    mouseOutImg(event){
      event.target.opacity(0);
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