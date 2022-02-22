<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig" @wheel="zoom">
      <v-layer>
        <v-rect
          @click="rotateLeftMatrix()"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: -1,
            y: -1,
            ...cornerCtrConfig,
          }"
        />
        <v-rect
          @click="reverseHorizontalMatrix()"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: gridSize + 1,
            y: -1,
            ...cornerCtrConfig,
          }"
        />
        <v-rect
          @click="reverseVerticalMatrix()"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: -1,
            y: gridSize + 1,
            ...cornerCtrConfig,
          }"
        />
        <v-rect
          @click="rotateRightMatrix()"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: gridSize + 1,
            y: gridSize + 1,
            ...cornerCtrConfig,
          }"
        />
      </v-layer>
      <v-layer>
        <v-rect
          @click="moveMatrix(0, -1)"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: 1,
            y: -1,
            width: gridSize,
            height: 1,
            ...mainCtrConfig,
          }"
        />
        <v-rect
          @click="moveMatrix(0, 1)"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: 1,
            y: gridSize + 2,
            width: gridSize,
            height: 1,
            ...mainCtrConfig,
          }"
        />
        <v-rect
          @click="moveMatrix(-1, 0)"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: -1,
            y: 1,
            width: 1,
            height: gridSize,
            ...mainCtrConfig,
          }"
        />
        <v-rect
          @click="moveMatrix(1, 0)"
          @mouseover="mouseOverPixel($event)"
          @mouseout="mouseOutPixel($event)"
          :config="{
            x: gridSize + 2,
            y: 1,
            width: 1,
            height: gridSize,
            ...mainCtrConfig,
          }"
        />
      </v-layer>
      <v-layer>
        <template v-for="pixel in gridSize">
          <v-rect
            v-bind:key="`buttonTop${pixel}`"
            @click="moveLine('top', pixel)"
            @mouseover="mouseOverPixel($event)"
            @mouseout="mouseOutPixel($event)"
            :config="{
              x: pixel,
              y: 0,
              ...ctrConfig,
            }"
          />
          <v-rect
            v-bind:key="`buttonBottom${pixel}`"
            @click="moveLine('bottom', pixel)"
            @mouseover="mouseOverPixel($event)"
            @mouseout="mouseOutPixel($event)"
            :config="{
              x: pixel,
              y: gridSize + 1,
              ...ctrConfig,
            }"
          />
          <v-rect
            v-bind:key="`buttonLeft${pixel}`"
            @click="moveLine('left', pixel)"
            @mouseover="mouseOverPixel($event)"
            @mouseout="mouseOutPixel($event)"
            :config="{
              x: 0,
              y: pixel,
              ...ctrConfig,
            }"
          />
          <v-rect
            v-bind:key="`buttonRight${pixel}`"
            @click="moveLine('right', pixel)"
            @mouseover="mouseOverPixel($event)"
            @mouseout="mouseOutPixel($event)"
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

export default Vue.extend({
  components: {},
  data: () => ({
    pixelColor,
    pixelGrid: [],
    selection: {},
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
      // this.cleanMatrix();
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
    // this.cleanMatrix();
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
      gridSize: "getGridSize",
    }),
    currentColor() {
      return this.selection.currentColor;
    },
  },
  methods: {
    mouseOverPixel(event) {
      event.target.opacity(0.2);
    },
    mouseOutPixel(event) {
      event.target.opacity(1);
    },
    rotateLeftMatrix() {
      const currentMatrix = this.pixelGrid.map((y) => y.map((x) => x));
      const maxValue = this.gridSize - 1;
      const minValue = 0;

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          currentMatrix[y][x] = this.pixelGrid[x][maxValue - y];
          this.stage.find(`#px${x}y${y}`)[0].attrs.fill =
            currentMatrix[y][x].rgb;
        }
      }

      this.pixelGrid = currentMatrix;
    },
    rotateRightMatrix() {
      const currentMatrix = this.pixelGrid.map((y) => y.map((x) => x));
      const maxValue = this.gridSize - 1;
      const minValue = 0;

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          currentMatrix[y][x] = this.pixelGrid[maxValue - x][y];
          this.stage.find(`#px${x}y${y}`)[0].attrs.fill =
            currentMatrix[y][x].rgb;
        }
      }

      this.pixelGrid = currentMatrix;
    },
    reverseHorizontalMatrix() {
      const currentMatrix = this.pixelGrid.map((y) => y.map((x) => x));
      const maxValue = this.gridSize - 1;
      const minValue = 0;

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          currentMatrix[y][x] = this.pixelGrid[y][maxValue - x];
          this.stage.find(`#px${x}y${y}`)[0].attrs.fill =
            currentMatrix[y][x].rgb;
        }
      }

      this.pixelGrid = currentMatrix;
    },
    reverseVerticalMatrix() {
      const currentMatrix = this.pixelGrid.map((y) => y.map((x) => x));
      const maxValue = this.gridSize - 1;
      const minValue = 0;

      for (let y = minValue; y <= maxValue; y++) {
        for (let x = minValue; x <= maxValue; x++) {
          currentMatrix[y][x] = this.pixelGrid[maxValue - y][x];
          this.stage.find(`#px${x}y${y}`)[0].attrs.fill =
            currentMatrix[y][x].rgb;
        }
      }

      this.pixelGrid = currentMatrix;
    },
    moveMatrix(x, y) {
      // const firstRowColor = [];
      // const firstValue = [];
      // const maxValue = this.gridSize - 1;
      // const minValue = 0;
      // if (true) {
      //   const loopBegin = y > 0 ? maxValue : minValue;
      //   const loopEnd = y > 0 ? minValue : maxValue;
      //   const inc = -y;
      //   console.clear();
      //   console.log({ x, y, loopBegin, loopEnd, inc });
      //   for (let cx = minValue; cx <= maxValue; cx++) {
      //     firstRowColor.push(
      //       this.stage.find(`#px${cx}y${loopBegin}`)[0].attrs.fill
      //     );
      //     firstValue.push(this.pixelGrid[loopBegin][cx]);
      //   }
      //   for (let cy = minValue + 1; cy <= maxValue; cy++) {
      //     const cty = (loopBegin - cy) * y;
      //     if (this.pixelGrid[cty] && this.pixelGrid[cty + inc]) {
      //       for (let cx = 0; cx < maxValue; cx++) {
      //         this.stage.find(`#px${cx}y${cty + inc}`)[0].attrs.fill =
      //           this.pixelGrid[cty][cx].rgb;
      //         this.pixelGrid[cty + inc][cx] = this.pixelGrid[cty][cx];
      //       }
      //     }
      //   }
      //   // for (let cx = 0; cx < this.gridSize - 1; cx++) {
      //   //   this.stage.find(`#px${cx}y${this.gridSize - 1}`)[0].attrs.fill =
      //   //     firstRowColor[cx];
      //   //   this.pixelGrid[this.gridSize - 1][cx] = firstValue[cx];
      //   // }
      // }
    },
    moveLine(direction, position = 0) {
      if (direction === "top") {
        const firstValue = this.pixelGrid[0][position - 1];
        for (let y = 1; y < this.gridSize; y++) {
          this.stage.find(`#px${position - 1}y${y - 1}`)[0].attrs.fill =
            this.pixelGrid[y][position - 1].rgb;
          this.pixelGrid[y - 1][position - 1] = this.pixelGrid[y][position - 1];
        }
        this.stage.find(
          `#px${position - 1}y${this.gridSize - 1}`
        )[0].attrs.fill = firstValue.rgb;
        this.pixelGrid[this.gridSize - 1][position - 1] = firstValue;
      }

      if (direction === "bottom") {
        const firstValue = this.pixelGrid[this.gridSize - 1][position - 1];
        for (let y = this.gridSize - 1; y > 0; y--) {
          this.stage.find(`#px${position - 1}y${y}`)[0].attrs.fill =
            this.pixelGrid[y - 1][position - 1].rgb;
          this.pixelGrid[y][position - 1] = this.pixelGrid[y - 1][position - 1];
        }
        this.stage.find(`#px${position - 1}y${0}`)[0].attrs.fill =
          firstValue.rgb;
        this.pixelGrid[0][position - 1] = firstValue;
      }

      if (direction === "left") {
        const firstValue = this.pixelGrid[position - 1][0];
        const firstRowColor = this.stage.find(`#px${0}y${position - 1}`)[0]
          .attrs.fill;
        for (let x = 1; x < this.gridSize; x++) {
          this.stage.find(`#px${x - 1}y${position - 1}`)[0].attrs.fill =
            this.stage.find(`#px${x}y${position - 1}`)[0].attrs.fill;
          this.pixelGrid[position - 1][x - 1] = this.pixelGrid[position - 1][x];
        }
        this.stage.find(
          `#px${this.gridSize - 1}y${position - 1}`
        )[0].attrs.fill = firstRowColor;
        this.pixelGrid[position - 1][this.gridSize - 1] = firstValue;
      }

      if (direction === "right") {
        const firstRowColor = this.stage.find(
          `#px${this.gridSize - 1}y${position - 1}`
        )[0].attrs.fill;
        const firstValue = this.pixelGrid[position - 1][0];
        for (let x = this.gridSize - 1; x > 0; x--) {
          this.stage.find(`#px${x}y${position - 1}`)[0].attrs.fill =
            this.stage.find(`#px${x - 1}y${position - 1}`)[0].attrs.fill;
          this.pixelGrid[x][position - 1] = this.pixelGrid[position - 1][x - 1];
        }
        this.stage.find(`#px${0}y${position - 1}`)[0].attrs.fill =
          firstRowColor;
        this.pixelGrid[position - 1][0] = firstValue;
      }
    },
    updateMatrix() {
      for (let y = 0; y < this.gridSize; y++) {
        this.pixelGrid[y] = new Array(this.gridSize);
        for (let x = 0; x < this.gridSize; x++) {
          this.pixelGrid[y][x] = pixelColor.Empty;
        }
      }
    },
    // cleanMatrix(){
    //   for (let y = 0; y < 64; y++) {
    //     for (let x = 0; x < 64; x++) {
    //       this.stage.find(`#px${x}y${y}`)[0].attrs.fill = "rgb(0 0 0 / 0%)";
    //     }
    //   }
    //   for (let y = 0; y < this.gridSize; y++) {
    //     for (let x = 0; x < this.gridSize; x++) {
    //       this.stage.find(`#px${x}y${y}`)[0].attrs.fill = pixelColor.Empty.rgb;
    //     }
    //   }
    // },
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