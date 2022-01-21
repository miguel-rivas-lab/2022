<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Scene Controllers</legend>

        <number-input
          id="outter-circle-radius"
          :value="selection.hue"
          label="Hue"
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
    this.selection = this.$store.getters.getHomeSelection;
  },
  methods: {
     updateSpeed(newVal) {
      this.selection.hue = parseInt(newVal);
    },
  }
});
</script>