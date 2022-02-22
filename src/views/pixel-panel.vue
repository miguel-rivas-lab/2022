<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend General

      row
        column(size="100%")
          label(for="grid-size") Grid Size
        column(size="100%")
          row(group, integrate)
            column(size="100%-60")
              input#grid-size.cobalt-blue(
                type="range",
                min="2",
                max="64",
                step="2",
                v-model="selection.gridSize"
              )
            column(size="60")
              p.input-label {{selection.gridSize}}

      row.palette
        column(size="100%")
          label Palette
        template(v-for="color in palette")
          column(size="20%")
            button.shade(
              @click="changeColor(color)",
              :style="`background-color: ${color.rgb}`",
              :class="{ active: color.active }",
              v-nano-tooltip.right="color.label"
            )
</template>

<script lang="ts">
import Vue from "vue";
import { pixelColor } from "../modules/colors";

export default Vue.extend({
  data: () => ({
    selection: {},
    pixelColor,
    palette: {},
  }),
  created() {
    this.selection = this.$store.getters.getPixelSelection;
    Object.values(pixelColor).forEach((el) => {
      this.palette[el.pascalCase] = {
        rgb: el.rgb,
        pascalCase: el.pascalCase,
        label: el.label,
        active: false,
      };
    });
  },
  methods: {
    changeColor(color) {
      this.selection.currentColor.active = false;
      this.palette[color.pascalCase].active = true;
      this.selection.currentColor = color;
    },
  },
});
</script>