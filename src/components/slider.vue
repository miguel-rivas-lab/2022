<template lang="pug">
row
  column(size="100%", v-if="label")
    label(:for="$attrs.id", v-html="label")
  column(size="100%")
    row.nano-slider(group, integrated)
      column(size="100%-40")
        input(
          :class="color",
          v-bind="$attrs",
          type="range",
          v-model="val",
          @change="updateValue()"
        )
      column(size="40")
        input(
          type="number",
          :min="$attrs.min",
          :max="$attrs.max",
          v-model="val",
          @change="updateValue()"
        )
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "cobalt-blue",
    },
    value: {
      type: Number,
    },
    label: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    val: 0,
  }),
  methods: {
    updateValue() {
      this.$emit("update-value", this.val);
    },
  },
  created() {
    this.val = this.value;
  },
});
</script>