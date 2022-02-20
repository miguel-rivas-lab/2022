<template lang="pug">
scroll-area(color="royal-purple")
  container
    .pixel-grid
      template(v-for="(row, y) in pixelGrid")
        div(v-bind:key="y")
          template(v-for="(id, x) in row")
            button(
              v-bind:key="x",
              :style="`background-color: ${getValue(id)}`",
              @click="paintColor(x, y, $event)"
            ) {{ getText(id) }}
</template>

<script lang="ts">
import Vue from "vue";

enum pE {
  empty = 10,
  black,
  white,
}

const p = {
  empty: { text: "", value: "" },
  black: { text: "0", value: "#222222" },
  white: { text: "1", value: "#44ff11" },
};

const gridSize = 32;

export default Vue.extend({
  components: {},
  data: () => ({
    currentColor: pE.white,
    pixelGrid: [...new Array(gridSize)].map((el) => new Array(gridSize)),
  }),
  created() {
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        this.pixelGrid[y][x] = pE.empty;
      }
    }
  },
  methods: {
    paintColor(x, y, event) {
      const button = event.target;
      button.innerHTML = this.getText(this.currentColor);
      button.style.backgroundColor = this.getValue(this.currentColor);
      this.pixelGrid[y][x] = this.currentColor;
    },
    getValue(id) {
      return p[pE[id]].value;
    },
    getText(id) {
      return p[pE[id]].text;
    },
  },
});
</script>