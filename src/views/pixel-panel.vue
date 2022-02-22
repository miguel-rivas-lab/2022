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
              p.input-label {{ selection.gridSize }}

      row
        column(size="100%")
          row
            column(size="100%")
              btn(text="New Image", color="gold-tips")

      row
        column(size="100%")
          label.btn.flat.gold-tips
            | Open Image
            input(type="file", ref="file", style="display: none")

      row
        column(size="100%")
          row
            column(size="100%")
              btn(text="Save Image", color="gold-tips", @click="saveImage()")

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
    openImage() {
    },
    saveImage() {
      const arr = this.selection.pixelGrid.map((y) =>
        y.map((x) => x.pascalCase)
      );
      const jsData = JSON.stringify(arr);
      const filename = "image.js";

      let blob = new Blob([jsData], { type: "text/plain;charset=utf-8;" });
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let link = document.createElement("a");
        if (link.download !== undefined) {
          let url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", filename);
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    },
  },
});
</script>