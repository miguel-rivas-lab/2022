<template>
  <div class="map">
    <div class="clouds" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { type } from "../enums/types";

export default Vue.extend({
  components: { },
  data: () => ({
    selection: {},
  }),
  computed: {
    locationsDB() {
      return Object.values({
        ...this.$root.groups,
      }).filter((item) => item.types.includes(type.location));
    },
  },
  created() {
    this.selection = this.$store.getters.getLocationSelection;
  },
});
</script>