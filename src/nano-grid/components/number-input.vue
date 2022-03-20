<template>
  <row>
    <column size="100%" v-if="label">
      <label v-html="label" />
    </column>
    <column size="100%">
      <row group>
        <column mode="prefix" size="35">
          <btn
            @click="decrease()"
            size="md"
            glyph="minus"
            color="gravel"
            title="Decrease button"
          />
        </column>
        <column size="100%-35*2">
          <p class="input-label" v-html="val" />
        </column>
        <column mode="suffix" size="35">
          <btn
            @click="increase()"
            size="md"
            glyph="plus"
            color="gravel"
            title="Increase button"
          />
        </column>
      </row>
    </column>
  </row>
</template>

<script>
import Vue from "vue";
import Row from "./row.vue";
import Column from "./column.vue";
import Btn from "./btn.vue";

export default Vue.extend({
  components: { Row, Column, Btn },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
    increment: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    val: 0,
  }),
  mounted() {
    this.val = this.value;
  },
  methods: {
    increase() {
      this.val += this.increment;
      this.$emit("update-value", this.val);
    },
    decrease() {
      this.val -= this.increment;
      this.$emit("update-value", this.val);
    },
  },
});
</script>