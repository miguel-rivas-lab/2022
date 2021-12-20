<template>
  <scroll-area color="royal-purple">
    <container>
      <ul class="palette">
        <template v-for="(color, colorIndex) in gColorsDB">
          <row v-bind:key="colorIndex" tag="li" vertical>
            <column
              size="200, 200"
              class="color"
              :style="`background-color: ${color.hex}`"
            />
            <column>
              <h1 v-html="color.label" />
              <p v-html="color.hex" />
            </column>
          </row>
        </template>
      </ul>
    </container>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import { gColorsDB } from "../modules/colors";

export default Vue.extend({
  data: () => ({
    panel: false,
    gColorsDB: gColorsDB,
  }),
});
</script>