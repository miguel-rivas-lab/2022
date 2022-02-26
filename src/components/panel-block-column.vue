<template>
  <panel-block
    v-if="selection.columns[index]"
    @onRemove="removeBlock()"
    :title="`${name.toUpperCase()}: Column Styles`"
    :color="selection.columns[index].color"
  >
    <row>
      <column size="100%">
        <label :for="`id-${name}-size-type`">Mode</label>
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

    <slider
      v-if="selection.columns[index].mode == 'Percent'"
      id="p-size"
      label="Size %"
      step="5"
      min="0"
      max="100"
      v-on:update-value="updateColVal(index, 'size', '%', '', $event)"
      :value="selection.columns[index].size"
    />

    <slider
      v-if="selection.columns[index].mode == 'Fixed'"
      id="f-size"
      label="Size Px"
      step="5"
      min="0"
      max="300"
      v-on:update-value="updateColVal(index, 'size', '', '', $event)"
      :value="selection.columns[index].size"
    />

    <slider
      v-if="selection.columns[index].mode == 'Twelve Grid'"
      id="t-size"
      label="Size Numerator (Fraction)"
      step="1"
      min="1"
      max="12"
      v-on:update-value="updateColVal(index, 'size', '/12', '', $event)"
      :value="selection.columns[index].size"
    />

    <slider
      v-if="selection.columns[index].mode == 'Column Based'"
      id="t-size"
      label="Size Denominator (Fraction)"
      step="1"
      min="1"
      max="20"
      v-on:update-value="updateColVal(index, 'size', '', '1/', $event)"
      :value="selection.columns[index].size"
    />

    <slider
      :id="`id-${name}-subtraction`"
      label="Width Subtraction"
      step="5"
      min="0"
      max="600"
      v-on:update-value="updateColVal(index, 'subtraction', '', '', $event)"
      :value="selection.columns[index].subtraction"
    />

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
import { validateSize } from "nano-grid/modules/columns-manager";
import { gColorsDB } from "../db/colors";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  components: { panelBlock },
  props: {
    name: {
      type: String,
      default: "",
    },
    index: undefined,
  },
  data: () => ({
    gridType: ["Percent", "Fixed", "Twelve Grid", "Column Based"],
    styles: ["prefix", "column", "suffix"],
    gColorsDB: gColorsDB,
    selection: { columns: [] },
  }),
  mounted() {
    this.selection = this.$store.getters.getGridSelection;
  },
  computed: {
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
    updateColVal(index, property, unit = "", prepend = "", newVal) {
      this.selection.columns[index][property] = prepend + newVal + unit;
    },
    removeBlock() {
      this.$store.commit("removeColumn", this.index);
      this.selection = this.$store.getters.getGridSelection;
    },
  },
});
</script>