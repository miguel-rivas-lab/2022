<template>
  <row tag="fieldset" class="row-block">
    <column size="100%">
      <legend>
        {{
          getColumnSize({
            width: selection.columns[index].width,
            height: selection.columns[index].height,
            widthSubtraction: selection.columns[index].subtraction,
            absoluteHeight: absoluteHeight,
            absoluteWidth: absoluteWidth,
          }).computedSize
        }}
        <small>
          {{
            getColumnSize({
              width: selection.columns[index].width,
              height: selection.columns[index].height,
              widthSubtraction: selection.columns[index].subtraction,
              absoluteHeight: absoluteHeight,
              absoluteWidth: absoluteWidth,
            }).columnClass
          }}
          {{
            getColumnSize({
              width: selection.columns[index].width,
              height: selection.columns[index].height,
              widthSubtraction: selection.columns[index].subtraction,
              absoluteHeight: absoluteHeight,
              absoluteWidth: absoluteWidth,
            }).columnStyle
          }}
        </small>
      </legend>

      <row>
        <column size="100%">
          <label class="btn flat charcoal" :class="{ active: absoluteWidth }">
            Absolute Width
            <input type="checkbox" v-model="absoluteWidth" />
          </label>
        </column>
      </row>

      <slider
        v-if="absoluteWidth"
        :id="`id-${name}-width`"
        label="Width (Px)"
        step="5"
        min="0"
        max="600"
        v-on:update-value="updateColVal('width', $event)"
        :value="selection.columns[index].width"
      />

      <template v-else>
        <row>
          <column size="100%">
            <label :for="`id-${name}-width`">Width</label>
          </column>
          <column size="100%">
            <row class="nano-slider-alt" group>
              <column size="100%">
                <input
                  :id="`id-${name}-width`"
                  type="range"
                  min="0"
                  class="cobalt-blue"
                  :max="cssSizesWidth.length - 1"
                  step="1"
                  v-model="selection.columns[index].width"
                />
              </column>
              <column size="55%">
                <p class="input-label">
                  {{ getWidth(selection.columns[index].width).fraction }}
                  <span v-if="getWidth(selection.columns[index].width).percent">
                    &nbsp;&nbsp;||&nbsp;&nbsp;{{
                      getWidth(selection.columns[index].width).percent
                    }}
                  </span>
                </p>
              </column>
            </row>
          </column>
        </row>

        <slider
          :id="`id-${name}-subtraction`"
          label="Width Subtraction"
          step="5"
          min="0"
          max="600"
          v-on:update-value="updateColVal('subtraction', $event)"
          :value="selection.columns[index].subtraction"
        />
      </template>

      <row>
        <column size="100%">
          <label class="btn flat charcoal" :class="{ active: absoluteHeight }">
            Absolute Height
            <input type="checkbox" v-model="absoluteHeight" />
          </label>
        </column>
      </row>

      <slider
        v-if="absoluteHeight"
        :id="`id-${name}-height`"
        label="Height (Px)"
        step="5"
        min="0"
        max="600"
        v-on:update-value="updateColVal('height', $event)"
        :value="selection.columns[index].height"
      />

      <row v-else>
        <column size="100%">
          <label :for="`id-${name}-height`">Height</label>
        </column>
        <column size="100%">
          <row class="nano-slider-alt" group>
            <column size="100%">
              <input
                :id="`id-${name}-height`"
                type="range"
                min="0"
                class="cobalt-blue"
                :max="cssSizesHeight.length - 1"
                step="1"
                v-model="selection.columns[index].height"
              />
            </column>
            <column size="55%">
              <p class="input-label">
                {{ getHeight(selection.columns[index].height).fraction }}
                <span v-if="getHeight(selection.columns[index].height).percent">
                  &nbsp;&nbsp;||&nbsp;&nbsp;{{
                    getHeight(selection.columns[index].height).percent
                  }}
                </span>
              </p>
            </column>
          </row>
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
import Slider from "../mixins/slider";
import GridMixin from "../mixins/grid";

export default Vue.extend({
  mixins: [Slider, GridMixin],
  props: {
    name: {
      type: String,
      default: "",
    },
    index: undefined,
  },
  data: () => ({
    styles: ["prefix", "column", "suffix"],
    absoluteWidth: undefined,
    absoluteHeight: undefined,
  }),
  mounted() {
    this.absoluteWidth = this.selection.columns[this.index].absoluteWidth;
    this.absoluteHeight = this.selection.columns[this.index].absoluteHeight;
  },
  watch: {
    absoluteWidth: function () {
      this.selection.columns[this.index].width = this.absoluteWidth
        ? 300
        : this.cssSizesWidth.length - 1;
      this.selection.columns[this.index].subtraction = 0;
    },
    absoluteHeight: function () {
      this.selection.columns[this.index].height = 0;
    },
  },
  methods: {
    updateColVal(property, newVal) {
      this.selection.columns[this.index][property] = parseFloat(newVal);
    },
    removeBlock() {
      this.$store.commit("removeColumn", this.index);
      this.selection = this.$store.getters.getGridSelection;
    },
  },
});
</script>