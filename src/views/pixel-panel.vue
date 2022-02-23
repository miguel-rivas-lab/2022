<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend General

      row
        column(size="100%")
          row
            column(size="100%")
              btn(text="New Image", color="gold-tips")

      row
        column(size="100%")
          label.btn.flat.gold-tips
            | Open Image
            input(
              type="file",
              ref="file",
              style="display: none",
              @change="openImage()"
            )

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
import { pixelColor } from "../db/wiki-colors";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    selection: {},
    pixelColor: Object.values(pixelColor)
      .sort((a, b) => {
        return a.lightness - b.lightness;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      })
      .sort((a, b) => {
        return b.saturation - a.saturation;
      })
      .sort((a, b) => {
        return a.opacity - b.opacity;
      }),
    palette: {},
  }),
  created() {
    this.selection = this.$store.getters.getPixelSelection;
    Object.values(this.pixelColor).forEach((el) => {
      this.palette[el.spinalCase] = {
        rgb: el.rgb,
        spinalCase: el.spinalCase,
        label: el.label,
        active: false,
      };
    });
  },
  methods: {
    changeColor(color) {
      this.selection.currentColor.active = false;
      this.palette[color.spinalCase].active = true;
      this.selection.currentColor = color;
    },
    openImage() {
      const reader = new FileReader();
      const newFile = this.$refs.file.files[0];
      reader.onload = (res) => {
        this.selection.pixelGrid = JSON.parse(res.target.result).map((y) =>
          y.map((x) => pixelColor[x])
        );
      };
      reader.onerror = (err) => console.log(err);
      reader.readAsText(newFile);
    },
    saveImage() {
      const arr = this.selection.pixelGrid.map((y) =>
        y.map((x) => x.spinalCase)
      );
      const jsData = JSON.stringify(arr);
      const filename = "image.json";

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