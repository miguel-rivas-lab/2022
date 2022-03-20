<template>
  <component
    :is="computedTag"
    :class="computedClasses"
    :role="tag === 'button' ? 'button' : undefined"
    :aria-label="computedLabel"
    :to="to"
    :title="computedLabel"
    @click.passive="$emit('click', $event)"
  >
    <icon v-if="glyph !== ''" :glyph="glyph" :direction="iconDirection" />
    <span class="caption" v-if="text">
      {{ text }}
    </span>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "./icon.vue";
import { colorsType, directionsType } from "../modules/types.js";

export default Vue.extend({
  components: { Icon },
  props: {
    tag: {
      type: String,
      default: "button",
    },
    glyph: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    text: {
      type: [String, Number],
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: "transparent",
    },
    active: {
      type: Boolean,
      default: false,
    },
    to: {
      default: undefined,
    },
    direction: {
      type: String,
      default: "down",
    },
    mode: {
      type: String,
      default: "flat",
    },
  },
  computed: {
    buttonType() {
      return `btn ${this.mode}`;
    },
    itemColor() {
      if (colorsType.includes(this.color)) {
        return this.color;
      } else {
        console.warn(
          `color="${this.color}" is not a supported value on btn.vue, try the following values instead:`
        );
        console.warn(colorsType);
        return "transparent";
      }
    },
    iconDirection() {
      if (directionsType.includes(this.direction)) {
        return this.direction;
      } else {
        console.warn(
          `direction="${this.direction}" is not a supported value on btn.vue, try the following values instead:`
        );
        console.warn(directionsType);
        return "down";
      }
    },
    computedTag() {
      if (this.to) {
        return "router-link";
      } else {
        return this.tag;
      }
    },
    computedLabel() {
      if (this.text) {
        return undefined;
      } else {
        return this.title;
      }
    },
    computedClasses() {
      return [
        this.buttonType,
        this.itemColor,
        this.size,
        {
          active: this.active,
        },
      ];
    },
  },
});
</script>
