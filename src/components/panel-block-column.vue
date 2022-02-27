<template>
  <row tag="fieldset" class="row-block">
    <column size="100%">
      <legend>
        {{ selection.columns[index].size }}<span v-if="selection.columns[index].subtraction > 0"> -
        {{ selection.columns[index].subtraction }}</span> // {{finalValue}}
      </legend>

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
        :id="`id-${name}-p-size`"
        label="Size %"
        step="5"
        min="5"
        max="100"
        v-on:update-value="updateColVal(index, 'size', '%', '', $event)"
        :value="selection.columns[index].size"
      />

      <slider
        v-if="selection.columns[index].mode == 'Fixed'"
        :id="`id-${name}-f-size`"
        label="Size Px"
        step="5"
        min="5"
        max="300"
        v-on:update-value="updateColVal(index, 'size', '', '', $event)"
        :value="selection.columns[index].size"
      />

      <slider
        v-if="selection.columns[index].mode == 'Twelve Grid'"
        :id="`id-${name}-t-size`"
        label="Size Numerator (Fraction)"
        step="1"
        min="1"
        max="12"
        v-on:update-value="updateColVal(index, 'size', '/12', '', $event)"
        :value="selection.columns[index].size"
      />

      <slider
        v-if="selection.columns[index].mode == 'Column Based'"
        :id="`id-${name}-c-size`"
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
        min="5"
        max="600"
        v-on:update-value="updateColVal(index, 'subtraction', '', '', $event)"
        :value="selection.columns[index].subtraction"
      />

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
          <btn
            color="persian-red"
            text="Remove Column"
            @click="removeBlock()"
          />
        </column>
      </row>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import { validateSize } from "nano-grid/modules/columns-manager";
import { gColorsDB } from "../db/colors";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
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