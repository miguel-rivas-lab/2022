<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Scene Controllers

      number-input#outter-circle-radius(
        :value="selection.hue",
        label="Hue",
        :increment="10",
        v-on:update-value="updateSpeed($event)"
      )
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getStargazeSelection;
  },
  methods: {
    updateSpeed(newVal) {
      this.selection.hue = parseInt(newVal);
    },
  },
});
</script>