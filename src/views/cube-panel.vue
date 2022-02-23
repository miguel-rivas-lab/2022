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
      row
        column(size="100%")
          ul.standard
            template(v-for="(color, colorIndex) in gColorsDB")
              li(v-bind:key="colorIndex")
                | {{ colorIndex }}: {{ color.label }}
</template>

<script lang="ts">
import Vue from "vue";
import wikiColors from "../db/wiki-colors";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    gColorsDB: wikiColors,
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getMeshSelection;
  },
});
</script>