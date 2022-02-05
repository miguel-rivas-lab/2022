<template lang="pug">
.stargaze(:style="`background-color: hsl(${selection.hue}deg 50% 28%)`")
  .cover
    template(v-if="user.lastName")
      h1 {{ user.middleName }} {{ user.lastName }}
      h2 {{ user.title }}

  mountains(:cx="cx", :cy="cy", :hue="selection.hue")
  footer
    p
      | Built with&nbsp;
      strong: a(href="https://vuejs.org/") Vue.js&nbsp;
      time [ {{ currentTuringDate }} ]
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import mountains from "../components/mountains.vue";
import { DateTime } from "luxon";

export default Vue.extend({
  components: { mountains },
  data: () => ({
    selection: {},
    cx: 0,
    cy: 0,
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
    user() {
      return this.$root.user;
    },
    currentTuringDate() {
      const newDate = DateTime.now().minus({years: 1990, months: 5, days: 5});
      return `Y${newDate.year} M${newDate.month} D${newDate.day}`;
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