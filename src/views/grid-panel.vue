<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Row Styles

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.group }")
            | Group
            input(type="checkbox", v-model="selection.group")

      template(v-if="!selection.group")
        row
          column(size="100%")
            label.btn.flat.charcoal(:class="{ active: selection.vertical }")
              | Vertical
              input(type="checkbox", v-model="selection.vertical")

        slider#spacing(
          label="Spacing (Rem)",
          step="0.25",
          min="0",
          max="4",
          v-on:update-value="updateVal('spacing', $event)",
          :value="selection.spacing"
        )

        row
          column(size="100%")
            label(for="breakpoint") Breakpoint
          column(size="100%")
            select#breakpoint(v-model="selection.breakpoint")
              option(
                v-for="option in breakpoint",
                :value="option",
                :key="option",
                v-html="option"
              )
      template(v-else)
        row
          column(size="100%")
            label.btn.flat.charcoal(:class="{ active: selection.integrated }")
              | Integrated
              input(
                type="checkbox",
                value="Integrated",
                v-model="selection.integrated"
              )

  row.row-block
    column(size="100%")
      btn(color="gold-tips", @click="addColumn()", text="Add Column")

  template(v-for="(column, index) in selection.columns")
    panel-block-column(
      v-bind:key="index",
      :index="index",
      :name="(index + 1).toString()"
    )
</template>

<script lang="ts">
import Vue from "vue";
import panelBlockColumn from "../components/panel-block-column.vue";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  components: {
    panelBlockColumn,
  },
  data: () => ({
    selection: { columns: [] },
    breakpoint: ["-", "sm", "md", "lg", "xl", "xxl"],
  }),
  created() {
    this.selection = this.$store.getters.getGridSelection;
  },
  methods: {
    addColumn() {
      this.$store.commit("addColumn", {
        absoluteWidth: false,
        absoluteHeight: false,
        width: 0,
        height: 0,
        subtraction: 100,
        block: "column",
      });
      this.selection = this.$store.getters.getGridSelection;
    },
  },
});
</script>