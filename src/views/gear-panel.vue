<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.gearBuilder.panel.properties.legend') }}

      slider#corner-amount(
        :label="$t('canvas.section.gearBuilder.panel.properties.teethAmount')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('cornerAmount', $event)",
        :value="selection.cornerAmount"
      )

      slider#outter-circle-radius(
        :label="$t('canvas.section.gearBuilder.panel.properties.pitchRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('outterCircleRadius', $event)",
        :value="selection.outterCircleRadius"
      )

      slider#inner-circle-radius(
        :label="$t('canvas.section.gearBuilder.panel.properties.baseCircleRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('innerCircleRadius', $event)",
        :value="selection.innerCircleRadius"
      )

      slider#main-perforation-radius(
        :label="$t('canvas.section.gearBuilder.panel.properties.axisRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('mainPerforationRadius', $event)",
        :value="selection.mainPerforationRadius"
      )

      slider#side-perforation-amount(
        :label="$t('canvas.section.gearBuilder.panel.properties.sidePerforationAmount')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationAmount', $event)",
        :value="selection.sidePerforationAmount"
      )

      slider#side-perforation-radius(
        :label="$t('canvas.section.gearBuilder.panel.properties.sidePerforationRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationRadius', $event)",
        :value="selection.sidePerforationRadius"
      )

      slider#side-perforation-distance(
        :label="$t('canvas.section.gearBuilder.panel.properties.sidePerforationDistance')",
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