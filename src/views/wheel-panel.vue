<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend General

      slider#colors(
        label="Colors",
        min="1",
        max="720",
        step="1",
        v-on:update-value="updateVal('colors', $event)",
        :value="selection.colors"
      )
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getWheelSelection;
  },
  methods: {
    addColumn() {
      this.selection.colors++;
    },
    removeBlock() {
      this.selection.colors--;
    },
  },
});
</script>