<template>
  <scroll-area color="royal-purple">
    <container>
      <ul class="img-gallery">
        <template v-for="(color, colorIndex) in gColorsDB">
          <li v-bind:key="colorIndex">
            <row vertical class="swatch item">
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
          </li>
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
    gColorsDB: gColorsDB,
  }),
});
</script>