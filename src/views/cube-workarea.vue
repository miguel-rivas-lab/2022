<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script lang="ts">
import Vue from "vue";
import * as THREE from "three";
import {wikiColors} from "../db/wiki-colors";
import ThreeScene from "../mixins/three-scene";
import h from "../modules/helpers";

export default Vue.extend({
  mixins: [ThreeScene],
  data: () => ({
    gColorsDB: Object.values(wikiColors),
    linesGroup: undefined,
    minPolarAngle: 75 * h.rad,
    maxPolarAngle: 120 * h.rad,
    minDistance: 7.5,
    maxDistance: 500,
    distanceBetweenCubes: 1,
    maxValue: 255,
  }),
  methods: {
    render() {
      this.renderCommon();
      this.selection.lines
        ? this.scene.add(this.linesGroup)
        : this.scene.remove(this.linesGroup);
    },
    createLine(color, origin, destination) {
      let lineMaterial = new THREE.LineBasicMaterial({
        color: `rgb(${color})`,
      });
      let points = [];
      points.push(new THREE.Vector3(origin[0], origin[1], origin[2]));
      points.push(
        new THREE.Vector3(destination[0], destination[1], destination[2])
      );
      let lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      let line = new THREE.Line(lineGeometry, lineMaterial);
      return line;
    },
    buildGeometry() {
      const geometry = new THREE.BoxGeometry(1, 1, 1);

      for (const value of this.gColorsDB) {
        let x = value.red;
        let y = value.green;
        let z = value.blue;
        let material = new THREE.MeshBasicMaterial({
          color: value.hex,
        });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x =
          x * this.distanceBetweenCubes -
          this.maxValue * this.distanceBetweenCubes * 0.5;
        mesh.position.y = y * this.distanceBetweenCubes;
        mesh.position.z =
          z * this.distanceBetweenCubes -
          this.maxValue * this.distanceBetweenCubes * 0.5;
        mesh.name = value.spinalCase;
        this.scene.add(mesh);
      }

      const red = this.createLine(
        "255,0,0",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 0, -255 / 2]
      );
      const blue = this.createLine(
        "0,0,255",
        [-255 / 2, 0, -255 / 2],
        [-255 / 2, 0, 255 / 2]
      );
      const green = this.createLine(
        "0,255,0",
        [-255 / 2, 0, -255 / 2],
        [-255 / 2, 255, -255 / 2]
      );
      const cyan = this.createLine(
        "0,255,255",
        [-255 / 2, 0, -255 / 2],
        [-255 / 2, 255, 255 / 2]
      );
      const magenta = this.createLine(
        "255,0,255",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 0, 255 / 2]
      );
      const yellow = this.createLine(
        "255,255,0",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 255, -255 / 2]
      );
      const white = this.createLine(
        "255,255,255",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 255, 255 / 2]
      );

      const boxGroup = new THREE.Group();
      boxGroup.add(
        this.createLine(
          "80,80,80",
          [255 / 2, 0, -255 / 2],
          [255 / 2, 255, -255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 0, -255 / 2],
          [255 / 2, 0, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 0, 255 / 2],
          [255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 0, 255 / 2],
          [255 / 2, 0, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 255, -255 / 2],
          [255 / 2, 255, -255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 255, -255 / 2],
          [-255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 0, 255 / 2],
          [-255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 255, -255 / 2],
          [255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 255, 255 / 2],
          [-255 / 2, 255, 255 / 2]
        )
      );

      this.linesGroup = new THREE.Group();
      this.linesGroup.add(
        red,
        blue,
        green,
        cyan,
        magenta,
        yellow,
        white,
        boxGroup
      );
    },
  },
  mounted() {
    this.buildScene(
      false,
      { x: 0, y: 40, z: 0 },
      { fov: 75, near: 0.1 },
      { size: this.maxValue * this.distanceBetweenCubes, divisions: 25 }
    );
    this.scene.position.y = (-this.maxValue - 1) * 0.5;
    this.buildGeometry();
    this.render();
  },
});
</script>