<template lang="pug">
scroll-area(color="royal-purple")
  container
    ul.img-gallery
      template(v-for="(item, itemIndex) in videosDB")
        row.item(vertical, v-bind:key="`gallery${itemIndex}`", tag="li")
          column
            video(:width="item.width", :height="item.height", controls)
              source(:src="item.url", type="video/mp4")
              | Your browser does not support the video tag.
          column
            .nano-shade-box
              toggle-row.toggle-input(breakpoint="lg")
                template(v-slot:header)
                  column(size="100%-35")
                    h2 {{ item.title }}
                template(v-slot:more)
                  t-column(size="100%")
                    ul.skills
                      template(v-for="(skill, skillIndex) in item.skills")
                        li(v-bind:key="`gallerySkill${itemIndex}${skillIndex}`") {{ skill }}
              p: small Soundtrack: {{ item.soundtrack.artist }} - {{ item.soundtrack.song }}
</template>

<script lang="ts">
import Vue from "vue";
import { videos } from "../db/videos";
import ToggleRow from "../components/toggle-row.vue";

export default Vue.extend({
  components: { ToggleRow },
  data: () => ({
    videosDB: videos,
  }),
});
</script>