import * as THREE from "three";

export default {
  methods: {
    studioLight() {
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
  },
};