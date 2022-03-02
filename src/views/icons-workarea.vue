<template lang="pug">
scroll-area(color="royal-purple")
  container
    ul.img-gallery
      template(v-for="(icon, iconIndex) in iconsDB")
        row.icon-item.item(tag="li", v-bind:key="iconIndex")
          column(size="100%, 150")
            icon(:glyph="icon")
          column(size="100%")
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