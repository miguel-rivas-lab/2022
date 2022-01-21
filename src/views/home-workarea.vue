<template>
  <div
    class="stargate"
    :style="`background-color: hsl(${selection.hue}deg 50% 28%)`"
  >
    <div class="cover">
      <template v-if="user.lastName">
        <h1 v-html="`${user.middleName} ${user.lastName}`" />
        <h2 v-html="user.title" />
      </template>
    </div>
    <mountains :cx="cx" :cy="cy" :hue="selection.hue" />
    <footer>
      <p>
        Created with <strong><a href="https://vuejs.org/">Vue.js</a></strong>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import mountains from "../components/mountains.vue";

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
  },
  created() {
    this.selection = this.$store.getters.getHomeSelection;
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