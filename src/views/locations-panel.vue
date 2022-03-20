<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.map.panel.locations.legend') }}
      row
        column(size="100%")
          ul.summary
            template(v-for="(location, locationIndex) in locationsDBList")
              li(v-bind:key="locationIndex")
                row
                  column(size="35")
                    btn(
                      @click="centerMap(location.position)",
                      color="burn-orange",
                      glyph="gps-fixed"
                    )
                  column(size="100%-35")
                    btn(
                      @click="openModal(location.clients[0])",
                      color="gold-tips",
                      :text="location.title"
                    )
</template>

<script lang="ts">
import Vue from "vue";
import {locationsDBList} from "../modules/format-db";

export default Vue.extend({
  data: () => ({
    selection: {},
    modal: {},
    locationsDBList,
  }),
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    this.modal = this.$store.getters.getModal;
  },
  methods: {
    centerMap(position) {
      this.$store.commit("centerMap", {
        position: position,
      });
    },
    openModal(filter) {
      document.querySelector("aside.modal .scroll-area").scrollTo(0, 0);
      this.modal.data = locationsDBList.find(
        (item) => item.clients[0] === filter
      );
      this.modal.hidden = false;
    },
  },
});
</script>