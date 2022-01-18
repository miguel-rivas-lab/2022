<template>
  <div class="slider">
    <template v-for="slide in project.slides">
      <img
        width="1050"
        height="551"
        :class="{'active': slide === sliderIndex}"
        v-bind:key="'slide' + slide"
        :src="getSlide(slide)"
        :alt="`${project.clients.join(' & ')} ${project.date}`"
      />
    </template>
    <div class="controllers">
      <btn glyph="chevron-up" color="gold-tips" @click="changeSlider(-1)" />
      <btn glyph="chevron-down" color="gold-tips" @click="changeSlider(1)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    project: {
      type: Object,
    },
  },
  data: () => ({
    sliderIndex: 1,
  }),
  methods: {
    changeSlider(increase) {
      this.sliderIndex = Math.min(Math.max(this.sliderIndex + increase, 1), this.project.slides);
    },
    getSlide(index) {
      let name = this.project.image.split(".jpg");
      return name[0] + "_" + (index - 1) + ".jpg";
    },
  },
});
</script>