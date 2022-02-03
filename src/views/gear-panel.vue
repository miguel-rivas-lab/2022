<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Gear Properties
      number-input#corner-amount(
        :value="selection.cornerAmount",
        label="Teeth Amount",
        v-on:update-value="updateVal($event, 'cornerAmount')"
      )
      number-input#outter-circle-radius(
        :value="selection.outterCircleRadius",
        label="Pitch Radius",
        v-on:update-value="updateVal($event, 'outterCircleRadius')"
      )
      number-input#inner-circle-radius(
        :value="selection.innerCircleRadius",
        label="Base Circle Radius",
        v-on:update-value="updateVal($event, 'innerCircleRadius')"
      )
      number-input#main-perforation-radius(
        :value="selection.mainPerforationRadius",
        label="Axis Radius",
        v-on:update-value="updateVal($event, 'mainPerforationRadius')"
      )
      number-input#side-perforation-amount(
        :value="selection.sidePerforationAmount",
        label="Side Perforation Amount",
        v-on:update-value="updateVal($event, 'sidePerforationAmount')"
      )
      number-input#side-perforation-radius(
        :value="selection.sidePerforationRadius",
        label="Side Perforation Radius",
        v-on:update-value="updateVal($event, 'sidePerforationRadius')"
      )
      number-input#side-perforation-distance(
        :value="selection.sidePerforationDistance",
        label="Side Perforation Distance",
        v-on:update-value="updateVal($event, 'sidePerforationDistance')"
      )
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getGearSelection;
  },
  methods: {
    updateVal(newVal, property) {
      this.selection[property] = parseInt(newVal);
    },
  },
});
</script>