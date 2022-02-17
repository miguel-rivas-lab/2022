<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script lang="ts">
import Vue from "vue";
import * as THREE from "three";
import ThreeScene from "../mixins/three-scene";
import StudioLight from "../mixins/three-studio-light";

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

export default Vue.extend({
  mixins: [ThreeScene, StudioLight],
  data: () => ({
    minPolarAngle: degToRad(75),
    maxPolarAngle: degToRad(120),
    minDistance: 7.5,
    maxDistance: 50,
  }),
  methods: {
    render() {
      this.renderCommon();
      // if (this.controls) {
      //   this.controls.update();
      // }

      // requestAnimationFrame(this.render);
      // if (!this.selection.rotateY) {
      //   this.scene.rotation.y += this.selection.sceneRotation * 0.01;
      // }
      // this.renderer.render(this.scene, this.camera);
    },
    buildGeometry() {
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
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: _VS,
        fragmentShader: _FS,
      });

      const geometry = new THREE.TetrahedronGeometry(2);
      const pyramid = new THREE.Mesh(geometry, shaderMaterial);
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