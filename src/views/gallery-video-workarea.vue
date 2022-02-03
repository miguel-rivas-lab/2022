<template lang="pug">
scroll-area(color="royal-purple")
  container
    ul.img-gallery
      template(v-for="(item, itemIndex) in videosDB")
        li.item(v-bind:key="`gallery${itemIndex}`")
          iframe(
            title="vimeo-player",
            :src="item.url",
            :width="item.width",
            :height="item.height",
            frameborder="0",
            allowfullscreen
          )
</template>

<script lang="ts">
import Vue from "vue";
import {videos} from "../db/videos";

export default Vue.extend({
  components: {},
  data: () => ({
    videosDB: videos,
  }),
});
</script>