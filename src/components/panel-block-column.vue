<template>
  <panel-block
    v-if="selection.columns[index]"
    @onRemove="removeBlock()"
    :title="`${name.toUpperCase()}: Column Styles`"
    :color="selection.columns[index].color"
  >
    <row>
      <column size="100%">
        <label :for="`id-${name}-size-type`">Width</label>
      </column>
      <column size="100%">
        <select
          :id="`id-${name}-size-type`"
          v-model="selection.columns[index].mode"
        >
          <option
            v-for="option in gridType"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
    </row>

    <row>
      <column size="100%" v-if="selection.columns[index].mode == 'Percent'">
        <select id="a-size" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0" />
          <option
            v-for="option in percentsValues"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
      <column size="100%" v-if="selection.columns[index].mode == 'Twelve Grid'">
        <select :id="`id-${name}-size`" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0" />
          <option
            v-for="option in twelveValues"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
      <column size="100%" v-if="selection.columns[index].mode == 'Fixed'">
        <select :id="`id-${name}-size`" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0" />
          <option
            v-for="option in fixedValues"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
      <column
        size="100%"
        v-if="selection.columns[index].mode == 'Column Based'"
      >
        <select :id="`id-${name}-size`" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0" />
          <option
            v-for="option in columnsValues"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
    </row>

    <row v-if="selection.columns[index].mode != 'Fixed'">
      <column size="100%">
        <label :for="`id-${name}-subtraction`">Width Subtraction</label>
      </column>
      <column size="100%">
        <select
          :id="`id-${name}-subtraction`"
          v-model="selection.columns[index].subtraction"
        >
          <option value="0" key="0" v-html="0" />
          <option
            v-for="option in fixedSubstractionValues"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
    </row>

    <row>
      <column size="100%">
        <label :for="`id-${name}-result`">Class Name</label>
      </column>
      <column size="100%">
        <input
          :id="`id-${name}-result`"
          disabled
          type="text"
          v-model="finalValue"
        />
      </column>
    </row>

    <row>
      <column size="100%">
        <label :for="`id-${name}-style`">Column Style</label>
      </column>
      <column size="100%">
        <select
          :id="`id-${name}-style`"
          v-model="selection.columns[index].block"
        >
          <option
            v-for="option in styles"
            :value="option"
            :key="option"
            v-html="option"
          />
        </select>
      </column>
    </row>

    <row>
      <column size="100%">
        <label>Button Color</label>
      </column>
      <column size="100%">
        <div class="radio-select">
          <template v-for="option in gColorsDB">
            <label
              :class="[option.spinalCase, 'btn', 'flat']"
              v-bind:key="option.spinalCase"
            >
              <input
                type="radio"
                :name="`id-${name}-color`"
                :value="option.spinalCase"
                v-model="selection.columns[index].color"
              />
            </label>
          </template>
        </div>
      </column>
    </row>
  </panel-block>
</template>

<script lang="ts">
import Vue from "vue";
import panelBlock from "./panel-block.vue";
import { validateSize, cssSizesWidth } from "nano-grid/modules/columns-manager";
import { gColorsDB } from "../modules/colors";

export default Vue.extend({
  components: { panelBlock },
  props: {
    name: {
      type: String,
      default: "",
    },
    index: undefined,
  },
  data: () => ({
    cssSizes: cssSizesWidth,
    gridType: ["Percent", "Fixed", "Twelve Grid", "Column Based"],
    styles: ["prefix", "column", "suffix"],
    gColorsDB: gColorsDB,
    selection: { columns: [] },
  }),
  mounted() {
    this.selection = this.$store.getters.getGridSelection;
  },
  computed: {
    fixedValues(): Array<string> {
      let result = [];
      for (let c = 5; c <= 60; c++) {
        result.push(`${c * 5}`);
      }
      return result;
    },
    fixedSubstractionValues(): Array<string> {
      let result = [];
      for (let c = 1; c <= 120; c++) {
        result.push(`${c * 5}`);
      }
      return result;
    },
    percentsValues(): Array<string> {
      let result = [];
      for (let c = 1; c * 5 <= 100; c++) {
        result.push(`${c * 5}%`);
      }
      return result;
    },
    twelveValues(): Array<string> {
      let result = [];
      for (let c = 1; c <= 12; c++) {
        result.push(`${c}/12`);
      }
      return result;
    },
    columnsValues(): Array<string> {
      let result = [];
      for (let c = 1; c <= 20; c++) {
        result.push(`1/${c}`);
      }
      return result;
    },
    finalValue(): string {
      let result = "";
      if (this.selection.columns[this.index].size) {
        result += this.selection.columns[this.index].size;
        if (this.selection.columns[this.index].subtraction > 0) {
          result += `-${this.selection.columns[this.index].subtraction}`;
        }
      }
      return validateSize(result);
    },
  },
  methods: {
    removeBlock() {
      this.$store.commit("removeColumn", this.index);
      this.selection = this.$store.getters.getGridSelection;
    },
  },
});
</script>