<template lang="pug">
scroll-area(color="royal-purple")
  container(size="1450")
    article.nano-box
      h1 {{ $t('projects.section.statistics.workarea.yearlyAverage') }}
      br
      line-chart(:chart-data="allDates()")

    article.nano-box
      h1 {{ $t('projects.section.statistics.workarea.skillsUsed') }}
      br
      bar-chart(:chart-data="allTools()")

    article.nano-box
      h1 {{ $t('projects.section.statistics.workarea.database') }}
      hr

      .table(role="table")
        .table-head(role="rowgroup")
          row(breakpoint="lg", table-element)
            column(size="40%", table-element) {{ $t('projects.section.statistics.workarea.table.name') }}
            column(size="20%", table-element) {{ $t('projects.section.statistics.workarea.table.type') }}
            column(size="20%", table-element) {{ $t('projects.section.statistics.workarea.table.date') }}
            column(size="20-35%", table-element) {{ $t('projects.section.statistics.workarea.table.client') }}
            column(size="35")

        .table-body(role="rowgroup")
          template(v-for="(project, projectIndex) in projectsDBList")
            toggle-row(breakpoint="lg", v-bind:key="projectIndex")
              template(v-slot:header)
                t-column(size="40%") {{ project.title }}
                t-column(size="20%") {{ $t(project.types) }}
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
import { projectsDBList, allTools, allDates } from "../modules/format-db";

export default Vue.extend({
  components: {
    ToggleRow,
    LineChart,
    BarChart,
  },
  data: () => ({
    projectsDBList,
    allTools,
    allDates,
  }),
});
</script>