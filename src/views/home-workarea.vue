<template>
  <div>
    <renderer :size="{ w: winHeight, h: winWidth }">
      <scene>
        <camera :position="{ z: 15 }"></camera>
        <mesh name="CubeExample">
          <geometry type="Box" :args="[1, 10, 1]" />
          <material type="MeshBasic" />
        </mesh>
      </scene>
    </renderer>

    <div class="cover" v-if="selection.cover">
      <template v-if="user.lastName">
        <h1 v-html="`${user.middleName} ${user.lastName}`" />
        <h2 v-html="user.title" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default Vue.extend({
  data: () => ({
    controls: undefined,
    scene: undefined,
    camera: undefined,
    renderer: undefined,
    sceneCtrl: undefined,
    linesGroup: undefined,
    selection: {},
    sceneControls: function () {
      this.zoom = 10;
    },
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
      panel: "getPanelVisibility",
    }),
    user(){
      return this.$root.user;
    },
    panelsSize() {
      return this.panel ? 350 : 50;
    },
    winHeight(){
      return window.innerHeight;
    },
    winWidth(){
      return window.innerWidth - this.panelsSize;
    }
  },
  methods: {
    buildScene() {
      this.sceneCtrl = new this.sceneControls();
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.winWidth / this.winHeight,
        0.1,
        1000
      );
      this.camera.position.set(15, 2.5, 0);
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.setLight();
      this.switchThemes();
      this.$refs.drakkar.appendChild(this.renderer.domElement);
    },
    setLight() {
      const horizontalLight = new THREE.AmbientLight(0x404040, 1);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      const pointLight = new THREE.PointLight(0xc4c4c4, 1);
      const pointLight2 = new THREE.PointLight(0xc4c4c4, 1);
      const pointLight3 = new THREE.PointLight(0xc4c4c4, 1);
      const pointLight4 = new THREE.PointLight(0xc4c4c4, 1);

      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      pointLight.position.set(0, 300, 500);
      pointLight2.position.set(500, 100, 0);
      pointLight3.position.set(0, 100, -500);
      pointLight4.position.set(-540, 300, 0);
      this.scene.add(
        horizontalLight,
        directionalLight,
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
    switchThemes() {
      if (this.theme) {
        this.renderer.setClearColor("#e0e0e0");
      } else {
        this.renderer.setClearColor("#1e1e1e");
      }
    },
    render() {
      if (this.controls) {
        this.controls.update();
      }
      this.scene.rotation.x = !this.selection.rotateX ? 45 : 0;
      this.scene.rotation.z = !this.selection.rotateZ ? 45 : 0;

      requestAnimationFrame(this.render);
      if (!this.selection.rotateY) {
        this.scene.rotation.y += this.selection.sceneRotation * 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      this.selection.grid
        ? this.scene.add(this.gridHelper)
        : this.scene.remove(this.gridHelper);
    },
    buildGeometry() {
      const size = 60;
      const divisions = 25;
      this.gridHelper = new THREE.GridHelper(size, divisions);

      const loader = new GLTFLoader();

      (function (scene) {
        loader.load(
          "3d/drakkar-crystal.glb",
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
    this.buildGeometry();
    this.render();
  },
  created() {
    this.selection = this.$store.getters.getHomeSelection;
    window.addEventListener("resize", this.resizeWindow);
  },
  beforeDestroy() {
    this.render = () => {
      // remove render loop
    };
    window.removeEventListener("resize", this.resizeWindow);
  },
  watch: {
    theme: function () {
      this.switchThemes();
    },
    panel: function () {
      this.resizeWindow();
    },
  },
});
</script>