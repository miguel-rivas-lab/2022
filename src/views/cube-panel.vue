<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Cube Controllers

      number-input#outter-circle-radius(
        :value="selection.cubeRotation",
        label="Rotation",
        v-on:update-value="updateSpeed($event)"
      )

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.pause }")
            | Pause
            input(type="checkbox", v-model="selection.pause")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.grid }")
            | Grid
            input(type="checkbox", v-model="selection.grid")

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

export default Vue.extend({
  data: () => ({
    gColorsDB: wikiColors,
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getCubeSelection;
  },
  methods: {
    updateSpeed(newVal) {
      this.selection.cubeRotation = parseInt(newVal);
    },
  },
});
</script>