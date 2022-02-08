<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig" @wheel="zoom">
      <v-layer>
        <v-ellipse :config="avatar.shadow" />

        <v-rect :config="avatar.face" />
        <v-rect :config="avatar.neck" />
        <v-rect v-if="selection.beard" :config="avatar.beard" />
        <v-rect v-if="selection.topHair" :config="avatar.hair" />
        <v-rect v-if="selection.sideHair" :config="avatar.hairSide" />
        <v-rect :config="avatar.chest" />
        <v-arc :config="avatar.armRight" />
        <v-arc :config="avatar.armLeft" />
        <v-rect :config="avatar.footRight" />
        <v-rect :config="avatar.footLeft" />
        <v-line :config="avatar.legRight" />
        <v-line :config="avatar.legLeft" />
        <v-circle :config="avatar.ear" />
        <v-shape :config="avatar.nose" />
        <v-shape :config="avatar.mouth" />
        <v-circle :config="avatar.eyeRight" />
        <v-circle :config="avatar.eyeLeft" />

        <template v-if="selection.pants">
          <v-rect :config="avatar.pants" />
          <v-line :config="avatar.pantsLegRight" />
          <v-line :config="avatar.pantsLegLeft" />
        </template>

        <template v-if="selection.shoes">
          <v-rect :config="avatar.shoeRight" />
          <v-rect :config="avatar.shoeLeft" />
        </template>

        <template v-if="selection.shirt">
          <v-arc :config="avatar.armSleeveRight" />
          <v-arc :config="avatar.armSleeveLeft" />
          <v-rect :config="avatar.shirt" />
        </template>

        <v-rect v-if="selection.belt" :config="avatar.belt" />
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
    selection: {},
    konvaConfig: { width: 0, height: 0, draggable: true },
    stage: undefined,
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
      const earRadius = strokeWidth * 0.5;
      const eyeRadius = strokeWidth * 0.25;
      const noseSize = strokeWidth;

      const smileHeight = parseFloat(this.selection.happiness) || -20; // -20, 0, 20

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
      const armRadius = chestHeight * 0.4;
      const armAngle = 180;
      const beardHeight = faceHeight * 0.4;
      const hairLength = faceHeight * 0.25;
      const hairSideLength = faceHeight * 0.3;
      const hairSideWidth = strokeWidth * 0.75;

      const shirtLength =
        chestHeight * parseFloat(this.selection.shirtLengthPercent);
      const armSleeveLength =
        armAngle * -parseFloat(this.selection.armSleeveLengthPercent);
      const pantsLegLength =
        legHeight * -parseFloat(this.selection.pantsLegLengthPercent);

      const translateX = this.konvaConfig.width * 0.5 - faceWidth * 0.5;
      const translateY =
        this.konvaConfig.height -
        (faceHeight + chestHeight + hipHeight + legHeight + footHeight) * 0.5;

      const body = {
        mouth: {
          sceneFunc: function (context, shape) {
            const mouthX = translateX + faceWidth * 0.5 + strokeWidth * 0.25;
            const mouthY =
              translateY -
              footHeight -
              legHeight -
              hipHeight -
              chestHeight -
              neckHeight -
              faceHeight * 0.25;
            context.beginPath();
            context.moveTo(mouthX - 10, mouthY);
            context.quadraticCurveTo(
              mouthX,
              mouthY + smileHeight,
              mouthX + 10,
              mouthY + 0
            );
            context.fillStrokeShape(shape);
          },
          stroke: this.selection.lipsColor,
          strokeWidth: 4,
        },
        nose: {
          sceneFunc: function (context, shape) {
            const noseX = translateX + faceWidth * 0.5;
            const noseY =
              translateY -
              footHeight -
              legHeight -
              hipHeight -
              chestHeight -
              neckHeight -
              faceHeight * 0.5 -
              noseSize * 0.5;
            context.beginPath();
            context.moveTo(noseX, noseY + 0);
            context.lineTo(noseX + noseSize - 4, noseY + noseSize - 4);
            context.lineTo(noseX, noseY + noseSize);
            context.closePath();
            context.fillStrokeShape(shape);
          },
          fill: this.selection.skinColor2,
        },
        eyeRight: {
          x: translateX + faceWidth * 0.5 + strokeWidth * 1.25,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight * 0.5 -
            strokeWidth * 0.5,
          radius: eyeRadius,
          fill: "#000",
        },
        eyeLeft: {
          x: translateX + faceWidth * 0.5 - strokeWidth,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight * 0.5 -
            strokeWidth * 0.5,
          radius: eyeRadius,
          fill: "#000",
        },
        ear: {
          x: translateX - 2,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight * 0.5,
          radius: earRadius,
          fill: this.selection.skinColor2,
          stroke: this.selection.skinColor,
          strokeWidth: 4,
        },
        face: {
          x: translateX,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight,
          width: faceWidth,
          height: faceHeight,
          fill: this.selection.skinColor,
          cornerRadius: strokeWidth * 2,
        },
        neck: {
          x: translateX + faceWidth * 0.5 - neckWidth * 0.5,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight,
          width: neckWidth,
          height: neckHeight,
          fill: this.selection.skinColor,
          stroke: this.selection.skinColor,
          strokeWidth: 1,
        },
        chest: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight - chestHeight,
          width: chestWidth,
          height: chestHeight + hipHeight,
          fill: this.selection.skinColor,
        },
        armRight: {
          x: translateX + faceWidth * 0.5 + chestWidth * 0.5,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: armAngle,
          rotation: -90,
          fill: this.selection.skinColor,
        },
        armLeft: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y:
            translateY -
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
          fill: this.selection.skinColor,
        },
        legRight: {
          points: [
            translateX +
              faceWidth * 0.5 -
              legWidth * 0.5 +
              feetDistance +
              legWidth * 0.5,
            translateY - footHeight - legHeight,
            translateX +
              faceWidth * 0.5 -
              legWidth * 0.5 +
              feetDistance +
              legWidth * 0.5,
            translateY - footHeight,
          ],
          stroke: this.selection.skinColor,
          strokeWidth: legWidth,
        },
        legLeft: {
          points: [
            translateX +
              faceWidth * 0.5 +
              legWidth * 0.5 -
              feetDistance -
              legWidth * 0.5,
            translateY - footHeight - legHeight,
            translateX +
              faceWidth * 0.5 +
              legWidth * 0.5 -
              feetDistance -
              legWidth * 0.5,
            translateY - footHeight,
          ],
          stroke: this.selection.skinColor,
          strokeWidth: legWidth,
        },
        footRight: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 + feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.skinColor,
        },
        footLeft: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 - feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.skinColor,
        },
        beard: {
          x: translateX,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            beardHeight,
          width: faceWidth,
          height: beardHeight,
          fill: this.selection.beardColor,
          cornerRadius: [0, 0, strokeWidth * 2, strokeWidth * 2],
        },
        hair: {
          x: translateX,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight,
          width: faceWidth,
          height: hairLength,
          fill: this.selection.hairColor,
          cornerRadius: [strokeWidth * 2, strokeWidth * 2, 0, 0],
        },
        hairSide: {
          x: translateX - hairSideWidth * 0.25,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight -
            neckHeight -
            faceHeight +
            hairSideLength * 0.5,
          width: hairSideWidth,
          height: hairSideLength,
          fill: this.selection.hairSideColor,
          cornerRadius: strokeWidth * 2,
        },
      };

      const clothes = {
        shirt: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight - chestHeight,
          width: chestWidth,
          height: shirtLength,
          fill: this.selection.shirtColor,
          stroke: this.selection.shirtColor,
          strokeWidth: shirtLength > 0 ? 2 : 0,
        },
        armSleeveRight: {
          x: translateX + faceWidth * 0.5 + chestWidth * 0.5,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: -armSleeveLength,
          rotation: -90,
          fill: this.selection.armSleeveColor,
          stroke: this.selection.armSleeveColor,
          strokeWidth: armSleeveLength > 0 ? 1 : 0,
        },
        armSleeveLeft: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y:
            translateY -
            footHeight -
            legHeight -
            hipHeight -
            chestHeight +
            armRadius,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: armSleeveLength,
          clockwise: true,
          rotation: -90,
          fill: this.selection.armSleeveColor,
          stroke: this.selection.armSleeveColor,
          strokeWidth: armSleeveLength < 0 ? 1 : 0,
        },
         belt: {
          x: translateX + faceWidth * 0.5 - hipWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight,
          width: hipWidth,
          height: strokeWidth * 0.5,
          fill: this.selection.beltColor,
          stroke: this.selection.beltColor,
          strokeWidth: 1,
        },
        pants: {
          x: translateX + faceWidth * 0.5 - hipWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight,
          width: hipWidth,
          height: hipHeight,
          fill: this.selection.pantsColor,
          stroke: this.selection.pantsColor,
          strokeWidth: 1,
        },
        pantsLegRight: {
          points: [
            translateX +
              faceWidth * 0.5 -
              legWidth * 0.5 +
              feetDistance +
              legWidth * 0.5,
            translateY - footHeight - legHeight,
            translateX +
              faceWidth * 0.5 -
              legWidth * 0.5 +
              feetDistance +
              legWidth * 0.5,
            translateY - footHeight - legHeight - pantsLegLength,
          ],
          stroke: this.selection.pantsLegColor,
          strokeWidth: legWidth + parseFloat(this.selection.pantsFit),
        },
        pantsLegLeft: {
          points: [
            translateX +
              faceWidth * 0.5 +
              legWidth * 0.5 -
              feetDistance -
              legWidth * 0.5,
            translateY - footHeight - legHeight,
            translateX +
              faceWidth * 0.5 +
              legWidth * 0.5 -
              feetDistance -
              legWidth * 0.5,
            translateY - footHeight - legHeight - pantsLegLength,
          ],
          stroke: this.selection.pantsLegColor,
          strokeWidth: legWidth + parseFloat(this.selection.pantsFit),
        },
        shoeRight: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 + feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.shoeColor,
          stroke: this.selection.shoeColor,
          strokeWidth: 1,
        },
        shoeLeft: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 - feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.shoeColor,
          stroke: this.selection.shoeColor,
          strokeWidth: 1,
        },
      };

      return {
        ...body,
        ...clothes,
        shadow: {
          x: translateX + faceWidth * 0.5,
          y: translateY - footHeight * 0.5,
          radiusX: chestWidth + armRadius - strokeWidth * 3,
          radiusY: footHeight * 1.5,
          fill: "rgba(0,0,0,0.05)",
        },
      };
    },
  },
  created() {
    this.selection = this.$store.getters.getAvatarSelection;
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
    },
    zoom(event) {
      const scale = 0.75;
      const maxZoom = 600 / 100;
      const minZoom = 50 / 100;

      event.evt.preventDefault();
      let oldScale = this.stage.scaleX();

      let mousePointTo = {
        x:
          this.stage.getPointerPosition().x / oldScale -
          this.stage.x() / oldScale,
        y:
          this.stage.getPointerPosition().y / oldScale -
          this.stage.y() / oldScale,
      };

      let newScale = event.evt.deltaY > 0 ? oldScale * scale : oldScale / scale;

      newScale = newScale > maxZoom ? maxZoom : newScale;
      newScale = newScale < minZoom ? minZoom : newScale;

      this.stage.scale({ x: newScale, y: newScale });

      let newPos = {
        x:
          -(mousePointTo.x - this.stage.getPointerPosition().x / newScale) *
          newScale,
        y:
          -(mousePointTo.y - this.stage.getPointerPosition().y / newScale) *
          newScale,
      };
      this.stage.position(newPos);
      this.stage.batchDraw();
    },
  },
});
</script>