<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script lang="ts">
import Vue from "vue";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ThreeScene from "../mixins/three-scene";
import StudioLight from "../mixins/three-studio-light";
import h from "../modules/helpers";

export default Vue.extend({
  mixins: [ThreeScene, StudioLight],
  props: {
    mesh: {
      type: String,
      default: "",
    },
    minPolarAngle: {
      type: Number,
      default: 75 * h.rad,
    },
    maxPolarAngle: {
      type: Number,
      default: 120 * h.rad,
    },
    minDistance: {
      type: Number,
      default: 7.5,
    },
    maxDistance: {
      type: Number,
      default: 25,
    },
  },
  methods: {
    render() {
      this.renderCommon();
    },
    buildGeometry(mesh) {
      const loader = new GLTFLoader();

      (function (scene) {
        loader.load(
          `3d/${mesh}.glb`,
          function (gltf) {
            scene.add(gltf.scene);
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );
      })(this.scene);
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