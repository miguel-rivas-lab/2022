<template lang="pug">
scroll-area(color="royal-purple")
  container(size="1450")
    article.nano-box
      h1 Projects Yearly Average
      br
      line-chart(:chart-data="dates")

    article.nano-box
      h1 Skills Used
      br
      bar-chart(:chart-data="tools")

    article.nano-box
      h1 Database
      hr

      .table(role="table")
        .table-head(role="rowgroup")
          row(breakpoint="lg", table-element)
            column(size="40%", table-element) Name
            column(size="20%", table-element) Type
            column(size="20%", table-element) Date
            column(size="20-35%", table-element) Client
            suffix(size="35")

        .table-body(role="rowgroup")
          template(v-for="(project, projectIndex) in projectsDB")
            toggle-row(breakpoint="lg", v-bind:key="projectIndex")
              template(v-slot:header)
                t-column(size="40%") {{ project.title }}
                t-column(size="20%") {{ project.types }}
                t-column(size="20%") {{ project.turingDate }}
                t-column(size="20%-35") {{ project.clients.join(' & ') }}

              template(v-slot:more)
                t-column(size="200")
                  template(v-if="project.links && project.links[0]")
                    btn(
                      tag="a",
                      size="md",
                      color="royal-purple",
                      target="_blank",
                      :href="project.links[0].url",
                      text="See Preview"
                    )
                  template(v-else)
                    btn(
                      tag="span",
                      size="md",
                      color="persian-red",
                      text="No Link"
                    )
                t-column(size="100%-200")
                  .pill-container
                    template(v-for="(tool, toolIndex) in project.tools")
                      span.pill(v-bind:key="toolIndex", v-html="tool")
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "../components/line-chart.vue";
import BarChart from "../components/bar-chart.vue";
import ToggleRow from "../components/toggle-row.vue";
import { sortByDate } from "../modules/format-db";

export default Vue.extend({
  components: {
    ToggleRow,
    LineChart,
    BarChart,
  },
  data: () => ({}),
  computed: {
    projectsDB() {
      return Object.values(this.$root.projects).sort(sortByDate);
    },
    tools() {
      let tools = {};
      let result = [];

      this.projectsDB.forEach((project) => {
        if (typeof project.tools !== "undefined") {
          project.tools.forEach((tool) => {
            if (typeof tools[tool] === "undefined") {
              tools[tool] = 1;
            } else {
              tools[tool]++;
            }
          });
        }
      });

      let keys = Object.keys(tools);
      let values = Object.values(tools);

      keys.forEach((key, index) => {
        let newItem = new Object();
        newItem["skill"] = key;
        newItem["total"] = values[index];
        result.push(newItem);
      });

      return result;
    },
    dates() {
      let dates = {};
      let result = [];

      this.projectsDB.forEach((project) => {
        if (typeof project.turingDate !== "undefined") {
          let key = project.turingDate.split(" ")[0].substring(1);

          if (typeof dates[key] === "undefined") {
            dates[key] = 1;
          } else {
            dates[key]++;
          }
        }
      });

      let keys = Object.keys(dates);
      let values = Object.values(dates);

      keys.forEach((key, index) => {
        let newItem = new Object();
        newItem["date"] = key;
        newItem["total"] = values[index];
        result.push(newItem);
      });

      return result;
    },
  },
});
</script>