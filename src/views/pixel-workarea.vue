<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig" @wheel="zoom">
      <v-layer>
        <template v-for="pixel in gridSize">
          <v-rect
            v-bind:key="`buttonTop${pixel}`"
            @click="moveLine('top', pixel)"
            :config="{
              x: pixel,
              y: 0,
              ...ctrConfig,
            }"
          />
          <v-rect
            v-bind:key="`buttonBottom${pixel}`"
            @click="moveLine('bottom', pixel)"
            :config="{
              x: pixel,
              y: gridSize + 1,
              ...ctrConfig,
            }"
          />
          <v-rect
            v-bind:key="`buttonLeft${pixel}`"
            @click="moveLine('left', pixel)"
            :config="{
              x: 0,
              y: pixel,
              ...ctrConfig,
            }"
          />
          <v-rect
            v-bind:key="`buttonRight${pixel}`"
            @click="moveLine('right', pixel)"
            :config="{
              x: gridSize + 1,
              y: pixel,
              ...ctrConfig,
            }"
          />
        </template>
      </v-layer>

      <v-layer>
        <template v-for="(row, y) in pixelGrid">
          <template v-for="(color, x) in row">
            <v-rect
              v-bind:key="`px${x}y${y}`"
              :id="`px${x}y${y}`"
              @click="paintColor(x, y, $event)"
              @mouseover="mouseOverPixel($event)"
              @mouseout="mouseOutPixel($event)"
              :config="{
                x: x + 1,
                y: y + 1,
                width: 1,
                height: 1,
                fill: color.rgb,
                stroke: '#aaa',
                strokeWidth: 0.001,
                opacity: 1,
              }"
            />
          </template>
        </template>
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { pixelColor } from "../modules/colors";

const gridSize = 32;

export default Vue.extend({
  components: {},
  data: () => ({
    pixelColor,
    gridSize,
    pixelGrid: [...new Array(gridSize)].map((el) => new Array(gridSize)),
    selection: {},
    konvaConfig: { width: 0, height: 0, draggable: true },
    ctrConfig: {
      width: 1,
      height: 1,
      fill: "#292929",
      stroke: "#222",
      strokeWidth: 0.05,
      opacity: 1,
    },
    initialPixel: {},
    stage: undefined,
  }),
  created() {
    this.selection = this.$store.getters.getPixelSelection;
    window.addEventListener("resize", this.updateCanvas);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        this.pixelGrid[y][x] = pixelColor.Empty;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.updateCanvas();
    const zoom = 30;
    const margin = this.panel ? this.panelSize : 0;
    this.stage.scale({ x: zoom, y: zoom });
    this.stage.position({
      x: (window.innerWidth - (margin - 50) - 100 - gridSize * zoom) * 0.5,
      y: (window.innerHeight - gridSize * zoom) * 0.5,
    });
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
    }),
    currentColor() {
      return this.selection.currentColor;
    },
  },
  methods: {
    mouseOverPixel(event) {
      const el = event.target;
      el.attrs.opacity = 0.5;
    },
    mouseOutPixel(event) {
      const el = event.target;
      el.attrs.opacity = 1;
    },
    moveLine(direction, position = 0) {
      if (direction === "top") {
        for (let y = 1; y < gridSize; y++) {
          this.stage.find(`#px${position - 1}y${y - 1}`)[0].attrs.fill =
            this.stage.find(`#px${position - 1}y${y}`)[0].attrs.fill;
          this.pixelGrid[y - 1][position - 1] = this.pixelGrid[y][position - 1];
        }
        this.stage.find(`#px${position - 1}y${gridSize - 1}`)[0].attrs.fill =
          pixelColor.Empty.rgb;
      }

      if (direction === "left") {
        for (let x = 1; x < gridSize; x++) {
          this.stage.find(`#px${x - 1}y${position - 1}`)[0].attrs.fill =
            this.stage.find(`#px${x}y${position - 1}`)[0].attrs.fill;
          this.pixelGrid[position - 1][x - 1] = this.pixelGrid[position - 1][x];
        }
        this.stage.find(`#px${gridSize - 1}y${position - 1}`)[0].attrs.fill =
          pixelColor.Empty.rgb;
      }

      if (direction === "bottom") {
        for (let y = gridSize - 1; y > 0; y--) {
          this.stage.find(`#px${position - 1}y${y}`)[0].attrs.fill =
            this.stage.find(`#px${position - 1}y${y-1}`)[0].attrs.fill;
          this.pixelGrid[y][position - 1] = this.pixelGrid[y-1][position - 1];
        }
        this.stage.find(`#px${position - 1}y${0}`)[0].attrs.fill =
          pixelColor.Empty.rgb;
      }

      if (direction === "right") {
        for (let x = gridSize - 1; x > 0; x--) {
          this.stage.find(`#px${x}y${position - 1}`)[0].attrs.fill =
            this.stage.find(`#px${x-1}y${position - 1}`)[0].attrs.fill;
          this.pixelGrid[x][position - 1] = this.pixelGrid[position - 1][x-1];
        }
        this.stage.find(`#px${0}y${position - 1}`)[0].attrs.fill =
          pixelColor.Empty.rgb;
      }
    },
    paintColor(x, y, event) {
      const el = event.target;
      this.pixelGrid[y][x] = this.currentColor;
      el.attrs.fill = this.currentColor.rgb;
    },
    updateCanvas: function () {
      const margin = this.panel ? this.panelSize : 0;
      this.konvaConfig.width = window.innerWidth - (margin - 50) - 100;
      this.konvaConfig.height = window.innerHeight;
    },
    zoom(event) {
      const scale = 0.75;
      const maxZoom = 100;
      const minZoom = 1;

      event.evt.preventDefault();
      let oldScale = this.stage.scaleX();

      let mousePointTo = {
        x:
          this.stage.getPointerPosition().x / oldScale -
          this.stage.x() / oldScale,
        y:
          this.stage.getPointerPosition().y / oldScale -
          this.stage.y() / oldScale,
      };

      let newScale = event.evt.deltaY > 0 ? oldScale * scale : oldScale / scale;

      newScale = newScale > maxZoom ? maxZoom : newScale;
      newScale = newScale < minZoom ? minZoom : newScale;

      this.stage.scale({ x: newScale, y: newScale });

      let newPos = {
        x:
          -(mousePointTo.x - this.stage.getPointerPosition().x / newScale) *
          newScale,
        y:
          -(mousePointTo.y - this.stage.getPointerPosition().y / newScale) *
          newScale,
      };
      this.stage.position(newPos);
    },
  },
});
</script>