<template>
  <div>
    <div class="cover" v-if="selection.cover">
      <template v-if="user.lastName">
        <h1 v-html="`${user.middleName} ${user.lastName}`" />
        <h2 v-html="user.title" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
    user() {
      return this.$root.user;
    },
    panelsSize() {
      return this.panel ? 350 : 50;
    },
  },
  created() {
    this.selection = this.$store.getters.getHomeSelection;
  },
});
</script>