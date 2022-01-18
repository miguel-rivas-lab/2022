<template>
  <scroll-area color="royal-purple">
    <row
      v-if="selection.currentLink.src === ''"
      class="row-block"
      tag="fieldset"
    >
      <column size="100%">
        <legend>Filter</legend>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.filterData == 'all' }"
            >
              All
              <input
                type="radio"
                name="filter"
                value="all"
                v-model="selection.filterData"
              />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.filterData == 'companies' }"
            >
              Companies
              <input
                type="radio"
                name="filter"
                value="companies"
                v-model="selection.filterData"
              />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.filterData == 'projects' }"
            >
              Projects
              <input
                type="radio"
                name="filter"
                value="projects"
                v-model="selection.filterData"
              />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.filterData == 'experiments' }"
            >
              Experiments
              <input
                type="radio"
                name="filter"
                value="experiments"
                v-model="selection.filterData"
              />
            </label>
          </column>
        </row>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.filterData == 'homework' }"
            >
              Homework
              <input
                type="radio"
                name="filter"
                value="homework"
                v-model="selection.filterData"
              />
            </label>
          </column>
        </row>
      </column>
    </row>

    <row v-else class="row-block" tag="fieldset">
      <column size="100%">
        <btn @click="closeProject()" color="persian-red" text="Close Project" />
      </column>
    </row>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {
      filterData: undefined,
      currentLink: {},
    },
  }),
  created() {
    this.selection = this.$store.getters.getFilterData;
  },
  methods: {
    closeProject() {
      this.$store.commit("setProject", {
        value: "",
      });
    },
  },
});
</script>