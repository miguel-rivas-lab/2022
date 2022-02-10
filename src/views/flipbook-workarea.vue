<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

export default Vue.extend({
  props: {
    minPolarAngle: {
      type: Number,
      default: degToRad(75),
    },
    maxPolarAngle: {
      type: Number,
      default: degToRad(120),
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
  data: () => ({
    winHeight: undefined,
    winWidth: undefined,
    controls: undefined,
    scene: undefined,
    camera: undefined,
    renderer: undefined,
    selection: {},
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

      this.controls.minPolarAngle = this.minPolarAngle;
      this.controls.maxPolarAngle = this.maxPolarAngle;

      this.controls.minDistance = this.minDistance;
      this.controls.maxDistance = this.maxDistance;

      this.controls.enablePan = false;

      this.setLight();

      this.$refs.threeScene.appendChild(this.renderer.domElement);
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
    },
    buildGeometry() {
      const loader = new THREE.TextureLoader();
      const pages = 14;

      const materials = [...Array(pages).keys()].map((index) => {
        return new THREE.MeshLambertMaterial({
          map: loader.load(`art/portfolio${index + 1}.jpg`),
        });
      });

      const geometry = new THREE.PlaneGeometry(3, 3);
      const distance = 1.5;
      for(let c=0; c<pages; c+=2){
        const frontPlane = new THREE.Mesh(geometry, materials[c]);
        const backPlane = new THREE.Mesh(geometry, materials[c + 1]);
        backPlane.rotation.y = Math.PI;
        backPlane.position.x = distance;
        frontPlane.position.x = distance;
  
        const layer = new THREE.Group();
        layer.add(frontPlane);
        layer.add(backPlane);
        layer.rotation.y = c * (Math.PI / pages * 2);
        this.scene.add(layer);
      }
    },
  },
  mounted() {
    this.buildScene();
    this.buildGeometry();
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
  },
});
</script>