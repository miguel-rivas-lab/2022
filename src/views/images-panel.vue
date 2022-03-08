<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('galleries.section.images.panel.controller.legend') }}

      slider#outter-circle-radius(
        :label="$t('galleries.section.images.panel.controller.rotationDelay')",
        min="50",
        max="600",
        step="50",
        v-on:update-value="updateVal('rotationDelay', $event)",
        :value="selection.rotationDelay"
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
    this.selection = this.$store.getters.getProjects3DSelection;
  },
});
</script>