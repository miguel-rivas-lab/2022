<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Animation Controllers</legend>

        <number-input
          id="outter-circle-radius"
          :value="selection.rotationDelay"
          label="Rotation Delay"
          :increment="10"
          v-on:update-value="updateSpeed($event)"
        />
      </column>
    </row>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getProjects3DSelection;
  },
  methods: {
     updateSpeed(newVal) {
      this.selection.rotationDelay = parseInt(newVal);
    },
  }
});
</script>