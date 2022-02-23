<template lang="pug">
div
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Scene Controllers

      slider#rotation(
        label="Rotation",
        min="-20",
        max="20",
        step="0.01",
        v-on:update-value="updateVal('sceneRotation', $event)",
        :value="selection.sceneRotation"
      )

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.grid }")
            | Grid
            input(type="checkbox", v-model="selection.grid")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.pause }")
            | Pause
            input(type="checkbox", v-model="selection.pause")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.lines }")
            | Lines
            input(type="checkbox", v-model="selection.lines")

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Colors

      template(v-for="color in gColorsDB")
        row.list-palette(group, integrate)
          column(size="100%-40")
            p.input-label {{ color.label }}
          column(size="40")
            span.shade(
              :style="`background-color: ${color.rgb}`",
              v-nano-tooltip.right="`${color.hex}`"
            )
</template>

<script lang="ts">
import Vue from "vue";
import { wikiColors } from "../db/wiki-colors";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    gColorsDB: Object.values(wikiColors)
      .sort((a, b) => {
        return b.saturation - a.saturation;
      })
      .sort((a, b) => {
        return b.lightness - a.lightness;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      }),
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getMeshSelection;
  },
});
</script>