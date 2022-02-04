<template lang="pug">
.map
  modal
    template(v-slot:header)
      h1(v-if="modal.data.title") {{ modal.data.title }}
      h2(v-if="modal.data.description") {{ modal.data.description }}
      h3(v-if="modal.data.turingDate")
        time {{ modal.data.turingDate }}

    template(v-slot:body)
      ul.list(v-if="modal.data.list.length")
        template(v-for="(item, index) in modal.data.list")
          li(v-bind:key="`locationList${index}`") {{ item }}
      ul.skills(v-if="modal.data.tools.length")
        template(v-for="(item, index) in modal.data.tools")
          li(v-bind:key="`locationList${index}`") {{ item }}

  div(ref="mapContainer")
    v-stage(:config="mapPos", @dragmove="dragging", ref="stage")
      v-layer
        v-image(:config="map")
        template(v-for="(image, index) in img")
          v-image(
            v-bind:key="`mapImg${index}`",
            @mouseover="hoverImg",
            @mouseout="mouseOutImg",
            @click="openModal(image.client)",
            :config="image"
          )

        template(v-for="(item, index) in pins")
          carrousel(v-bind:key="`mapCarrousel${index}`", :item="item")
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Modal from "../components/modal.vue";
import { type } from "../enums/types";
import { client } from "../enums/clients";
import Carrousel from "../components/carrousel-konva.vue";

export default Vue.extend({
  components: { Modal, Carrousel },
  data: () => ({
    panelWidth: 0,
    map: {
      image: null,
    },
    averageBuildingImageWidth: 150,
    pins: [
      {
        name: "santodomingo",
        position: { x: 1660, y: 811 },
      },
      {
        name: "twinfalls",
        position: { x: 840, y: 308 },
      },
      {
        name: "dc",
        position: { x: 2379, y: 129 },
      },
    ],
    img: [
      {
        name: "itesa",
        image: null,
        x: 2262,
        y: 669,
        opacity: 0,
        client: client.itesa,
      },
      {
        name: "itla",
        image: null,
        x: 2492,
        y: 811,
        opacity: 0,
        client: client.itla,
      },
      {
        name: "several",
        image: null,
        x: 1918,
        y: 1007,
        opacity: 0,
        client: client.socialNetwork,
      },
      {
        name: "avante",
        image: null,
        x: 1450,
        y: 1169,
        opacity: 0,
        client: client.avante,
      },
      {
        name: "capital",
        image: null,
        x: 1373,
        y: 862,
        opacity: 0,
        client: client.capitalDBG,
      },
      {
        name: "pixel",
        image: null,
        x: 810,
        y: 1093,
        opacity: 0,
        client: client.pixelPerfectTree,
      },
      {
        name: "planttherapy",
        image: null,
        x: 962,
        y: 376,
        opacity: 0,
        client: client.plantTherapy,
      },
      {
        name: "enovational",
        image: null,
        x: 2492,
        y: 184,
        opacity: 0,
        client: client.enovational,
      },
    ],
    modal: {},
    selection: {},
    stage: undefined,
    configKonva: {
      width: 0,
      height: 0,
    },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
    }),
    locationsDB() {
      return Object.values({
        ...this.$root.groups,
      }).filter((item) => item.types.includes(type.location));
    },
    mapPos() {
      if (this.map.image) {
        return {
          x: Math.max(
            Math.min(
              this.selection.mapCenter.x -
                this.averageBuildingImageWidth +
                this.configKonva.width / 2,
              0
            ),
            -this.map.image.width
          ),
          y: Math.max(
            Math.min(
              this.selection.mapCenter.y -
                this.averageBuildingImageWidth +
                this.configKonva.height / 2,
              0
            ),
            -this.map.image.height
          ),
          draggable: true,
          width: this.configKonva.width,
          height: this.configKonva.height,
        };
      } else {
        return {
          x: 0,
          y: 0,
          draggable: true,
          width: this.configKonva.width,
          height: this.configKonva.height,
        };
      }
    },
  },
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    this.modal = this.$store.getters.getModal;
    window.addEventListener("resize", this.updateCanvas);

    this.map.temp = new window.Image();
    this.map.temp.src = require(`@/img/map.jpg`);
    this.map.temp.onload = () => {
      this.map.image = this.map.temp;
    };

    this.img.forEach((item) => {
      item.temp = new window.Image();
      item.temp.src = require(`@/img/${item.name}.jpg`);
      item.temp.onload = () => {
        item.image = item.temp;
      };
    });
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.$refs.mapContainer.style.cursor = "grab";
    this.updateCanvas();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
  },
  methods: {
    openModal(filter) {
      document.querySelector("aside.modal .scroll-area").scrollTo(0, 0);
      this.modal.data = this.locationsDB.find(
        (item) => item.clients[0] === filter
      );
      this.modal.hidden = false;
    },
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.configKonva.width = window.innerWidth - (margin - 50);
      this.configKonva.height = window.innerHeight;
      this.dragging();
    },
    hoverImg(event) {
      event.target.opacity(1);
      this.$refs.mapContainer.style.cursor = "pointer";
    },
    mouseOutImg(event) {
      event.target.opacity(0);
      this.$refs.mapContainer.style.cursor = "grab";
    },
    dragging() {
      if (this.map.image) {
        let nx = Math.max(
          Math.min(this.stage.position().x, 0),
          -(this.map.image.width - this.configKonva.width)
        );
        let ny = Math.max(
          Math.min(this.stage.position().y, 0),
          -(this.map.image.height - this.configKonva.height)
        );

        this.stage.position({ x: nx, y: ny });
      }
    },
  },
});
</script>