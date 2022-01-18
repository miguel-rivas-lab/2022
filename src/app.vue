<template>
  <main class="vue-theme" :class="classes">
    <alert />
    <row class="nano-app">
      <panel-navigation />
      <column
        class="panel"
        :size="panelSize[0]"
        :class="{ 'hide-panel': !panel }"
      >
        <router-view name="panel" />
      </column>

      <column
        :size="panel ? panelSize[1] : '100%-50'"
        class="workarea"
      >
        <router-view name="workarea" />
      </column>
    </row>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import PanelNavigation from "./components/panel-navigation.vue";
import Alert from "./components/alert.vue";

export default Vue.extend({
  components: {
    PanelNavigation,
    Alert,
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
      universe: "getUniverse",
      panel: "getPanelVisibility",
      panelSize: "getPanelSize",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
    classes() {
      return [
        this.sectionName,
        this.theme ? "nano-light" : "nano-dark",
        { universe: this.universe },
      ];
    },
  },
});
</script>