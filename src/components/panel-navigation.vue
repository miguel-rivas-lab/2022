<template>
  <column size="50" class="main-panel">
    <scroll-area color="royal-purple" :horizontal="false">
      <container>
        <row vertical>
          <column size=",100%-80">
            <template v-for="nav in navigation">
              <template v-if="$route.name !== nav.route">
                <btn
                  :to="{ name: nav.route }"
                  v-bind:key="nav.route"
                  color="gravel"
                  size="md"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  v-bind:key="nav.route"
                  color="gravel"
                  size="md"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
            <hr />
            <template v-for="nav in navigationBuilder">
              <template v-if="$route.name !== nav.route">
                <btn
                  :to="{ name: nav.route }"
                  v-bind:key="nav.route"
                  color="gravel"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  size="md"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  v-bind:key="nav.route"
                  color="gravel"
                  size="md"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
            <hr>
            <btn
              tag="a"
              :href="linkLinkedin"
              color="royal-purple"
              size="md"
              title="Linkedin button"
              v-nano-tooltip.right="'Linkedin'"
              glyph="linkedin"
              target="_blank"
            />
            <btn
              tag="a"
              :href="linkGithub"
              color="royal-purple"
              size="md"
              title="Github button"
              v-nano-tooltip.right="'Github'"
              glyph="github"
              target="_blank"
            />
          </column>
          <suffix size=",80">
            <btn
              color="persian-red"
              size="md"
              title="Toggle universe button"
              v-nano-tooltip.right="'A Parallel Universe Where Cows Rule Earth'"
              glyph="cow"
              @click="toggleValue('parallelUniverse'), playSound()"
              :active="universe"
            />
            <btn
              color="charcoal"
              size="md"
              title="Toggle theme button"
              v-nano-tooltip.right="'Toggle Theme'"
              glyph="brightness-4"
              @click="toggleValue('theme'), playSound()"
              :active="!theme"
            />
          </suffix>
        </row>
      </container>
    </scroll-area>
  </column>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { linkGithub, linkLinkedin } from "../db/users";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      { icon: "monster", route: "stargaze" },
      { icon: "duck", route: "projects" },
      { icon: "collections", route: "gallery-3d" },
      { icon: "chart-areaspline", route: "statistics" },
      { icon: "airplane", route: "locations" },
      { icon: "format-color-fill", route: "colors" },
    ],
    navigationBuilder: [
      { icon: "open_with", route: "mesh" },
      { icon: "robot-industrial", route: "grid" },
      { icon: "cube-outline", route: "cube" },
      { icon: "cog-transfer-outline", route: "gear" },
      { icon: "palette", route: "wheel" },
    ],
    linkGithub,
    linkLinkedin,
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
      universe: "getUniverse",
      login: "getLoginSelection",
    }),
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