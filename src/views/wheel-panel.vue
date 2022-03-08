<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.colorWheel.panel.general.legend') }}

      slider#colors(
        :label="$t('canvas.section.colorWheel.panel.general.colors')",
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
});
</script>