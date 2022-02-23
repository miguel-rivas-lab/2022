<template>
  <v-group
    @mouseover="mouseOverPixel()"
    @mouseout="mouseOutPixel()"
    @click.passive="$emit('click', $event)"
  >
    <v-rect
      ref="bk"
      :config="{
        x: x,
        y: y,
        width: width,
        height: height,
        fill: bkColor,
        stroke: strokeColor,
        strokeWidth: 0.05,
      }"
    />
    <v-text
      ref="text"
      :config="{
        x: x,
        y: y,
        width: width,
        height: height,
        fill: textColor,
        align: 'center',
        fontSize: fontSize,
        fontFamily: 'icomoon',
        lineHeight: 0,
        verticalAlign: 'middle',
        text: h.getIcon(glyph),
        rotation: rotation,
        offsetX: offset.x,
        offsetY: offset.y,
      }"
    />
  </v-group>
</template>

<script lang="ts">
import Vue from "vue";
import h from "../modules/helpers";

export default Vue.extend({
  props: {
    x: {
      type: Number,
    },
    y: {
      type: Number,
    },
    glyph: {
      type: String,
    },
    rotation: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    bkColor: {
      type: String,
      default: "rgb(100 100 100 / 5%)",
    },
    offsetX: {
      type: Number,
      default: 0,
    },
    offsetY: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    h,
    textColor: "#999",
    strokeColor: "#222",
    fontSize: 0,
  }),
  computed: {
    offset() {
      if (this.offsetX || this.offsetY) {
        return { x: this.offsetX, y: this.offsetY };
      } else {
        switch (this.rotation) {
          case 90:
            return { x: 0, y: this.height };
            break;

          case 180:
            return { x: this.width, y: this.height };
            break;

          case 270:
            return { x: this.width, y: 0 };
            break;

          default:
            return { x: 0, y: 0 };
        }
      }
    },
  },
  methods: {
    mouseOverPixel() {
      this.$refs.bk.getStage().fill("#cb9619");
      this.$refs.text.getStage().fill("#443208");
    },
    mouseOutPixel() {
      this.$refs.bk.getStage().fill(this.bkColor);
      this.$refs.text.getStage().fill(this.textColor);
    },
  },
  mounted() {
    this.fontSize = 1; //Math.min(this.width, this.height) * 0.75;
  },
});
</script>