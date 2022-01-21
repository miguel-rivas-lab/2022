<template>
  <div class="stargate" :style="`background-color: hsl(${selection.hue}deg 50% 28%)`">
    <div class="cover">
      <template v-if="user.lastName">
        <h1 v-html="`${user.middleName} ${user.lastName}`" />
        <h2 v-html="user.title" />
      </template>
    </div>
    <mountains />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import mountains from "../components/mountains.vue";

export default Vue.extend({
  components:{ mountains },
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
  },
  created() {
    this.selection = this.$store.getters.getHomeSelection;
  },
});
</script>