<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig" @wheel="zoom">
      <v-layer id="controllers">
        <v-group @click="rotateLeftMatrix()">
          <ctrl glyph="rotate-left" :x="-1" :y="-1" :width="2" :height="2" />
        </v-group>
        <v-group @click="rotateRightMatrix()">
          <ctrl
            glyph="rotate-right"
            :x="gridSize + 1"
            :y="gridSize + 1"
            :width="2"
            :height="2"
          />
        </v-group>
        <v-group @click="reverseHorizontalMatrix()">
          <ctrl glyph="swap" :x="gridSize + 1" :y="-1" :width="2" :height="2" />
        </v-group>
        <v-group @click="reverseVerticalMatrix()">
          <ctrl
            glyph="swap"
            :x="-1"
            :y="gridSize + 1"
            :width="2"
            :height="2"
            :rotation="90"
          />
        </v-group>
        <v-group @click="moveMatrix(0, -1)">
          <ctrl
            glyph="chevron"
            :x="1"
            :y="-1"
            :width="gridSize"
            :height="1"
            :rotation="180"
          />
        </v-group>
        <v-group @click="moveMatrix(0, 1)">
          <ctrl
            glyph="chevron"
            :x="1"
            :y="gridSize + 2"
            :width="gridSize"
            :height="1"
            :rotation="0"
          />
        </v-group>
        <v-group @click="moveMatrix(-1, 0)">
          <ctrl
            glyph="chevron"
            :x="-1"
            :y="1"
            :width="1"
            :height="gridSize"
            :rotation="90"
            :offsetX="-(gridSize - 1) * 0.5"
            :offsetY="(gridSize + 1) * 0.5"
          />
        </v-group>
        <v-group @click="moveMatrix(1, 0)">
          <ctrl
            glyph="chevron"
            :x="gridSize + 2"
            :y="1"
            :width="1"
            :height="gridSize"
            :rotation="270"
            :offsetX="(gridSize + 1) * 0.5"
            :offsetY="(gridSize - 1) * 0.5"
          />
        </v-group>
        <template v-for="pixel in gridSize">
          <v-group
            v-bind:key="`buttonTop${pixel}`"
            @click="moveLine('top', pixel)"
          >
            <ctrl
              glyph="chevron"
              :x="pixel"
              :y="0"
              :width="1"
              :height="1"
              :rotation="180"
            />
          </v-group>
          <v-group
            v-bind:key="`buttonBottom${pixel}`"
            @click="moveLine('bottom', pixel)"
          >
            <ctrl
              glyph="chevron"
              :x="pixel"
              :y="gridSize + 1"
              :width="1"
              :height="1"
              :rotation="0"
            />
          </v-group>
          <v-group
            v-bind:key="`buttonLeft${pixel}`"
            @click="moveLine('left', pixel)"
          >
            <ctrl
              glyph="chevron"
              :x="0"
              :y="pixel"
              :width="1"
              :height="1"
              :rotation="90"
            />
          </v-group>
          <v-group
            v-bind:key="`buttonRight${pixel}`"
            @click="moveLine('right', pixel)"
          >
            <ctrl
              glyph="chevron"
              :x="gridSize + 1"
              :y="pixel"
              :width="1"
              :height="1"
              :rotation="270"
            />
          </v-group>
        </template>
      </v-layer>
      <v-layer>
        <template v-for="(row, y) in pixelGrid">
          <template v-for="(color, x) in row">
            <v-rect
              v-bind:key="`px${x}y${y}`"
              :id="`px${x}y${y}`"
              @mousedown="paintColor(x, y, $event)"
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
import { allColors } from "../db/wiki-colors";
import ctrl from "../components/pixel-controller.vue";
import { wikiColorEnum } from "../enums/wikicolors";
import h from "../modules/helpers";
import goose from "../json/goose.js";

export default Vue.extend({
  components: { ctrl },
  data: () => ({
    allColors,
    selection: {},
    tool: "brush",
    konvaConfig: { width: 0, height: 0, draggable: true },
    ctrConfig: {
      width: 1,
      height: 1,
      fill: "rgb(100 100 100 / 15%)",
      stroke: "#222",
      strokeWidth: 0.05,
      opacity: 1,
    },
    mainCtrConfig: {
      fill: "rgb(100 100 100 / 20%)",
      stroke: "#222",
      strokeWidth: 0.05,
      opacity: 1,
    },
    cornerCtrConfig: {
      width: 2,
      height: 2,
      fill: "rgb(100 100 100 / 10%)",
      stroke: "#222",
      strokeWidth: 0.05,
      opacity: 1,
    },
    initialPixel: {},
    stage: undefined,
  }),
  created() {
    this.selection = this.$store.getters.getPixelSelection;
    this.updateMatrix();
    window.addEventListener("resize", this.updateCanvas);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
    gridSize: function () {
      this.updateMatrix();
      this.cleanMatrix();
    },
    lock: function () {
      this.konvaConfig.draggable = !this.lock;
    },
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.updateCanvas();
    const zoom = 30;
    const margin = this.panel ? this.panelSize : 0;
    this.stage.scale({ x: zoom, y: zoom });
    this.stage.position({
      x: (window.innerWidth - (margin - 50) - 100 - this.gridSize * zoom) * 0.5,
      y: (window.innerHeight - this.gridSize * zoom) * 0.5,
    });
    this.openGoose();
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
      gridSize: "getGridSize",
      lock: "getLock",
    }),
    currentColor() {
      return this.selection.currentColor;
    },
    pixelGrid() {
      return this.selection.pixelGrid;
    },
  },
  methods: {
    openGoose() {
      this.selection.pixelGrid = goose.map((y) =>
        y.map((x) => allColors[wikiColorEnum[h.hexToDec(x)]])
      );
    },
    saveImg() {
      // // console.log(this.stage.find("#controllers")[0].attrs);
      // this.stage.find("#controllers")[0].attrs.opacity = 0;
      // function downloadURI(uri, name) {
      //   let link = document.createElement("a");
      //   link.download = name;
      //   link.href = uri;
      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link);
      //   // delete link;
      // }
      // const dataURL = this.stage.toDataURL({ pixelRatio: 3 });
      // downloadURI(dataURL, "stage.png");
      // // this.stage.find("#controllers").opacity = 1;
    },
    mouseOverPixel(event) {
      event.target.opacity(0.2);
    },
    mouseOutPixel(event) {
      event.target.opacity(1);
    },
    rotateLeftMatrix() {
      const maxValue = this.gridSize - 1;
      const minValue = 0;
      const newMatrix = this.selection.pixelGrid.map((y) => y.map((x) => x));

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          newMatrix[y][x] = this.selection.pixelGrid[x][maxValue - y];
        }
      }
      this.cleanMatrix();
      this.selection.pixelGrid = newMatrix;
    },
    rotateRightMatrix() {
      const maxValue = this.gridSize - 1;
      const minValue = 0;
      const newMatrix = this.selection.pixelGrid.map((y) => y.map((x) => x));

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          newMatrix[y][x] = this.selection.pixelGrid[maxValue - x][y];
        }
      }
      this.cleanMatrix();
      this.selection.pixelGrid = newMatrix;
    },
    reverseHorizontalMatrix() {
      const maxValue = this.gridSize - 1;
      const minValue = 0;
      const newMatrix = this.selection.pixelGrid.map((y) => y.map((x) => x));

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          newMatrix[y][x] = this.selection.pixelGrid[y][maxValue - x];
        }
      }
      this.cleanMatrix();
      this.selection.pixelGrid = newMatrix;
    },
    reverseVerticalMatrix() {
      const maxValue = this.gridSize - 1;
      const minValue = 0;
      const newMatrix = this.selection.pixelGrid.map((y) => y.map((x) => x));

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          newMatrix[y][x] = this.selection.pixelGrid[maxValue - y][x];
        }
      }
      this.cleanMatrix();
      this.selection.pixelGrid = newMatrix;
    },
    moveMatrix(x, y) {
      const maxValue = this.gridSize - 1;
      const minValue = 0;
      const newMatrix = this.selection.pixelGrid.map((y) => y.map((x) => x));
      if (y !== 0) {
        const loopBegin = y > 0 ? maxValue : minValue;
        const loopEnd = y > 0 ? minValue : maxValue;
        const inc = -y;
        newMatrix[loopBegin] = this.selection.pixelGrid[loopBegin + inc];
        for (let cy = minValue + 1; cy <= maxValue - 1; cy++) {
          const cty = (loopBegin - cy) * y;
          newMatrix[cty] = this.selection.pixelGrid[cty + inc];
        }
        newMatrix[loopEnd] = this.selection.pixelGrid[loopBegin];
        this.cleanMatrix();
        this.selection.pixelGrid = newMatrix;
      }
      if (x !== 0) {
        const loopBegin = x > 0 ? maxValue : minValue;
        const loopEnd = x > 0 ? minValue : maxValue;
        const inc = -x;

        for (let cy = minValue; cy <= maxValue; cy++) {
          newMatrix[cy][loopBegin] = this.selection.pixelGrid[cy][loopBegin + inc];
        }
        for (let cy = minValue; cy <= maxValue; cy++) {
          for (let cx = minValue + 1; cx <= maxValue - 1; cx++) {
            const ctx = (loopBegin - cx) * x;
            newMatrix[cy][ctx] = this.selection.pixelGrid[cy][ctx + inc];
          }
        }
        for (let cy = minValue; cy <= maxValue; cy++) {
          newMatrix[cy][loopEnd] = this.selection.pixelGrid[cy][loopBegin];
        }
        this.cleanMatrix();
        this.selection.pixelGrid = newMatrix;
      }
    },
    moveLine(direction, position = 0) {
      if (direction === "top") {
        const firstValue = this.selection.pixelGrid[0][position - 1];
        const firstRowColor = this.stage.find(`#px${position - 1}y${0}`)[0]
          .attrs.fill;
        for (let y = 1; y < this.gridSize; y++) {
          this.stage.find(`#px${position - 1}y${y - 1}`)[0].attrs.fill =
            this.stage.find(`#px${position - 1}y${y}`)[0].attrs.fill;
          this.selection.pixelGrid[y - 1][position - 1] =
            this.selection.pixelGrid[y][position - 1];
        }
        this.stage.find(
          `#px${position - 1}y${this.gridSize - 1}`
        )[0].attrs.fill = firstRowColor;
        this.selection.pixelGrid[this.gridSize - 1][position - 1] = firstValue;
      }

      if (direction === "bottom") {
        const firstValue =
          this.selection.pixelGrid[this.gridSize - 1][position - 1];
        const firstRowColor = this.stage.find(
          `#px${position - 1}y${this.gridSize - 1}`
        )[0].attrs.fill;
        for (let y = this.gridSize - 1; y > 0; y--) {
          this.stage.find(`#px${position - 1}y${y}`)[0].attrs.fill =
            this.stage.find(`#px${position - 1}y${y - 1}`)[0].attrs.fill;
          this.selection.pixelGrid[y][position - 1] =
            this.selection.pixelGrid[y - 1][position - 1];
        }
        this.stage.find(`#px${position - 1}y${0}`)[0].attrs.fill =
          firstRowColor;
        this.selection.pixelGrid[0][position - 1] = firstValue;
      }

      if (direction === "left") {
        const firstValue = this.selection.pixelGrid[position - 1][0];
        const firstRowColor = this.stage.find(`#px${0}y${position - 1}`)[0]
          .attrs.fill;
        for (let x = 1; x < this.gridSize; x++) {
          this.stage.find(`#px${x - 1}y${position - 1}`)[0].attrs.fill =
            this.stage.find(`#px${x}y${position - 1}`)[0].attrs.fill;
          this.selection.pixelGrid[position - 1][x - 1] =
            this.selection.pixelGrid[position - 1][x];
        }
        this.stage.find(
          `#px${this.gridSize - 1}y${position - 1}`
        )[0].attrs.fill = firstRowColor;
        this.selection.pixelGrid[position - 1][this.gridSize - 1] = firstValue;
      }

      if (direction === "right") {
        const firstValue =
          this.selection.pixelGrid[position - 1][this.gridSize - 1];
        const firstRowColor = this.stage.find(
          `#px${this.gridSize - 1}y${position - 1}`
        )[0].attrs.fill;
        for (let x = this.gridSize - 1; x > 0; x--) {
          this.stage.find(`#px${x}y${position - 1}`)[0].attrs.fill =
            this.stage.find(`#px${x - 1}y${position - 1}`)[0].attrs.fill;
          this.selection.pixelGrid[x][position - 1] =
            this.selection.pixelGrid[position - 1][x - 1];
        }
        this.stage.find(`#px${0}y${position - 1}`)[0].attrs.fill =
          firstRowColor;
        this.selection.pixelGrid[position - 1][0] = firstValue;
      }
    },
    updateMatrix() {
      for (let y = 0; y < this.gridSize; y++) {
        this.selection.pixelGrid[y] = new Array(this.gridSize);
        for (let x = 0; x < this.gridSize; x++) {
          this.selection.pixelGrid[y][x] = this.allColors.empty;
        }
      }
    },
    cleanMatrix() {
      for (let y = 0; y < this.gridSize; y++) {
        for (let x = 0; x < this.gridSize; x++) {
          this.stage.find(`#px${x}y${y}`)[0].attrs.fill =
            this.allColors.empty.rgb;
        }
      }
    },
    paintColor(x, y, event) {
      if (this.selection.tool === "brush") {
        const el = event.target;
        this.selection.pixelGrid[y][x] = this.currentColor;
        el.attrs.fill = this.currentColor.rgb;
      }
      if (this.selection.tool === "dropper") {
        const el = event.target;
        this.selection.currentColor = this.selection.pixelGrid[y][x];
        this.selection.tool = "brush";
      }
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