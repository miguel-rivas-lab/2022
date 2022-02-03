<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Color Wheel

      template(v-for="colorIndex in selection.colors")
        row(v-bind:key="colorIndex")
          column(size="100%-35")
            btn(
              color="silver",
              size="md",
              @click="toggleBlockVisibility()",
              :text="`Color #${colorIndex}`"
            )
          suffix(size="35")
            btn(
              color="persian-red",
              size="md",
              glyph="close",
              title="Remove button",
              @click="removeBlock()"
            )
  row.row-block
    column(size="100%")
      btn(color="gold-tips", @click="addColumn()", text="Add Color")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getWheelSelection;
  },
  methods: {
    addColumn() {
      this.selection.colors++;
    },
    removeBlock() {
      this.selection.colors--;
    },
  },
});
</script>