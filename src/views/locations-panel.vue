<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Locations</legend>
        <row>
          <column size="100%">
            <ul class="summary">
              <template v-for="(location, locationIndex) in locationsDB">
                <li v-bind:key="locationIndex">
                  <btn
                    @click="centerMap(location.position)"
                    color="gold-tips"
                    :text="location.title"
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

import { type } from "../enums/types";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getLocationSelection;
  },
  computed: {
    locationsDB() {
      return Object.values({
        ...this.$root.groups,
      }).filter((item) => item.types.includes(type.location));
    },
  },
  methods: {
    centerMap(position) {
      this.$store.commit("centerMap", {
        position: position,
      });
    },
  },
});
</script>