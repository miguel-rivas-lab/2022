<template lang="pug">
scroll-area(color="royal-purple")
  container
    ul.img-gallery
      template(v-for="(item, itemIndex) in videosDB")
        li.item(v-bind:key="`gallery${itemIndex}`")
          video(:width="item.width", :height="item.height", controls)
            source(:src="item.url", type="video/mp4")
            | Your browser does not support the video tag.
</template>

<script lang="ts">
import Vue from "vue";
import { videos } from "../db/videos";

export default Vue.extend({
  components: {},
  data: () => ({
    videosDB: videos,
  }),
});
</script>