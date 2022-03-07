import { mapGetters } from "vuex";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  data: () => ({
    winHeight: undefined,
    winWidth: undefined,
    controls: undefined,
    scene: undefined,
    camera: undefined,
    renderer: undefined,
    gridHelper: undefined,
    selection: {},
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
    renderCommon() {
      if (this.controls) {
        this.controls.update();
      }
      requestAnimationFrame(this.render);
      if (!this.selection.pause) {
        this.scene.rotation.y += this.selection.sceneRotation * 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      this.selection.grid
        ? this.scene.add(this.gridHelper)
        : this.scene.remove(this.gridHelper);
    },
    buildScene(
      allowPaning = false,
      cameraPosition = { x: 15, y: 25, z: 0 },
      perspectiveCamera = { fov: 15, aspect: this.winWidth / this.winHeight, near: 1, far: 1000 },
      grid = { size: 60, divisions: 25 }
    ) {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        perspectiveCamera.fov,
        perspectiveCamera.aspect,
        perspectiveCamera.near,
        perspectiveCamera.far
      );
      this.camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.controls.minPolarAngle = this.minPolarAngle;
      this.controls.maxPolarAngle = this.maxPolarAngle;

      this.controls.minDistance = this.minDistance;
      this.controls.maxDistance = this.maxDistance;

      this.controls.enablePan = allowPaning;

      this.$refs.threeScene.appendChild(this.renderer.domElement);

      this.gridHelper = new THREE.GridHelper(grid.size, grid.divisions);
    },
    resizeWindow() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();
    },
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
};