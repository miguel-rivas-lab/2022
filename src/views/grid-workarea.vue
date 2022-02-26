<template lang="pug">
scroll-area(color="royal-purple")
  container(size="900")
    h1 {{ rowSize }}

    .builder-container
      row(
        :group="selection.row == 'Group'",
        :integrate="computedIntegrate",
        :spacing="computedSpacing",
        :breakpoint="computedBreakpoint"
      )
        template(v-for="(column, index) in selection.columns")
          component(
            v-bind:is="column.block",
            v-bind:key="index",
            :size="finalExpression(index)"
          )
            span.fake-btn(v-html="column.size", :style="`border-color: ${createColor(index, selection.columns.length)}`")

    hr

    row(:spacing="50")
      column(size="1/1")
        highlight-code(lang="xml")
          | {{ textareaValueVue }}
        textarea.vue-code(ref="textarea", v-html="textareaValueVue")
      column(size="80%")
      column(size="20%")
        btn.fsz(text="Get Vue Code", color="shamrock", @click="copyCode()")
</template>

<script lang="ts">
import Vue from "vue";
import { validateSize } from "nano-grid/modules/columns-manager";

export default Vue.extend({
  data: () => ({
    selection: { columns: [] },
  }),
  created() {
    this.selection = this.$store.getters.getGridSelection;
  },
  computed: {
    textareaValueVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        columns += `  <${column.block} size="${column.size}${
          parseInt(column.subtraction) > 0 ? "-" + column.subtraction : ""
        }">\n    <btn text="${
          column.size
        }" />\n  </${column.block}>\n`;
      });
      let row = `<row${this.selection.row === "Group" ? " grid" : ""}${
        this.computedIntegrate ? " integrate" : ""
      }${
        this.computedBreakpoint !== "-"
          ? ' breakpoint="' + this.computedBreakpoint + '"'
          : ""
      }${
        this.computedSpacing
          ? ' spacing="' + this.computedSpacing * 100 + '"'
          : ""
      }>\n${columns}</row>`;
      return row;
    },
    computedSpacing(): number {
      return this.selection.row === "Row" ? this.selection.spacing : 0;
    },
    computedBreakpoint(): number {
      return this.selection.row === "Row" ? this.selection.breakpoint : "-";
    },
    computedIntegrate(): boolean {
      return this.selection.row === "Group" ? this.selection.integrate : false;
    },
    rowSize(): string {
      let subtraction = 0;
      let fraction = 0;
      let fixVal = 0;
      let columns = this.selection.columns;

      columns.forEach((column) => {
        subtraction += parseInt(column.subtraction);

        let isPercent = /[%]/.test(column.size);
        let isFraction = /[/]/.test(column.size);
        if (isPercent) {
          fraction += parseInt(column.size);
        } else if (isFraction) {
          let parts = column.size.split("/");
          fraction += (parseInt(parts[0]) / parseInt(parts[1])) * 100;
        } else {
          fixVal += parseInt(column.size);
        }
      });
      let fixResult =
        fixVal - subtraction > -1
          ? "+" + (fixVal - subtraction).toString()
          : (fixVal - subtraction).toString();
      return parseInt(fixResult) !== 0
        ? `${fraction}%${fixResult}`
        : `${fraction}%`;
    },
  },
  methods: {
    finalExpression(column: number): string {
      let result = "";
      if (this.selection.columns[column].size) {
        result += this.selection.columns[column].size;
        if (parseInt(this.selection.columns[column].subtraction) > 0) {
          result += `-${this.selection.columns[column].subtraction}`;
        }
      }
      return validateSize(result);
    },
    createColor(index: number, max_color_amount: number) {
      var hue, difference, filter_max_color, filter_min_color;
      filter_max_color = max_color_amount > 359 ? 359 : max_color_amount;
      filter_min_color = filter_max_color < 3 ? 3 : filter_max_color;
      max_color_amount = filter_min_color;

      difference = 360 / max_color_amount;
      hue = (index * difference).toFixed(1);
      return `hsl(${hue} 60% 40%)`;
    },
    copyCode() {
      this.$refs.textarea.select();
      document.execCommand("copy");
    },
  },
});
</script>