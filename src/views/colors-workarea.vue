<template lang="pug">
  scroll-area(color="royal-purple")
    container
      ul.img-gallery
        template(v-for="(color, colorIndex) in gColorsDB")
          li(v-bind:key="colorIndex")
            row.swatch.item(vertical)
              column.color(size="200, 200" :style="`background-color: ${color.hex}`")
              column
                h1 {{color.label}}
                p {{color.hex}}
</template>

<script lang="ts">
import Vue from "vue";
import { gColorsDB } from "../modules/colors";

export default Vue.extend({
  data: () => ({
    gColorsDB: gColorsDB,
  }),
});
</script>