<template lang="pug">
scroll-area(color="royal-purple")
  container(size="900")
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
            :size="getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).computedSize"
          )
            span.fake-btn(
              :style="`border-color: ${createColor(index, selection.columns.length)}`"
            )
              | {{ getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnClass }}
              template(
                v-if="getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnClass && getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnStyle"
              ) &nbsp;-&nbsp;
              | {{ getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnStyle }}

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
import GridMixin from "../mixins/grid";

export default Vue.extend({
  mixins: [GridMixin],
  computed: {
    textareaValueVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        const columnSize = this.getColumnSize({
          width: column.width,
          height: column.height,
          widthSubtraction: column.subtraction,
          absoluteHeight: column.absoluteHeight,
          absoluteWidth: column.absoluteWidth,
        });
        columns += `  <${column.block} size="${
          columnSize.computedSize
        }">\n    <btn text="${columnSize.columnClass}${
          columnSize.columnClass && columnSize.columnStyle ? " - " : ""
        }${columnSize.columnStyle}"/>\n  </${column.block}>\n`;
      });
      let row = `<row${this.selection.row === "Group" ? " grid" : ""}${
        this.computedIntegrate ? " integrate" : ""
      }${
        this.computedBreakpoint !== "-"
          ? ' breakpoint="' + this.computedBreakpoint + '"'
          : ""
      }${
        this.computedSpacing ? ' spacing="' + this.computedSpacing + '"' : ""
      }>\n${columns}</row>`;
      return row;
    },
    computedSpacing(): number {
      return this.selection.row === "Row" ? this.selection.spacing * 100 : 0;
    },
    computedBreakpoint(): number {
      return this.selection.row === "Row" ? this.selection.breakpoint : "-";
    },
    computedIntegrate(): boolean {
      return this.selection.row === "Group" ? this.selection.integrate : false;
    },
  },
  methods: {
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