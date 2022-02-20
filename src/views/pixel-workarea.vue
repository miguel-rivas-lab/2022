<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig" @wheel="zoom">
      <v-layer>
        <template v-for="(row, y) in pixelGrid">
          <template v-for="(id, x) in row">
            <v-rect
              v-bind:key="`px${x}y${y}`"
              @click="paintColor(x, y, $event)"
              @mouseover="mouseOverPixel($event)"
              @mouseout="mouseOutPixel($event)"
              :config="{
                x: x,
                y: y,
                width: 1,
                height: 1,
                fill: getValue(id),
                stroke: '#aaa',
                strokeWidth: 0.001,
                opacity: 1
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

enum pE {
  empty = 10,
  white,
  black,
}

const p = {
  empty: {text: "", value: "rgba(90,90,90,0.1)"},
  black: {text: 0, value: "#222222"},
  white: {text: 1, value: "#44ff11"},
};

const gridSize = 32;

export default Vue.extend({
  components: {},
  data: () => ({
    currentColor: pE.white,
    pixelGrid: [...new Array(gridSize)].map((el) => new Array(gridSize)),
    selection: {},
    konvaConfig: { width: 0, height: 0, draggable: true },
    initialPixel: {},
    stage: undefined,
  }),
  created() {
    this.selection = this.$store.getters.getAvatarSelection;
    window.addEventListener("resize", this.updateCanvas);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        this.pixelGrid[y][x] = pE.empty;
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
    this.stage.scale({ x: 30, y: 30 });
    this.stage.position({
      x: 100,
      y: 100,
    });
    this.pixelGrid[0][0] = this.currentColor;
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
    }),
  },
  methods: {
    mouseOverPixel(event){
      const el = event.target;
      el.attrs.opacity = 0.5;
    },
    mouseOutPixel(event){
      const el = event.target;
      el.attrs.opacity = 1;
    },
    paintColor(x, y, event) {
      const el = event.target;
      this.pixelGrid[y][x] = this.currentColor;
      el.attrs.fill = this.getValue(this.currentColor);
    },
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.konvaConfig.width = window.innerWidth - (margin - 50) - 100;
      this.konvaConfig.height = window.innerHeight;
    },
    getValue(id){
      return p[pE[id]].value;
    },
    getText(id){
      return p[pE[id]].text;
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