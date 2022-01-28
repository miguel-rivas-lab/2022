<template>
  <div class="carrousel">
    <button
      @blur="stopCarrousel()"
      @click="toggleCarrousel()"
      :class="[{ active: interval }, 'item']"
    >
      <template v-for="frameIndex in frames">
        <v-image
          v-bind:key="frameIndex"
          v-nano-tooltip.right="'olis'"
          :config="{
            image: items[frameIndex - 1].config,
            x: item.position.x,
            y: item.position.y,
            opacity: currentFrame + 1 === frameIndex ? 1 : 0,
          }"
        />
      </template>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    item: {
      type: Object,
    },
    start: {
      type: Number,
      default: 0,
    },
    rotationDelay: {
      type: Number,
      default: 200,
    },
  },
  data: () => ({
    currentFrame: 0,
    interval: undefined,
    frames: 3,
    increment: 1,
    items: [],
    playState: 1,
  }),
  created() {
    for (let frame = 1; frame <= this.frames; frame++) {
      this.items.push({ config: undefined, temp: undefined });
      this.items[frame - 1].temp = new window.Image();
      this.items[
        frame - 1
      ].temp.src = `3dlib/${this.item.name}/000${frame}.jpg`;
      this.items[frame - 1].temp.onload = () => {
        this.items[frame - 1].config = this.items[frame - 1].temp;
      };
    }
  },
  mounted() {
    this.currentFrame = this.start;
    this.playCarrousel();
  },
  methods: {
    playCarrousel() {
      this.interval = setInterval(() => {
        this.currentFrame += this.increment * this.playState;
        if (this.currentFrame >= this.frames - 1) {
          this.increment = this.increment * -1;
        }
        if (this.currentFrame < 1) {
          this.increment = this.increment * -1;
        }
      }, this.rotationDelay);
    },
  },
});
</script>