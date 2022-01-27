<template>
  <div class="map">
    <modal>
      <template v-slot:header>
        <h1 v-html="modal.data.title" />
        <h2 v-html="modal.data.description" />
        <h3>
          <time v-html="modal.data.date" />
        </h3>
      </template>

      <template v-slot:body>
        <!-- <img :src="modal.data.image" alt="Company preview" /> -->
        <ul class="list">
          <template v-for="(item, index) in modal.data.list">
            <li v-bind:key="`locationList${index}`" v-html="item" />
          </template>
        </ul>
        <ul class="skills">
          <template v-for="(item, index) in modal.data.tools">
            <li v-bind:key="`locationList${index}`" v-html="item" />
          </template>
        </ul>
      </template>
    </modal>
    <div ref="mapContainer">
      <v-stage
        :config="{
          x: mapPos.x,
          y: mapPos.y,
          draggable: true,
          width: configKonva.width,
          height: configKonva.height,
        }"
        @dragmove="dragging"
        ref="stage"
      >
        <v-layer>
          <v-image
            :config="{
              image: map.config,
            }"
          />
          <template v-for="(image, index) in img">
            <v-image
              v-bind:key="`mapImg${index}`"
              @mouseover="hoverImg"
              @mouseout="mouseOutImg"
              @click="openModal(image.client)"
              :config="{
                image: image.config,
                x: image.position.x,
                y: image.position.y,
                opacity: image.opacity,
              }"
            />
          </template>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Modal from "../components/modal.vue";
import { type } from "../enums/types";
import { client } from "../enums/clients";

export default Vue.extend({
  components: { Modal },
  data: () => ({
    panelWidth: 0,
    map: {
      config: null,
    },
    averageBuildingImageWidth: 150,
    img: [
      {
        name: "itesa",
        config: null,
        position: { x: 2256, y: 665 },
        opacity: 0,
        client: client.itesa,
      },
      {
        name: "itla",
        config: null,
        position: { x: 2483, y: 799 },
        opacity: 0,
        client: client.itla,
      },
      {
        name: "several",
        config: null,
        position: { x: 1905, y: 997 },
        opacity: 0,
        client: client.socialNetwork,
      },
      {
        name: "avante",
        config: null,
        position: { x: 1461, y: 1168 },
        opacity: 0,
        client: client.avante,
      },
      {
        name: "capital",
        config: null,
        position: { x: 1343, y: 856 },
        opacity: 0,
        client: client.capitalDBG,
      },
      {
        name: "pixel",
        config: null,
        position: { x: 694, y: 1060 },
        opacity: 0,
        client: client.pixelPerfectTree,
      },
      {
        name: "planttherapy",
        config: null,
        position: { x: 1188, y: 501 },
        opacity: 0,
        client: client.plantTherapy,
      },
      {
        name: "enovational",
        config: null,
        position: { x: 2323, y: 294 },
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
      if (this.map.config) {
        return {
          x: Math.max(
            Math.min(
              this.selection.mapCenter.x -
                this.averageBuildingImageWidth +
                this.configKonva.width / 2,
              0
            ),
            -this.map.config.width
          ),
          y: Math.max(
            Math.min(
              this.selection.mapCenter.y -
                this.averageBuildingImageWidth +
                this.configKonva.height / 2,
              0
            ),
            -this.map.config.height
          ),
        };
      } else {
        return { x: 0, y: 0 };
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
      this.map.config = this.map.temp;
    };

    this.img.forEach((item) => {
      item.temp = new window.Image();
      item.temp.src = require(`@/img/${item.name}.jpg`);
      item.temp.onload = () => {
        item.config = item.temp;
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
    openModal(filter){
      document.querySelector('aside.modal .scroll-area').scrollTo(0, 0);
      this.modal.data = this.locationsDB.find((item) => item.clients[0] === filter);
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
      if (this.map.config) {
        let nx = Math.max(
          Math.min(this.stage.position().x, 0),
          -(this.map.config.width - this.configKonva.width)
        );
        let ny = Math.max(
          Math.min(this.stage.position().y, 0),
          -(this.map.config.height - this.configKonva.height)
        );

        this.stage.position({ x: nx, y: ny });
      }
    },
  },
});
</script>