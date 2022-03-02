<template>
  <main class="vue-theme" :class="classes">
    <alert />
    <row class="nano-app">
      <panel-navigation />

      <column
        class="panel"
        :size="panel ? panelSize[0] : '0'"
        :class="{ 'hide-panel': !panel }"
      >
        <router-view name="panel" />
      </column>

      <column size="0" class="panel-bar">
        <btn
          class="panel-ctrl"
          title="Toggle panel button"
          glyph="chevron"
          :direction="panel ? 'left' : 'right'"
          @click="toggleValue('panel'), playSound()"
        />
      </column>

      <column :size="panel ? panelSize[1] : '100%-50'" class="workarea">
        <router-view name="workarea" />
      </column>
    </row>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "./components/panel-navigation.vue";
import Alert from "./components/alert.vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,
    Alert,
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
      panel: "getPanelVisibility",
      panelSize: "getPanelSize",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
    classes() {
      return [this.sectionName, this.theme ? "nano-light" : "nano-dark"];
    },
  },
  methods: {
    ...mapMutations(["toggleValue"]),
    playSound() {
      let context = new AudioContext();
      let newSound = context.createOscillator();
      let newGain = context.createGain();
      newSound.connect(newGain);
      newSound.frequency.value = 300;
      newGain.connect(context.destination);
      newSound.start(0);
      newGain.gain.exponentialRampToValueAtTime(
        0.00000001,
        context.currentTime + 0.5
      );
    },
  },
});
</script>