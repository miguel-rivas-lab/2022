<template>
  <div v-if="selection.currentLink.src !== ''" class="projector">
    <iframe
      :src="selection.currentLink.src"
      :frameborder="selection.currentLink.frameborder"
      :allow="selection.currentLink.allow"
      :allowfullscreen="selection.currentLink.allowfullscreen"
      :mozallowfullscreen="selection.currentLink.allowfullscreen"
      :webkitallowfullscreen="selection.currentLink.allowfullscreen"
    />
  </div>
  <scroll-area color="royal-purple" v-else>
    <gallery :db="projectsDB" />
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import Gallery from "../components/gallery.vue";
import { client } from "mr-kernel/enums/clients";
import { Project } from "mr-kernel/interfaces/project";
import { sortByDate } from "../modules/format-db";

export default Vue.extend({
  components: {
    Gallery,
  },
  data: () => ({
    panel: false,
    selection: {
      filterData: undefined,
      currentLink: {},
    },
  }),
  computed: {
    projectsDB() {
      let db = Object.values({
        ...this.$root.projects,
        ...this.$root.groups,
      })
        .filter((item: Project) => !item.disabled)
        .sort(sortByDate);

      let result = db;
      switch (this.selection.filterData) {
        case "projects":
          result = db.filter(
            (item: Project) =>
              !item.clients.includes(client.miguelRivas) &&
              !item.clients.includes(client.itla) &&
              !item.clients.includes(client.itesa) &&
              !item.clients.includes(client.codepen)
          );
          break;
        case "experiments":
          result = db.filter(
            (item: Project) =>
              item.clients.includes(client.miguelRivas) ||
              item.clients.includes(client.itla) ||
              item.clients.includes(client.itesa) ||
              item.clients.includes(client.codepen)
          );
          break;
        case "companies":
          result = db.filter(
            (item: Project) =>
              item.clients.includes(client.enovational) ||
              item.clients.includes(client.avante) ||
              item.clients.includes(client.jellyfish) ||
              item.clients.includes(client.pixelPerfectTree) ||
              item.clients.includes(client.capitalDBG) ||
              item.clients.includes(client.plantTherapy) ||
              item.clients.includes(client.socialNetwork)
          );
          break;
        case "homework":
          result = db.filter(
            (item: Project) =>
              !item.disabled && (
                item.clients.includes(client.itla) ||
                item.clients.includes(client.itesa)
              )
          );
          break;
      }
      return result;
    },
  },
  created() {
    this.selection = this.$store.getters.getFilterData;
  },
});
</script>