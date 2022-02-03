<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Locations
      row
        column(size="100%")
          ul.summary
            template(v-for="(location, locationIndex) in locationsDB")
              li(v-bind:key="locationIndex")
                row
                  column(size="100%-35")
                    btn(
                      @click="openModal(location.clients[0])",
                      color="gold-tips",
                      :text="location.title"
                    )

                  suffix(size="35")
                    btn(
                      @click="centerMap(location.position)",
                      color="burn-orange",
                      glyph="gps-fixed"
                    )
</template>

<script lang="ts">
import Vue from "vue";

import { type } from "../enums/types";

export default Vue.extend({
  data: () => ({
    selection: {},
    modal: {},
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
    openModal(filter) {
      document.querySelector("aside.modal .scroll-area").scrollTo(0, 0);
      this.modal.data = this.locationsDB.find(
        (item) => item.clients[0] === filter
      );
      this.modal.hidden = false;
    },
  },
});
</script>