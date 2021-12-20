<template>
  <scroll-area color="royal-purple">
    <canvas class="animation-rotate" ref="gear" width="400" height="400">
      no canvas
    </canvas>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getGearSelection;
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      let canvas = this.$refs.gear;
      let size = 400;
      let percent = size / 100;
      let p = canvas.getContext("2d");
      let ang = Math.PI / 180;
      let x = size / 2;
      let y = size / 2;
      let gear_color = "#999";
      let holes_color = "#444";
      /* ----------- Poligon 1 ----------- */
      let px = [];
      let py = [];
      /* ----------- Poligon 2 ----------- */
      let px2 = [];
      let py2 = [];
      /* ----------- Inner Circle ----------- */
      let px3 = [];
      let py3 = [];
      /* ----------- End Vars ----------- */

      p.clearRect(0, 0, size, size);
      for (let kk = 0; kk <= this.selection.cornerAmount - 1; kk++) {
        px[kk] =
          Math.cos((360 / this.selection.cornerAmount) * kk * ang) *
          this.selection.outterCircleRadius *
          percent;
        py[kk] =
          Math.sin((360 / this.selection.cornerAmount) * kk * -ang) *
          this.selection.outterCircleRadius *
          percent;
      }
      /* --------------------- Second Shape --------------------- */
      for (let kk = 0; kk <= this.selection.cornerAmount - 1; kk++) {
        px2[kk] =
          Math.cos(
            (360 / (this.selection.cornerAmount * 2) +
              (360 / this.selection.cornerAmount) * kk) *
              ang
          ) *
          this.selection.innerCircleRadius *
          percent;
        py2[kk] =
          Math.sin(
            (360 / (this.selection.cornerAmount * 2) +
              (360 / this.selection.cornerAmount) * kk) *
              -ang
          ) *
          this.selection.innerCircleRadius *
          percent;
      }
      /* --------------------- Circles --------------------- */
      for (let kk = 0; kk <= this.selection.sidePerforationAmount - 1; kk++) {
        px3[kk] =
          Math.cos((360 / this.selection.sidePerforationAmount) * kk * ang) *
          this.selection.sidePerforationDistance *
          percent;
        py3[kk] =
          Math.sin((360 / this.selection.sidePerforationAmount) * kk * -ang) *
          this.selection.sidePerforationDistance *
          percent;
      }
      p.beginPath();
      p.moveTo(x + px[0], y + py[0]);
      p.lineTo(x + px2[0], y + py2[0]);
      for (let kk = 1; kk <= this.selection.cornerAmount - 1; kk++) {
        p.lineTo(x + px[kk], y + py[kk]);
        p.lineTo(x + px2[kk], y + py2[kk]);
      }
      p.fillStyle = gear_color;
      p.fill();
      p.closePath();
      p.beginPath();
      p.arc(
        x,
        y,
        this.selection.mainPerforationRadius * percent,
        0,
        Math.PI * 2,
        true
      );
      p.fillStyle = holes_color;
      p.fill();
      p.closePath();
      for (let kk = 0; kk <= this.selection.sidePerforationAmount - 1; kk++) {
        p.beginPath();
        p.arc(
          x + px3[kk],
          y + py3[kk],
          this.selection.sidePerforationRadius * percent,
          0,
          Math.PI * 2,
          true
        );
        p.fillStyle = holes_color;
        p.fill();
        p.closePath();
      }
    },
  },
  watch: {
    selection: {
      handler() {
        this.render();
      },
      deep: true,
    },
  },
});
</script>