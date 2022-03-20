<template>
  <component :is="tag" :class="computedClasses" />
</template>

<script lang="ts">
import Vue from "vue";
import { colorsType, directionsType } from "../modules/types.js";

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "span",
    },
    mode: {
      type: String,
      default: "icon",
    },
    glyph: {
      type: String,
    },
    direction: {
      type: String,
      default: "down",
    },
  },
  computed: {
    itemColor() {
      if (colorsType.includes(this.color)) {
        return this.color;
      } else {
        console.warn(
          `color="${this.color}" is not a supported value on icon.vue, try the following values instead:`
        );
        console.warn(colorsType);
        return "";
      }
    },
    iconDirection() {
      if (directionsType.includes(this.direction)) {
        return this.direction;
      } else {
        console.warn(
          `direction="${this.direction}" is not a supported value on icon.vue, try the following values instead:`
        );
        console.warn(directionsType);
        return "down";
      }
    },
    computedMode() {
      return this.mode;
    },
    computedGlyph() {
      switch (this.mode) {
        case "mdi":
          return `mdi-${this.glyph}`;
        default:
          return this.glyph;
      }
    },
    computedClasses() {
      return [
        this.computedMode,
        this.itemColor,
        this.computedGlyph,
        this.iconDirection,
        {
          colorized: this.color !== "",
        },
      ];
    },
  },
});
</script>
