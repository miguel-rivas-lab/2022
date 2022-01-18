<template>
  <GmapInfoWindow :position="position">
    {{ title }}
  </GmapInfoWindow>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    position: {
      type: Object,
    },
    title: {
      type: String,
      default: "",
    },
  },
  data: () => ({
  }),
});
</script>