<template lang="pug">
scroll-area(color="royal-purple")
  container(size="900")
    .builder-container
      row(
        :group="selection.group",
        :integrated="computedIntegrated",
        :spacing="computedSpacing",
        :breakpoint="computedBreakpoint",
        :vertical="computedvertical"
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

    row
      column(size="1/1")
        spirit(:text="htmlVue")
        textarea(ref="textareaHtml").vue-code {{ htmlVue }}
      column(size="1/1")
        btn.fsz(glyph="html", :text="$t('ui.section.gridBuilder.workarea.html')", color="shamrock", @click="copyCode('textareaHtml')")

    br

    row
      column(size="1/1")
        spirit(:text="hamlVue", lang="haml")
        textarea(ref="textareaHaml").vue-code {{ hamlVue }}
      column(size="1/1")
        btn.fsz(glyph="haml", :text="$t('ui.section.gridBuilder.workarea.haml')", color="shamrock", @click="copyCode('textareaHaml')")

    br

    row
      column(size="1/1")
        spirit(:text="pugVue", lang="pug")
        textarea(ref="textareaHaml").vue-code {{ pugVue }}
      column(size="1/1")
        btn.fsz(glyph="pug", :text="$t('ui.section.gridBuilder.workarea.pug')", color="shamrock", @click="copyCode('textareaPug')")
</template>

<script lang="ts">
import Vue from "vue";
import GridMixin from "../mixins/grid";
import spirit from "../components/spirit.vue";

export default Vue.extend({
  components: { spirit },
  mixins: [GridMixin],
  computed: {
    htmlVue() {
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
      let row = `<row${this.selection.group ? " nano-group" : ""}${
        this.computedvertical ? " vertical" : ""
      }${this.computedIntegrated ? " integrated" : ""}${
        this.computedBreakpoint !== ""
          ? ' breakpoint="' + this.computedBreakpoint + '"'
          : ""
      }${
        this.computedSpacing ? ' spacing="' + this.computedSpacing + '"' : ""
      }>\n${columns}</row>`;
      return row;
    },
    pugVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        const columnSize = this.getColumnSize({
          width: column.width,
          height: column.height,
          widthSubtraction: column.subtraction,
          absoluteHeight: column.absoluteHeight,
          absoluteWidth: column.absoluteWidth,
        });
        columns += `  ${column.block}(size="${
          columnSize.computedSize
        }")\n    btn(text="${columnSize.columnClass}${
          columnSize.columnClass && columnSize.columnStyle ? " - " : ""
        }${columnSize.columnStyle}")\n`;
      });
      let row = `row(${this.selection.group ? "nano-group," : ""}${
        this.computedvertical ? "vertical," : ""
      }${this.computedIntegrated ? "integrated," : ""}${
        this.computedBreakpoint !== ""
          ? 'breakpoint="' + this.computedBreakpoint + '",'
          : ""
      }${
        this.computedSpacing ? 'spacing="' + this.computedSpacing + '"' : ""
      })\n${columns}`;
      return row;
    },
    hamlVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        const columnSize = this.getColumnSize({
          width: column.width,
          height: column.height,
          widthSubtraction: column.subtraction,
          absoluteHeight: column.absoluteHeight,
          absoluteWidth: column.absoluteWidth,
        });
        columns += `  %${column.block}{size: "${
          columnSize.computedSize
        }"}\n    %btn{text: "${columnSize.columnClass}${
          columnSize.columnClass && columnSize.columnStyle ? " - " : ""
        }${columnSize.columnStyle}"}\n`;
      });
      let row = `%row{${this.selection.group ? "nano-group," : ""}${
        this.computedvertical ? "vertical," : ""
      }${this.computedIntegrated ? "integrated," : ""}${
        this.computedBreakpoint !== ""
          ? 'breakpoint="' + this.computedBreakpoint + '",'
          : ""
      }${
        this.computedSpacing ? 'spacing="' + this.computedSpacing + '"' : ""
      }}\n${columns}`;
      return row;
    },
    computedSpacing(): number {
      return !this.selection.group ? this.selection.spacing : 0;
    },
    computedBreakpoint() {
      if (this.selection.breakpoint !== "-") {
        return !this.selection.group ? this.selection.breakpoint : "";
      } else {
        return "";
      }
    },
    computedIntegrated(): boolean {
      return this.selection.group ? this.selection.integrated : false;
    },
    computedvertical(): boolean {
      return !this.selection.group ? this.selection.vertical : false;
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
    copyCode(ref) {
      this.$refs[ref].select();
      document.execCommand("copy");
    },
  },
});
</script>