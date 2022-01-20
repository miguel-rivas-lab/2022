<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Scene Controllers</legend>

        <number-input
          id="outter-circle-radius"
          :value="selection.sceneRotation"
          label="Rotation"
          v-on:update-value="updateSpeed($event)"
        />

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.rotateY }"
            >
              Pause
              <input type="checkbox" v-model="selection.rotateY" />
            </label>
          </column>
        </row>
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
    this.selection = this.$store.getters.getMeshSelection;
  },
  methods: {
     updateSpeed(newVal) {
      this.selection.sceneRotation = parseInt(newVal);
    },
  }
});
</script>