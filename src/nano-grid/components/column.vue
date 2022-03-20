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
    mode: {
      type: String,
      default: "column",
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
    classes(): Array<string> {
      return [this.mode, this.computedSize];
    },
    computedSize(): string {
      return this.size ? validateSize(this.size).class : "";
    },
    computedStyle(): string {
      return this.size ? validateSize(this.size).style : "";
    },
    role(): string {
      if (this.tableElement) {
        return "cell";
      } else {
        return "";
      }
    },
  },
});
</script>