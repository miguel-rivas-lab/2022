<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Row Styles</legend>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.row == 'Row' }"
            >
              Row
              <input
                type="radio"
                value="Row"
                name="row-style"
                v-model="selection.row"
              />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.row == 'Group' }"
            >
              Group
              <input
                type="radio"
                value="Group"
                name="row-style"
                v-model="selection.row"
              />
            </label>
          </column>
        </row>

        <row v-if="selection.row == 'Row'">
          <column size="100%">
            <label :for="`spacing`">Spacing</label>
          </column>
          <column size="100%">
            <select :id="`spacing`" v-model="selection.spacing">
              <option
                v-for="option in spacing"
                :value="option"
                :key="option"
                v-html="option / 100"
              />
            </select>
          </column>
        </row>

        <row v-if="selection.row == 'Group'">
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.integrate }"
            >
              Integrate
              <input
                type="checkbox"
                value="Integrate"
                v-model="selection.integrate"
              />
            </label>
          </column>
        </row>

        <row v-if="selection.row == 'Row'">
          <column size="100%">
            <label for="breakpoint">Breakpoint</label>
          </column>
          <column size="100%">
            <select id="breakpoint" v-model="selection.breakpoint">
              <option
                v-for="option in breakpoint"
                :value="option"
                :key="option"
                v-html="option"
              />
            </select>
          </column>
        </row>
      </column>
    </row>

    <template v-for="(column, index) in selection.columns">
      <panel-block-column
        v-bind:key="index"
        :index="index"
        :name="(index + 1).toString()"
      />
    </template>

    <row class="row-block">
      <column size="100%">
        <btn color="gold-tips" @click="addColumn()" text="Add Column" />
      </column>
    </row>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import panelBlockColumn from "../components/panel-block-column.vue";

export default Vue.extend({
  components: {
    panelBlockColumn,
  },
  data: () => ({
    selection: { columns: [] },
    spacing: [],
    breakpoint: ["-", "sm", "md", "lg", "xl", "xxl"],
  }),
  created() {
    this.selection = this.$store.getters.getGridSelection;
    for (let c = 0; c <= 400; c += 25) {
      this.spacing.push(c);
    }
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