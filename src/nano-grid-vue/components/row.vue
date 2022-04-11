<template>
  <component
    @click.passive="$emit('click', $event)"
    class="nano-row"
    :class="classes"
    :is="tag"
    :role="role"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { validateSpacing } from "nano-grid/modules/columns-manager.js";
import { breakpointsType, spacingType } from "../modules/types.js";

export default Vue.extend({
  /*
    tag: ['div', 'li', 'tr' ...]
    type: ['Bootstrap', 'Custom', 'Table']
  */
  props: {
    tag: {
      type: String,
      default: "div",
    },
    breakpoint: {
      type: String,
      default: "",
    },
    group: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: [String, Number],
      default: 0,
    },
    integrated: {
      type: Boolean,
      default: false,
    },
    tableElement: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    grid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        {
          "nano-group": this.group,
          integrated: this.integrated,
          vertical: this.vertical,
          grid: this.grid,
        },
        this.computedSpacing,
        this.computedBreakpoint,
      ];
    },
    computedBreakpoint() {
      if (breakpointsType.includes(this.breakpoint)) {
        return this.breakpoint;
      } else {
        console.warn(
          `breakpoint="${this.breakpoint}" is not a supported value on row.vue, try the following values instead:`
        );
        console.warn(breakpointsType);
        return "";
      }
    },
    computedSpacing() {
      if (spacingType.includes(+this.spacing)) {
        return validateSpacing(this.spacing);
      } else {
        console.warn(
          `spacing="${this.spacing}" is not a supported value on row.vue, try the following values instead:`
        );
        console.warn(spacingType);
        return "";
      }
    },
    role() {
      if (this.tableElement) {
        let result = "row";
        if (this.group) {
          result = "group";
        }
        return result;
      } else {
        return "";
      }
    },
  },
});
</script>