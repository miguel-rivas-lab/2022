<template>
  <scroll-area color="royal-purple">
    <container>
      <ul class="img-gallery">
        <template v-for="(item, itemIndex) in database">
          <li v-bind:key="`gallery${itemIndex}`">
            <carrousel :item="item" :start="randomFrame()" />
          </li>
        </template>
      </ul>
    </container>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import { gallery3d } from "../db/gallery3d";
import carrousel from "../components/carrousel.vue";

export default Vue.extend({
  components: { carrousel },
  data: () => ({
    panel: false,
    database: gallery3d,
  }),
  computed: {},
  methods: {
    randomFrame() {
      let randomNumber = Math.floor(Math.random() * 3) - 1;
      if (randomNumber < 0) {
        randomNumber = 7;
      }
      return randomNumber;
    },
  },
  created() {
    this.$store.commit("setValue", {
      name: "panel",
      value: false,
    });
  },
});
</script>