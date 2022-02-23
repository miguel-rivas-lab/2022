<template>
  <div ref="konvaContainer">
    <v-stage ref="stage" :config="konvaConfig" @wheel="zoom" @click="saveImg()">
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
        <v-circle :config="avatar.nippleRight" />
        <v-circle :config="avatar.nippleLeft" />

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
          <v-rect v-if="selection.buttons" :config="avatar.buttons" />
          <v-shape v-if="selection.rightPocket" :config="avatar.pocketRight" />
          <v-shape v-if="selection.leftPocket" :config="avatar.pocketLeft" />
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
      const faceHeight = strokeWidth * 7 * parseFloat(this.selection.height);
      const earRadius = strokeWidth * 0.5;
      const eyeRadius = strokeWidth * 0.25;
      const noseSize = strokeWidth;

      const smileHeight = parseFloat(this.selection.happiness); // -20, 0, 20

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
      const buttonsWidth = strokeWidth * 0.35;

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

      const faceY =
        translateY -
        footHeight -
        legHeight -
        hipHeight -
        chestHeight -
        neckHeight -
        faceHeight;

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

      const mouthX = translateX + faceWidth * 0.5 + strokeWidth * 0.25;
      const mouthY =
        translateY -
        footHeight -
        legHeight -
        hipHeight -
        chestHeight -
        neckHeight -
        faceHeight * 0.25;

      const nipplesY =
        translateY -
        footHeight -
        legHeight -
        hipHeight -
        chestHeight * 0.65 -
        strokeWidth * 0.5;

      const eyesY =
        translateY -
        footHeight -
        legHeight -
        hipHeight -
        chestHeight -
        neckHeight -
        faceHeight * 0.5 -
        strokeWidth * 0.5;

      const armsY =
        translateY -
        footHeight -
        legHeight -
        hipHeight -
        chestHeight +
        armRadius;

      const legsY = [
        translateY - footHeight - legHeight,
        translateY - footHeight,
      ];
      const legRightX =
        translateX +
        faceWidth * 0.5 -
        legWidth * 0.5 +
        feetDistance +
        legWidth * 0.5;
      const legLeftX =
        translateX +
        faceWidth * 0.5 +
        legWidth * 0.5 -
        feetDistance -
        legWidth * 0.5;

      const pocketWidth = strokeWidth * 1.25;
      const pocketHeight = strokeWidth * 1.75;
      const pocketX = translateX + faceWidth * 0.5 - pocketWidth * 0.5;
      const pocketY =
        translateY - footHeight - legHeight - hipHeight - chestHeight * 0.8;

      const body = {
        mouth: {
          sceneFunc: function (context, shape) {
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
          stroke: this.selection.lipsColor.hex8,
          strokeWidth: 4,
        },
        nose: {
          sceneFunc: function (context, shape) {
            context.beginPath();
            context.moveTo(noseX, noseY + 0);
            context.lineTo(noseX + noseSize - 4, noseY + noseSize - 4);
            context.lineTo(noseX, noseY + noseSize);
            context.closePath();
            context.fillStrokeShape(shape);
          },
          fill: this.selection.skinColor2.hex8,
        },
        nippleRight: {
          x: translateX + faceWidth * 0.5 + strokeWidth * 1.75,
          y: nipplesY,
          radius: eyeRadius,
          fill: this.selection.skinColor2.hex8,
        },
        nippleLeft: {
          x: translateX + faceWidth * 0.5 - strokeWidth * 1.5,
          y: nipplesY,
          radius: eyeRadius,
          fill: this.selection.skinColor2.hex8,
        },
        eyeRight: {
          x: translateX + faceWidth * 0.5 + strokeWidth * 1.25,
          y: eyesY,
          radius: eyeRadius,
          fill: "#000",
        },
        eyeLeft: {
          x: translateX + faceWidth * 0.5 - strokeWidth,
          y: eyesY,
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
          fill: this.selection.skinColor2.hex8,
          stroke: this.selection.skinColor.hex8,
          strokeWidth: 4,
        },
        face: {
          x: translateX,
          y: faceY,
          width: faceWidth,
          height: faceHeight,
          fill: this.selection.skinColor.hex8,
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
          fill: this.selection.skinColor.hex8,
          stroke: this.selection.skinColor.hex8,
          strokeWidth: 1,
        },
        chest: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight - chestHeight,
          width: chestWidth,
          height: chestHeight + hipHeight,
          fill: this.selection.skinColor.hex8,
        },
        armRight: {
          x: translateX + faceWidth * 0.5 + chestWidth * 0.5,
          y: armsY,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: armAngle,
          rotation: -90,
          fill: this.selection.skinColor.hex8,
        },
        armLeft: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y: armsY,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: -armAngle,
          clockwise: true,
          rotation: -90,
          fill: this.selection.skinColor.hex8,
        },
        legRight: {
          points: [legRightX, legsY[0], legRightX, legsY[1]],
          stroke: this.selection.skinColor.hex8,
          strokeWidth: legWidth,
        },
        legLeft: {
          points: [legLeftX, legsY[0], legLeftX, legsY[1]],
          stroke: this.selection.skinColor.hex8,
          strokeWidth: legWidth,
        },
        footRight: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 + feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.skinColor.hex8,
        },
        footLeft: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 - feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.skinColor.hex8,
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
          fill: this.selection.beardColor.hex8,
          cornerRadius: [0, 0, strokeWidth * 2, strokeWidth * 2],
        },
        hair: {
          x: translateX,
          y: faceY - 1,
          width: faceWidth,
          height: hairLength,
          fill: this.selection.hairColor.hex8,
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
          fill: this.selection.hairSideColor.hex8,
          cornerRadius: strokeWidth * 2,
        },
      };

      const clothes = {
        shirt: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight - chestHeight,
          width: chestWidth,
          height: shirtLength,
          fill: this.selection.shirtColor.hex8,
          stroke: this.selection.shirtColor.hex8,
          strokeWidth: shirtLength > 0 ? 1 : 0,
        },
        buttons: {
          x: translateX + faceWidth * 0.5 - buttonsWidth * 0.25,
          y: translateY - footHeight - legHeight - hipHeight - chestHeight,
          width: buttonsWidth,
          height: shirtLength,
          fill: this.selection.pocketColor.hex8,
        },
        armSleeveRight: {
          x: translateX + faceWidth * 0.5 + chestWidth * 0.5,
          y: armsY,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: -armSleeveLength,
          rotation: -90,
          fill: this.selection.armSleeveColor.hex8,
          stroke: this.selection.armSleeveColor.hex8,
          strokeWidth: armSleeveLength > 0 ? 1 : 0,
        },
        armSleeveLeft: {
          x: translateX + faceWidth * 0.5 - chestWidth * 0.5,
          y: armsY,
          innerRadius: armRadius - strokeWidth,
          outerRadius: armRadius,
          angle: armSleeveLength,
          clockwise: true,
          rotation: -90,
          fill: this.selection.armSleeveColor.hex8,
          stroke: this.selection.armSleeveColor.hex8,
          strokeWidth: armSleeveLength < 0 ? 1 : 0,
        },
        belt: {
          x: translateX + faceWidth * 0.5 - hipWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight,
          width: hipWidth,
          height: strokeWidth * 0.25,
          fill: this.selection.beltColor.hex8,
          stroke: this.selection.beltColor.hex8,
          strokeWidth: 1,
        },
        pants: {
          x: translateX + faceWidth * 0.5 - hipWidth * 0.5,
          y: translateY - footHeight - legHeight - hipHeight,
          width: hipWidth,
          height: hipHeight,
          fill: this.selection.pantsColor.hex8,
          stroke: this.selection.pantsColor.hex8,
          strokeWidth: 1,
        },
        pantsLegRight: {
          points: [
            legRightX,
            legsY[0],
            legRightX,
            legsY[1] - legHeight - pantsLegLength,
          ],
          stroke: this.selection.pantsLegColor.hex8,
          strokeWidth: legWidth + parseFloat(this.selection.pantsFit),
        },
        pantsLegLeft: {
          points: [
            legLeftX,
            legsY[0],
            legLeftX,
            legsY[1] - legHeight - pantsLegLength,
          ],
          stroke: this.selection.pantsLegColor.hex8,
          strokeWidth: legWidth + parseFloat(this.selection.pantsFit),
        },
        shoeRight: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 + feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.shoeColor.hex8,
          stroke: this.selection.shoeColor.hex8,
          strokeWidth: 1,
        },
        shoeLeft: {
          x: translateX + faceWidth * 0.5 - legWidth * 0.5 - feetDistance,
          y: translateY - footHeight,
          width: footWidth,
          height: footHeight,
          fill: this.selection.shoeColor.hex8,
          stroke: this.selection.shoeColor.hex8,
          strokeWidth: 1,
        },
        pocketRight: {
          sceneFunc: function (context, shape) {
            const moveX = pocketWidth * 1.35;
            context.beginPath();
            context.moveTo(moveX + pocketX, pocketY + 0);
            context.lineTo(moveX + pocketX + pocketWidth, pocketY + 0);
            context.lineTo(
              moveX + pocketX + pocketWidth,
              pocketY + pocketHeight * 0.75
            );
            context.lineTo(
              moveX + pocketX + pocketWidth * 0.5,
              pocketY + pocketHeight
            );
            context.lineTo(moveX + pocketX + 0, pocketY + pocketHeight * 0.75);
            context.closePath();
            context.fillStrokeShape(shape);
          },
          fill: this.selection.pocketColor.hex8,
        },
        pocketLeft: {
          sceneFunc: function (context, shape) {
            const moveX = -pocketWidth * 1.15;
            context.beginPath();
            context.moveTo(moveX + pocketX, pocketY + 0);
            context.lineTo(moveX + pocketX + pocketWidth, pocketY + 0);
            context.lineTo(
              moveX + pocketX + pocketWidth,
              pocketY + pocketHeight * 0.75
            );
            context.lineTo(
              moveX + pocketX + pocketWidth * 0.5,
              pocketY + pocketHeight
            );
            context.lineTo(moveX + pocketX + 0, pocketY + pocketHeight * 0.75);
            context.closePath();
            context.fillStrokeShape(shape);
          },
          fill: this.selection.pocketColor.hex8,
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
    saveImg() {
      // this.stage.toDataURL({
      //   pixelRatio: 2,
      // });
    },
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.konvaConfig.width = window.innerWidth - (margin - 50) - 100;
      this.konvaConfig.height = window.innerHeight;
    },
    zoom(event) {
      const scale = 0.75;
      const maxZoom = 600 / 100;
      const minZoom = 1 / 100;

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
    },
  },
});
</script>