<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Row Styles

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.row == 'Row' }")
            | Row
            input(
              type="radio",
              value="Row",
              name="row-style",
              v-model="selection.row"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(
            :class="{ active: selection.row == 'Group' }"
          )
            | Group
            input(
              type="radio",
              value="Group",
              name="row-style",
              v-model="selection.row"
            )

      slider(
        v-if="selection.row == 'Row'"
        id="spacing"
        label="Spacing"
        step="0.25"
        min="0"
        max="4"
        v-on:update-value="updateVal('spacing', $event)"
        :value="selection.spacing"
      )

      row(v-if="selection.row == 'Group'")
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.integrate }")
            | Integrate
            input(
              type="checkbox",
              value="Integrate",
              v-model="selection.integrate"
            )

      row(v-if="selection.row == 'Row'")
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

  template(v-for="(column, index) in selection.columns")
    panel-block-column(
      v-bind:key="index",
      :index="index",
      :name="(index + 1).toString()"
    )

  row.row-block
    column(size="100%")
      btn(color="gold-tips", @click="addColumn()", text="Add Column")
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
        mode: "Percent",
        size: "50%",
        subtraction: "0",
        color: "desert",
        expression: "sz1b4",
        block: "column",
      });
      this.selection = this.$store.getters.getGridSelection;
    },
  },
});
</script>