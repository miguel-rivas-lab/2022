<template lang="pug">
.stargaze(:style="`background-color: hsl(${selection.hue}deg 50% 28%)`")
  .cover
    template(v-if="user.lastName")
      h1 {{ user.middleName }} {{ user.lastName }}
      h2 {{ $t('position') }}

  mountains(:cx="cx", :cy="cy", :hue="selection.hue")
  footer
    p(
      v-html="$t('stargaze.workarea.footer') + `<time> // ${helpers.currentTuringDate()} </time>`"
    )
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import mountains from "../components/mountains.vue";
import helpers from "../modules/helpers";

export default Vue.extend({
  components: { mountains },
  data: () => ({
    selection: {},
    cx: 0,
    cy: 0,
    helpers,
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
    user() {
      return this.$root.user;
    },
  },
  created() {
    this.selection = this.$store.getters.getStargazeSelection;
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseLocation);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.mouseLocation);
  },
  methods: {
    mouseLocation: function (event) {
      this.cx = event.clientX;
      this.cy = event.clientY;
    },
  },
});
</script>