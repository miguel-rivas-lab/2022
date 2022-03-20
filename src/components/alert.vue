<template lang="pug">
row.alert.fixed(:class="alert.status", v-if="alert.message !== ''")
  column(size="100%-35") {{ alert.message }}
  column(size="35")
    button.close-btn(@click="closeAlert()")
      icon(glyph="close")
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      alert: "getAlert",
    }),
  },
  methods: {
    closeAlert() {
      this.$store.commit("setValue", {
        name: "alert",
        value: {
          message: "",
          status: "",
        },
      });
    },
  },
});
</script>