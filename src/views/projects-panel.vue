<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block.row-block(
    v-if="selection.currentLink.src === ''",
    tag="fieldset"
  )
    column(size="100%")
      legend Filter

      row
        column(size="100%")
          label.btn.flat.charcoal(
            :class="{ active: selection.filterData == 'all' }"
          )
            | All
            input(
              type="radio",
              name="filter",
              value="all",
              v-model="selection.filterData"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(
            :class="{ active: selection.filterData == 'companies' }"
          )
            | Companies
            input(
              type="radio",
              name="filter",
              value="companies",
              v-model="selection.filterData"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(
            :class="{ active: selection.filterData == 'projects' }"
          )
            | Projects
            input(
              type="radio",
              name="filter",
              value="projects",
              v-model="selection.filterData"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(
            :class="{ active: selection.filterData == 'experiments' }"
          )
            | Experiments
            input(
              type="radio",
              name="filter",
              value="experiments",
              v-model="selection.filterData"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(
            :class="{ active: selection.filterData == 'homework' }"
          )
            | Homework
            input(
              type="radio",
              name="filter",
              value="homework",
              v-model="selection.filterData"
            )

  row.row-block(v-else, tag="fieldset")
    column(size="100%")
      btn(@click="closeProject()", color="persian-red", text="Close Project")
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