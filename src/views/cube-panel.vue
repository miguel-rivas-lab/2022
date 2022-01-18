<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Cube Controllers</legend>

        <number-input
          id="outter-circle-radius"
          :value="selection.cubeRotation"
          label="Rotation"
          v-on:update-value="updateSpeed($event)"
        />

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.pause }"
            >
              Pause
              <input type="checkbox" v-model="selection.pause" />
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
              :class="{ active: selection.lines }"
            >
              Lines
              <input type="checkbox" v-model="selection.lines" />
            </label>
          </column>
        </row>
      </column>
    </row>

    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Colors</legend>
        <row>
          <column size="100%">
            <ul class="standard">
              <template v-for="(color, colorIndex) in gColorsDB">
                <li v-bind:key="colorIndex">
                  {{ colorIndex }}: {{ color.label }}
                </li>
              </template>
            </ul>
          </column>
        </row>
      </column>
    </row>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import wikiColors from "../db/wiki-colors";

export default Vue.extend({
  data: () => ({
    gColorsDB: wikiColors,
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getCubeSelection;
  },
  methods: {
    updateSpeed(newVal) {
      this.selection.cubeRotation = parseInt(newVal);
    },
  }
});
</script>