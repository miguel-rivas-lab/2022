<template lang="pug">
unity(:unity="unityContext", :width="winWidth", :height="winHeight")
</template>

<script lang="ts">
import Vue from "vue";
import UnityWebgl from "unity-webgl";
import { mapGetters } from "vuex";

export default Vue.extend({
  props: {
    scene: {
      type: String,
      default: "",
    },
  },
  components: {
    Unity: UnityWebgl.vueComponent,
  },
  data: () => ({
    unityContext: undefined,
    winHeight: undefined,
    winWidth: undefined,
  }),
  created() {
    window.addEventListener("resize", this.resizeWindow);

    this.unityContext = new UnityWebgl({
      loaderUrl: `unity/${this.scene}/${this.scene}.loader.js`,
      dataUrl: `unity/${this.scene}/${this.scene}.data`,
      frameworkUrl: `unity/${this.scene}/${this.scene}.framework.js`,
      codeUrl: `unity/${this.scene}/${this.scene}.wasm`,
    });
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
    panelsSize() {
      return this.panel ? 350 : 50;
    },
  },
  methods: {
    resizeWindow() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
    },
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