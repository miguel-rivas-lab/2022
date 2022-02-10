<template lang="pug">
row.row-block(tag="fieldset")
  column(size="100%")
    legend Scene Controllers

    number-input#outter-circle-radius(
      :value="selection.sceneRotation",
      label="Rotation",
      v-on:update-value="updateSpeed($event)"
    )

    row
      column(size="100%")
        label.btn.flat.charcoal(:class="{ active: selection.grid }")
          | Grid
          input(type="checkbox", v-model="selection.grid")

    row
      column(size="100%")
        label.btn.flat.charcoal(:class="{ active: selection.rotateY }")
          | Pause
          input(type="checkbox", v-model="selection.rotateY")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getMeshSelection;
  },
  methods: {
    updateSpeed(newVal) {
      this.selection.sceneRotation = parseInt(newVal);
    },
  },
});
</script>