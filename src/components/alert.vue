<template>
  <row class="alert fixed" :class="alert.status" v-if="alert.message !== ''">
    <column size="100%-35">
      {{ alert.message }}
    </column>
    <suffix size="35">
      <button class="close-btn" @click="closeAlert()">
        <m-icon glyph="close" />
      </button>
    </suffix>
  </row>
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