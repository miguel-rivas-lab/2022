<template>
  <div class="container" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    size: {
      type: [Number, String],
    },
  },
  computed: {
    classes() {
      return [this.size ? `sz${this.size}` : ""];
    },
  },
});
</script>