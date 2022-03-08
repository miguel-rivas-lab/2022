<template lang="pug">
row.row-block(tag="fieldset")
  column(size="100%")
    legend {{ $t('three.panel.controller.legend') }}

    slider#open-book(
      :label="$t('three.panel.controller.open')",
      min="0.01",
      max="1",
      step="0.01",
      v-on:update-value="updateVal('bookletOpening', $event)",
      :value="selection.bookletOpening"
    )

    slider#rotation(
      :label="$t('three.panel.controller.rotation')",
      min="-20",
      max="20",
      step="0.01",
      v-on:update-value="updateVal('sceneRotation', $event)",
      :value="selection.sceneRotation"
    )

    row
      column(size="100%")
        label.btn.flat.charcoal(:class="{ active: selection.grid }")
          | {{ $t('three.panel.controller.grid') }}
          input(type="checkbox", v-model="selection.grid")

    row
      column(size="100%")
        label.btn.flat.charcoal(:class="{ active: selection.pause }")
          | {{ $t('three.panel.controller.pause') }}
          input(type="checkbox", v-model="selection.pause")
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
    this.selection = this.$store.getters.getMeshSelection;
  },
});
</script>