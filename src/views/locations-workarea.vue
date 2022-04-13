<template lang="pug">
.map
  modal(:ctaCaption="$t('canvas.section.map.modal.removeCTA')")
    template(v-slot:header)
      h1(v-if="modal.data.title") {{ modal.data.title }}
      h2(v-if="modal.data.description") {{ $t(modal.data.description) }}
      h3(v-if="modal.data.turingDate")
        time {{ modal.data.turingDate }}

    template(v-slot:body)
      ul.list(v-if="modal.data.list.length > 0")
        template(v-for="(item, index) in $t(modal.data.list)")
          li(v-bind:key="`locationList${index}`") {{ item }}
      ul.skills(v-if="modal.data.tools.length > 0")
        template(v-for="(item, index) in modal.data.tools")
          li(v-bind:key="`locationList${index}`") {{ item }}

  div(ref="mapContainer")
    v-stage(:config="mapPos", @dragmove="dragging", ref="stage", @wheel="zoom")
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

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import Modal from "../components/modal.vue";
import { client } from "../enums/clients";
import Carrousel from "../components/carrousel-konva.vue";
import { locationsDBList } from "../modules/format-db";

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
    currentTheme: "dark",
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
      theme: "getTheme",
    }),
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
    this.createImgs();
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
    theme: function () {
      this.createImgs();
    },
  },
  methods: {
    createImgs() {
      this.currentTheme = this.theme ? "light" : "dark";
      this.map.temp = new window.Image();
      this.map.temp.src = `https://miguel-rivas.github.io/zapp/img/3d-map/${this.currentTheme}/map.jpg`;
      this.map.temp.onload = () => {
        this.map.image = this.map.temp;
      };

      this.img.forEach((item) => {
        item.temp = new window.Image();
        item.temp.src = `https://miguel-rivas.github.io/zapp/img/3d-map/${this.currentTheme}/${item.name}.jpg`;
        item.temp.onload = () => {
          item.image = item.temp;
        };
      });
    },
    openModal(filter) {
      this.modal.data = locationsDBList.find(
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
    zoom(event) {
      const scale = 0.99;
      const maxZoom = 120 / 100;
      const minZoom = 100 / 100;

      event.evt.preventDefault();
      let oldScale = this.stage.scaleX();

      let mousePointTo = {
        x:
          this.stage.getPointerPosition().x / oldScale -
          this.stage.x() / oldScale,
        y:
          this.stage.getPointerPosition().y / oldScale -
          this.stage.y() / oldScale,
      };

      let newScale = event.evt.deltaY > 0 ? oldScale * scale : oldScale / scale;

      newScale = newScale > maxZoom ? maxZoom : newScale;
      newScale = newScale < minZoom ? minZoom : newScale;

      this.stage.scale({ x: newScale, y: newScale });

      let newPos = {
        x:
          -(mousePointTo.x - this.stage.getPointerPosition().x / newScale) *
          newScale,
        y:
          -(mousePointTo.y - this.stage.getPointerPosition().y / newScale) *
          newScale,
      };
      this.stage.position(newPos);
      this.updateCanvas();
    },
  },
});
</script>