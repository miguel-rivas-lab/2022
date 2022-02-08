<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig">
      <v-layer>
        <v-ellipse :config="avatar.shadow" />

        <v-rect :config="avatar.face" />
        <v-rect :config="avatar.neck" />
        <v-rect :config="avatar.chest" />
        <v-arc :config="avatar.armRight" />
        <v-arc :config="avatar.armLeft" />
        <v-rect :config="avatar.hip" />
        <v-rect :config="avatar.footRight" />
        <v-rect :config="avatar.footLeft" />
        <v-line :config="avatar.legRight" />
        <v-line :config="avatar.legLeft" />

        <v-arc :config="avatar.armSleeveRight" />
        <v-arc :config="avatar.armSleeveLeft" />
        <v-rect :config="avatar.pants" />
        <v-line :config="avatar.pantsLegRight" />
        <v-line :config="avatar.pantsLegLeft" />
        <v-rect :config="avatar.shirt" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    skinColor: "#daad7f",
    armSleeveColor: "#939393",
    pantsLegColor: "#939393",
    pantsColor: "#939393",
    shirtColor: "#333",
    armSleeveLenghtPercent: 20 / 100,
    shirtLenghtPercent: 40 / 100,
    pantsLegLenghtPercent: 100 / 100,
    konvaConfig: { width: 0, height: 0 },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
    }),
    avatar() {
      const strokeWidth = 20;

      const faceWidth = strokeWidth * 5;
      const faceHeight = strokeWidth * 7;

      const translateX = this.konvaConfig.width / 2 - faceWidth / 2;
      const translateY = -50;

      const neckWidth = strokeWidth;
      const neckHeight = strokeWidth;
      const chestWidth = faceWidth * 1.15;
      const chestHeight = faceHeight * 1.45;
      const hipWidth = chestWidth;
      const hipHeight = faceHeight * 0.35;
      const legWidth = strokeWidth * 1.25;
      const legHeight = faceHeight * 1.5;
      const footWidth = legWidth * 2;
      const footHeight = strokeWidth;
      const feetDistance = strokeWidth * 1.5;
      const armRadius = chestHeight / 2;
      const armAngle = 180;

      const shirtLenght = chestHeight * this.shirtLenghtPercent;

      const armSleeveLenght = armAngle * -this.armSleeveLenghtPercent;
      const pantsLegLenght = legHeight * -this.pantsLegLenghtPercent;

      const body = {
        face: {
          x: translateX + 0,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight,
          width: faceWidth,
          height: faceHeight,
          fill: this.skinColor,
          cornerRadius: strokeWidth * 2,
        },
        neck: {
          x: translateX + faceWidth / 2 - neckWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight,
          width: neckWidth,
          height: neckHeight,
          fill: this.skinColor,
        },
        chest: {
          x: translateX + faceWidth / 2 - chestWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight,
          width: chestWidth,
          height: chestHeight,
          fill: this.skinColor,
        },
        armRight: {
          x: translateX + faceWidth / 2 + chestWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: armAngle,
          rotation: -90,
          fill: this.skinColor,
        },
        armLeft: {
          x: translateX + faceWidth / 2 - chestWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: -armAngle,
          clockwise: true,
          rotation: -90,
          fill: this.skinColor,
        },
        hip: {
          x: translateX + faceWidth / 2 - hipWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight,
          width: hipWidth,
          height: hipHeight,
          fill: this.skinColor,
        },
        legRight: {
          points: [
            translateX +
              faceWidth / 2 -
              legWidth / 2 +
              feetDistance +
              legWidth / 2,
            translateY + this.konvaConfig.height - footHeight - legHeight,
            translateX +
              faceWidth / 2 -
              legWidth / 2 +
              feetDistance +
              legWidth / 2,
            translateY + this.konvaConfig.height - footHeight,
          ],
          stroke: this.skinColor,
          strokeWidth: legWidth,
        },
        legLeft: {
          points: [
            translateX +
              faceWidth / 2 +
              legWidth / 2 -
              feetDistance -
              legWidth / 2,
            translateY + this.konvaConfig.height - footHeight - legHeight,
            translateX +
              faceWidth / 2 +
              legWidth / 2 -
              feetDistance -
              legWidth / 2,
            translateY + this.konvaConfig.height - footHeight,
          ],
          stroke: this.skinColor,
          strokeWidth: legWidth,
        },
        footRight: {
          x: translateX + faceWidth / 2 - legWidth / 2 + feetDistance,
          y: translateY + this.konvaConfig.height - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.skinColor,
        },
        footLeft: {
          x: translateX + faceWidth / 2 - legWidth / 2 - feetDistance,
          y: translateY + this.konvaConfig.height - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.skinColor,
        },
      };

      const clothes = {
        shirt: {
          x: translateX + faceWidth / 2 - chestWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight,
          width: chestWidth,
          height: shirtLenght,
          fill: this.shirtColor,
          stroke: this.shirtColor,
          strokeWidth: 2,
        },
        armSleeveRight: {
          x: translateX + faceWidth / 2 + chestWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: -armSleeveLenght,
          rotation: -90,
          fill: this.armSleeveColor,
          stroke: this.armSleeveColor,
          strokeWidth: 1,
        },
        armSleeveLeft: {
          x: translateX + faceWidth / 2 - chestWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: armSleeveLenght,
          clockwise: true,
          rotation: -90,
          fill: this.armSleeveColor,
          stroke: this.armSleeveColor,
          strokeWidth: 1,
        },
        pants: {
          x: translateX + faceWidth / 2 - hipWidth / 2,
          y:
            translateY +
            this.konvaConfig.height -
            footHeight -
            legHeight -
            hipHeight,
          width: hipWidth,
          height: hipHeight,
          fill: this.pantsColor,
          stroke: this.pantsColor,
          strokeWidth: 1,
        },
        pantsLegRight: {
          points: [
            translateX +
              faceWidth / 2 -
              legWidth / 2 +
              feetDistance +
              legWidth / 2,
            translateY + this.konvaConfig.height - footHeight - legHeight,
            translateX +
              faceWidth / 2 -
              legWidth / 2 +
              feetDistance +
              legWidth / 2,
            translateY +
              this.konvaConfig.height -
              footHeight -
              legHeight -
              pantsLegLenght,
          ],
          stroke: this.pantsLegColor,
          strokeWidth: legWidth,
        },
        pantsLegLeft: {
          points: [
            translateX +
              faceWidth / 2 +
              legWidth / 2 -
              feetDistance -
              legWidth / 2,
            translateY + this.konvaConfig.height - footHeight - legHeight,
            translateX +
              faceWidth / 2 +
              legWidth / 2 -
              feetDistance -
              legWidth / 2,
            translateY +
              this.konvaConfig.height -
              footHeight -
              legHeight -
              pantsLegLenght,
          ],
          stroke: this.pantsLegColor,
          strokeWidth: legWidth,
        },
      };

      return {
        ...body,
        ...clothes,
        shadow: {
          x: translateX + faceWidth / 2,
          y: translateY + this.konvaConfig.height - footHeight / 2,
          radiusX: chestWidth + armRadius,
          radiusY: footHeight * 1.5,
          fill: "rgba(0,0,0,0.05)",
        },
      };
    },
  },
  created() {
    // this.selection = this.$store.getters.getLocationSelection;
    window.addEventListener("resize", this.updateCanvas);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.updateCanvas();
  },
  methods: {
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.konvaConfig.width = window.innerWidth - (margin - 50) - 100;
      this.konvaConfig.height = window.innerHeight;
      this.dragging();
    },
  },
});
</script>