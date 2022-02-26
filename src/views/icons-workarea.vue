<template lang="pug">
scroll-area(color="royal-purple")
  container
    ul.img-gallery
      template(v-for="(icon, iconIndex) in iconsDB")
        li(v-bind:key="iconIndex")
          row.icon-item.item(vertical)
            column(size="150, 150")
              icon(:glyph="icon")
            column(size="150")
              h1(v-html="icon")
</template>

<script lang="ts">
import Vue from "vue";
import { icons } from "../db/icons";

export default Vue.extend({
  data: () => ({
    iconsDB: Object.keys(icons),
  }),
});
</script>