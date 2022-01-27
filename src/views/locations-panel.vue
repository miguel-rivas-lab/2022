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
                  <row>
                    <column size="100%-35">
                    <btn
                        @click="openModal(location.clients[0])"
                        color="gold-tips"
                        :text="location.title"
                      />
                    </column>
                    <suffix size="35">
                      <btn
                        @click="centerMap(location.position)"
                        color="burn-orange"
                        glyph="gps-fixed"
                      />
                    </suffix>
                  </row>
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
// import { client } from "../enums/clients";

export default Vue.extend({
  data: () => ({
    selection: {},
    modal: {},
    // client,
  }),
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    this.modal = this.$store.getters.getModal;
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
    openModal(filter){
      document.querySelector('aside.modal .scroll-area').scrollTo(0, 0);
      this.modal.data = this.locationsDB.find((item) => item.clients[0] === filter);
      this.modal.hidden = false;
    },
  },
});
</script>