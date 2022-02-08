<template>
  <column size="50" class="main-panel">
    <scroll-area color="royal-purple" :horizontal="false">
      <container>
        <row vertical>
          <column>
            <template v-for="nav in navigation">
              <template v-if="!nav.route.includes($route.name)">
                <btn
                  :to="{ name: nav.route[0] }"
                  v-bind:key="nav.route[0]"
                  color="gravel"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.route[0]"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  v-bind:key="nav.route[0]"
                  color="gravel"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.route[0]"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
            <hr />
            <template v-for="nav in navigationBuilder">
              <template v-if="!nav.route.includes($route.name)">
                <btn
                  :to="{ name: nav.route[0] }"
                  v-bind:key="nav.route[0]"
                  color="gravel"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route[0]"
                  size="md"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  v-bind:key="nav.route[0]"
                  color="gravel"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.route[0]"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
            <hr />
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
            <btn
              tag="a"
              href="https://github.com/miguel-rivas"
              color="royal-purple"
              size="md"
              title="Github button"
              v-nano-tooltip.right="'Github Organization'"
              glyph="github"
              target="_blank"
            />
            <hr />
            <btn
              color="charcoal"
              size="md"
              title="Toggle theme button"
              v-nano-tooltip.right="'Toggle Theme'"
              glyph="brightness-4"
              @click="toggleValue('theme'), playSound()"
              :active="!theme"
            />
          </column>
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
      { icon: "monster", route: ["stargaze"] },
      { icon: "duck", route: ["projects", "list", "statistics"] },
      { icon: "collections", route: ["gallery", "images", "videos"] },
      { icon: "airplane", route: ["locations"] },
    ],
    navigationBuilder: [
      { icon: "open-with", route: ["threejs", "cube", "spirit", "car", "xwing", "drakkar"] },
      { icon: "css3", route: ["css", "house", "pills", "minivan", "window"] },
      { icon: "robot-industrial", route: ["grid"] },
      { icon: "format-color-fill", route: ["colors"] },
      { icon: "cog-transfer-outline", route: ["gear"] },
      { icon: "palette", route: ["wheel"] },
      { icon: "chair-school", route: ["css-study"] },
      { icon: "", route: ["avatar"] },
    ],
    linkGithub,
    linkLinkedin,
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
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