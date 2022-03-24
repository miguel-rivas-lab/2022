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
      default: 10,
    },
    maxDistance: {
      type: Number,
      default: 200,
    },
  },
  methods: {
    render() {
      this.renderCommon();
    },
    buildGeometry() {
      // ------ cilinder
      const loader = new THREE.TextureLoader();
      const geometry = new THREE.CylinderGeometry(1, 1, 1.75, 45, 1, false);

      const material = new THREE.MeshLambertMaterial({
        map: loader.load(`img/bitmap.png`),
      });
      const cylinder = new THREE.Mesh(geometry, material);
      this.scene.add(cylinder);

      // ------ bar
      const barRadius = 0.005;
      const barGeometry = new THREE.BoxGeometry(
        1 * barRadius,
        3,
        1 * barRadius
      );
      const barMaterial = new THREE.MeshBasicMaterial({ color: 0x505050 });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.position.z = 1.25;
      this.scene.add(bar);
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