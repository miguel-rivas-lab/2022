<template>
  <div
    @scroll.passive="$emit('scroll', $event)"
    class="scroll-area"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colorsType } from "../modules/types.js";

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "silver",
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    itemColor() {
      if (colorsType.includes(this.color)) {
        return this.color;
      } else {
        console.warn(
          `color="${this.color}" is not a supported value on scroll-area.vue, try the following values instead:`
        );
        console.warn(colorsType);
        return "silver";
      }
    },
    classes() {
      return [
        this.itemColor,
        {
          "no-horizontal": !this.horizontal,
          "no-vertical": !this.vertical,
        },
      ];
    },
  },
});
</script>