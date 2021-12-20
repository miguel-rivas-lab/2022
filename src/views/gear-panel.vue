<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Gear Properties</legend>
        <number-input
          id="corner-amount"
          :value="selection.cornerAmount"
          label="Teeth Amount"
          v-on:update-value="updateVal($event, 'cornerAmount')"
        />
        <number-input
          id="outter-circle-radius"
          :value="selection.outterCircleRadius"
          label="Pitch Radius"
          v-on:update-value="updateVal($event, 'outterCircleRadius')"
        />
        <number-input
          id="inner-circle-radius"
          :value="selection.innerCircleRadius"
          label="Base Circle Radius"
          v-on:update-value="updateVal($event, 'innerCircleRadius')"
        />
        <number-input
          id="main-perforation-radius"
          :value="selection.mainPerforationRadius"
          label="Axis Radius"
          v-on:update-value="updateVal($event, 'mainPerforationRadius')"
        />
        <number-input
          id="side-perforation-amount"
          :value="selection.sidePerforationAmount"
          label="Side Perforation Amount"
          v-on:update-value="updateVal($event, 'sidePerforationAmount')"
        />
        <number-input
          id="side-perforation-radius"
          :value="selection.sidePerforationRadius"
          label="Side Perforation Radius"
          v-on:update-value="updateVal($event, 'sidePerforationRadius')"
        />
        <number-input
          id="side-perforation-distance"
          :value="selection.sidePerforationDistance"
          label="Side Perforation Distance"
          v-on:update-value="updateVal($event, 'sidePerforationDistance')"
        />
      </column>
    </row>
  </scroll-area>
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
  }
});
</script>