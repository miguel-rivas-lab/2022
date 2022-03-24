<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script lang="ts">
import Vue from "vue";
import ThreeScene from "../mixins/three-scene";
import StudioLight from "../mixins/three-studio-light";
import h from "../modules/helpers";
import * as THREE from "three";

export default Vue.extend({
  mixins: [ThreeScene, StudioLight],
  props: {
    minPolarAngle: {
      type: Number,
      default: 75 * h.rad,
    },
    maxPolarAngle: {
      type: Number,
      default: 130 * h.rad,
    },
    minDistance: {
      type: Number,
      default: 2.5,
    },
    maxDistance: {
      type: Number,
      default: 200,
    },
  },
  data: () => ({
    len: undefined,
  }),
  methods: {
    render() {
      requestAnimationFrame(this.render);
      this.len.rotation.y += 0.0121;
      this.renderer.render(this.scene, this.camera);
    },
    buildGeometry() {
      // ------ cilinder
      const loader = new THREE.TextureLoader();
      const geometry = new THREE.CylinderGeometry(1, 1, 1.75, 45, 1, false);
      const cilinderColor = new THREE.MeshBasicMaterial({ color: 0x2d5a6c });

      const material = new THREE.MeshLambertMaterial({
        map: loader.load(`img/bitmap.png`),
      });
      const cylinder = new THREE.Mesh(geometry, [
        material,
        cilinderColor,
        cilinderColor,
      ]);
      this.scene.add(cylinder);

      // ------ bar
      const barRadius = 0.0055;
      const barGeometry = new THREE.BoxGeometry(
        1 * barRadius,
        2.25,
        1 * barRadius
      );
      const barMaterial = new THREE.MeshBasicMaterial({
        color: "#000",
        opacity: 0.05,
      });
      const distance = 1;
      const frames = 0.6;
      const rotation = 90;
      this.len = new THREE.Group();
      for (let counter = 0; counter < 80; counter += frames) {
        let bar = new THREE.Mesh(barGeometry, barMaterial);
        let barX = Math.cos((counter - rotation) * h.rad) * distance;
        let barZ = Math.sin((counter - rotation) * -h.rad) * distance;

        bar.position.x = barX;
        bar.position.z = barZ;

        this.len.add(bar);

        let bar2 = new THREE.Mesh(barGeometry, barMaterial);
        let bar2X = Math.cos((counter + rotation) * h.rad) * distance;
        let bar2Z = Math.sin((counter + rotation) * -h.rad) * distance;

        bar2.position.x = bar2X;
        bar2.position.z = bar2Z;

        this.len.add(bar2);
      }
      this.scene.add(this.len);
    },
  },
  mounted() {
    this.buildScene();
    this.studioLight();
    this.buildGeometry(this.mesh);
    this.render();
  },
});
</script>