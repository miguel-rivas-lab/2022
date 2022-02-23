<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Gear Properties

      slider#corner-amount(
        label="Teeth Amount",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('cornerAmount', $event)",
        :value="selection.cornerAmount"
      )

      slider#outter-circle-radius(
        label="Pitch Radius",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('outterCircleRadius', $event)",
        :value="selection.outterCircleRadius"
      )

      slider#inner-circle-radius(
        label="Base Circle Radius",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('innerCircleRadius', $event)",
        :value="selection.innerCircleRadius"
      )

      slider#main-perforation-radius(
        label="Axis Radius",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('mainPerforationRadius', $event)",
        :value="selection.mainPerforationRadius"
      )

      slider#side-perforation-amount(
        label="Side Perforation Amount",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationAmount', $event)",
        :value="selection.sidePerforationAmount"
      )

      slider#side-perforation-radius(
        label="Side Perforation Radius",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationRadius', $event)",
        :value="selection.sidePerforationRadius"
      )

      slider#side-perforation-distance(
        label="Side Perforation Distance",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationDistance', $event)",
        :value="selection.sidePerforationDistance"
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
    this.selection = this.$store.getters.getGearSelection;
  },
});
</script>