<template lang="pug">
scroll-area(color="royal-purple")
  container
    ul.img-gallery
      template(v-for="(color, colorIndex) in gColorsDB")
        li(v-bind:key="colorIndex")
          row.swatch.item(vertical)
            column.color(
              size="250, 100",
              :style="`background-color: ${color.hex}`"
            )
            column(size="250")
              h1 {{ color.titleCase }}
              p {{ color.hex }}
</template>

<script lang="ts">
import Vue from "vue";
import { allColors } from "../db/wiki-colors";

export default Vue.extend({
  data: () => ({
    gColorsDB: Object.values(allColors)
      .sort((a, b) => {
        return a.lightness - b.lightness;
      })
      .sort((a, b) => {
        return b.saturation - a.saturation;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      })
      .sort((a, b) => {
        return a.opacity - b.opacity;
      }),
  }),
});
</script>