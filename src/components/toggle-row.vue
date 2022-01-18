<template>
  <t-row :breakpoint="breakpoint">
    <slot name="header"/>
    <t-suffix size="35">
      <btn
        :glyph="showData ? 'chevron-up' : 'chevron-down'"
        :active="showData"
        @click="toggleDataView()"
        color="elf-green"
        title="Toggle row button"
        tag="a"
      />
    </t-suffix>
    <template v-if="showData">
      <slot name="more"/>
    </template>
  </t-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    rowData: {
      type: Object,
    },
    breakpoint: {
      type: String
    }
  },
  data: () => ({
    showData: false,
  }),
  methods: {
    toggleDataView() {
      this.showData = !this.showData;
    },
  },
});
</script>