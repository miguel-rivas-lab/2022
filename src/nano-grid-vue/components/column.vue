<template>
  <component
    :is="tag"
    :class="classes"
    :role="role"
    v-bind:style="computedStyle"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { validateSize } from "nano-grid/modules/columns-manager.js";

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: "div",
    },
    size: undefined,
    tableElement: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    width: 0,
    height: 0,
  }),
  computed: {
    classes() {
      return ["column", this.computedSize];
    },
    computedSize() {
      return this.size ? validateSize(this.size).class : "";
    },
    computedStyle() {
      return this.size ? validateSize(this.size).style : "";
    },
    role() {
      if (this.tableElement) {
        return "cell";
      } else {
        return "";
      }
    },
  },
});
</script>