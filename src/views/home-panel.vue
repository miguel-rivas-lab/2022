<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Animation Controllers</legend>

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
              :class="{ active: selection.cover }"
            >
              Cover
              <input type="checkbox" v-model="selection.cover" />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.grid }"
            >
              Grid
              <input type="checkbox" v-model="selection.grid" />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: !selection.rotateX }"
            >
              Rotate X
              <input type="checkbox" v-model="selection.rotateX" />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: !selection.rotateZ }"
            >
              Rotate Z
              <input type="checkbox" v-model="selection.rotateZ" />
            </label>
          </column>
        </row>

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
    this.selection = this.$store.getters.getHomeSelection;
  },
  methods: {
     updateSpeed(newVal) {
      this.selection.sceneRotation = parseInt(newVal);
    },
  }
});
</script>