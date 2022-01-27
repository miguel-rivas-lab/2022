<template>
  <div class="three-scene" ref="threeScene" />
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

export default Vue.extend({
  data: () => ({
    winHeight: undefined,
    winWidth: undefined,
    controls: undefined,
    scene: undefined,
    camera: undefined,
    renderer: undefined,
    linesGroup: undefined,
    selection: {},
    // loader: undefined,
    sceneControls: function () {
      this.zoom = 100;
    },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
    panelsSize() {
      return this.panel ? 350 : 50;
    },
    mesh() {
      return this.selection.object;
    },
  },
  methods: {
    buildScene() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        15,
        this.winWidth / this.winHeight,
        1,
        1000
      );
      this.camera.position.set(15, 2.5, 0);
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.controls.minPolarAngle = degToRad(75);
      this.controls.maxPolarAngle = degToRad(120);

      this.controls.minDistance = 7.5;
      this.controls.maxDistance = 25;

      this.controls.enablePan = false;

      this.setLight();

      this.$refs.threeScene.appendChild(this.renderer.domElement);

      const size = 60;
      const divisions = 25;
      this.gridHelper = new THREE.GridHelper(size, divisions);
    },
    setLight() {
      const horizontalLight = new THREE.AmbientLight(0xffffff, 0.6);
      const pointLight = new THREE.PointLight(0xffffff, 0.5);
      const pointLight2 = new THREE.PointLight(0xffffff, 0.15);
      const pointLight3 = new THREE.PointLight(0xffffff, 0.25);
      const pointLight4 = new THREE.PointLight(0xffffff, 0.25);

      pointLight.position.set(0, 700, 100);
      pointLight2.position.set(100, 100, 0);
      pointLight3.position.set(0, 0, -500);
      pointLight4.position.set(-100, -100, 0);

      this.scene.add(
        horizontalLight,
        pointLight,
        pointLight2,
        pointLight3,
        pointLight4
      );
    },
    resizeWindow() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();
    },

    render() {
      if (this.controls) {
        this.controls.update();
      }

      requestAnimationFrame(this.render);
      if (!this.selection.rotateY) {
        this.scene.rotation.y += this.selection.sceneRotation * 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      this.selection.grid
        ? this.scene.add(this.gridHelper)
        : this.scene.remove(this.gridHelper);
    },
    buildGeometry(object) {
      const loader = new GLTFLoader();

      (function (scene) {
        loader.load(
          `3d/${object}.glb`,
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
    updateSpeed(newVal) {
      this.selection.sceneRotation = parseInt(newVal);
    },
  },
  mounted() {
    this.buildScene();
    this.buildGeometry(this.mesh);
    this.render();
  },
  created() {
    this.selection = this.$store.getters.getMeshSelection;
    window.addEventListener("resize", this.resizeWindow);
  },
  beforeDestroy() {
    this.render = () => {
      // remove render loop
    };
    window.removeEventListener("resize", this.resizeWindow);
  },
  watch: {
    panel: function () {
      this.resizeWindow();
    },
    mesh: function () {
      this.buildGeometry(this.mesh);
    },
  },
});
</script>