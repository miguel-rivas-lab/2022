<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Buttons</legend>

        <row>
          <column size="100%">
            <ul class="buttons">
              <template v-for="(color, colorIndex) in gColorsDB">
                <li v-bind:key="colorIndex">
                  <btn
                    tag="span"
                    :color="color.spinalCase"
                    :text="color.label"
                  />
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
import { gColorsDB } from "../modules/colors";

export default Vue.extend({
  data: () => ({
    panel: false,
    gColorsDB,
  }),
});
</script>