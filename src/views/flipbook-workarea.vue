<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script lang="ts">
import Vue from "vue";
import * as THREE from "three";
import ThreeScene from "../mixins/three-scene";
import StudioLight from "../mixins/three-studio-light";
import h from "../modules/helpers";

export default Vue.extend({
  mixins: [ThreeScene, StudioLight],
  props: {
    pages: { type: Number, default: 0 },
    book: { type: String, default: "" },
  },
  data: () => ({
    minPolarAngle: 75 * h.rad,
    maxPolarAngle: 120 * h.rad,
    minDistance: 7.5,
    maxDistance: 50,
    layers: [],
  }),
  methods: {
    render() {
      this.renderCommon();
      this.exposure();
    },
    buildGeometry() {
      const loader = new THREE.TextureLoader();

      const materials = [...Array(this.pages).keys()].map((index) => {
        return new THREE.MeshLambertMaterial({
          map: loader.load(`img/${this.book}/page${index + 1}.jpg`),
        });
      });

      const geometry = new THREE.PlaneGeometry(3, 3);
      const distance = 1.5;
      for (let c = 0; c < this.pages; c += 2) {
        const frontPlane = new THREE.Mesh(geometry, materials[c]);
        const backPlane = new THREE.Mesh(geometry, materials[c + 1]);
        backPlane.rotation.y = Math.PI;
        backPlane.position.x = distance;
        frontPlane.position.x = distance;

        this.layers[c] = new THREE.Group();
        this.layers[c].add(frontPlane);
        this.layers[c].add(backPlane);
        this.scene.add(this.layers[c]);
      }
    },
    exposure() {
      for (let c = 0; c < this.pages; c += 2) {
        this.layers[c].rotation.y =
          c * ((Math.PI / this.pages) * 2 * this.selection.bookletOpening);
        this.scene.add(this.layers[c]);
      }
    },
  },
  mounted() {
    this.buildScene();
    this.studioLight();
    this.buildGeometry();
    this.render();
  },
});
</script>