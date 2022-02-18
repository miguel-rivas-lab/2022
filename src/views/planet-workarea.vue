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
  data: () => ({
    minPolarAngle: 0 * h.rad,
    maxPolarAngle: 360 * h.rad,
    minDistance: 7.5,
    maxDistance: 50,
  }),
  methods: {
    render() {
      this.renderCommon();
    },
    buildGeometry() {
      const textureLoader = new THREE.TextureLoader();
      const normalTexture = textureLoader.load('textures/normal-map.jpg');

      const _VS = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `;
      const _FS = `
      void main() {
        gl_FragColor = vec4(0.0, 0.0 ,1.0, 1.0);
      }
      `;
      // const shaderMaterial = new THREE.ShaderMaterial({
      //   uniforms: {},
      //   vertexShader: _VS,
      //   fragmentShader: _FS,
      // });

      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x2a4081),
        normalMap: normalTexture,
        metalness: 0.3,
        roughness: 0.2,
      });

      const geometry = new THREE.TetrahedronGeometry(2);
      const pyramid = new THREE.Mesh(geometry, material);
      this.scene.add(pyramid);
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