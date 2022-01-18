<template>
  <scroll-area color="royal-purple">
    <div class="gallery">
      <container size="1450">
        <article class="nano-box">
          <h1>Projects Yearly Average</h1>
          <br />
          <line-chart :chart-data="dates" />
        </article>

        <article class="nano-box">
          <h1>Skills Used</h1>
          <br />
          <bar-chart :chart-data="tools" />
        </article>

        <article class="nano-box">
          <h1>Database</h1>
          <hr />

          <div class="table" role="table">
            <div role="rowgroup" class="table-head">
              <row breakpoint="lg" table-element>
                <column size="40%" table-element>Name</column>
                <column size="20%" table-element>Type</column>
                <column size="20%" table-element>Date</column>
                <column size="20-35%" table-element>Client</column>
                <suffix size="35" />
              </row>
            </div>
            <div role="rowgroup" class="table-body">
              <template v-for="(project, projectIndex) in projectsDB">
                <toggle-row breakpoint="lg" v-bind:key="projectIndex">
                  <template v-slot:header>
                    <t-column size="40%">{{ project.title }}</t-column>
                    <t-column size="20%">{{ project.types }}</t-column>
                    <t-column size="20%">{{ project.date }}</t-column>
                    <t-column size="20%-35">{{
                      project.clients.join(" & ")
                    }}</t-column>
                  </template>
                  <template v-slot:more>
                    <t-column size="200">
                      <template v-if="project.links && project.links[0]">
                        <btn
                          tag="a"
                          size="md"
                          color="royal-purple"
                          target="_blank"
                          :href="project.links[0].url"
                          text="See Preview"
                        />
                      </template>
                      <template v-else>
                        <btn
                          tag="span"
                          size="md"
                          color="persian-red"
                          text="No Link"
                        />
                      </template>
                    </t-column>
                    <t-column size="100%-200">
                      <div class="pill-container">
                        <template v-for="(tool, toolIndex) in project.tools">
                          <span
                            class="pill"
                            v-bind:key="toolIndex"
                            v-html="tool"
                          />
                        </template>
                      </div>
                    </t-column>
                  </template>
                </toggle-row>
              </template>
            </div>
          </div>
        </article>
      </container>
    </div>
  </scroll-area>
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
  data: () => ({
    panel: false,
  }),
  created() {
    this.$store.commit("setValue", {
      name: "panel",
      value: false,
    });
  },
  beforeDestroy(){
    this.$store.commit("setValue", {
      name: "panel",
      value: true,
    });
  },
  computed: {
    projectsDB() {
      return Object.values(this.$root.projects)
        .sort(sortByDate);
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
        if (typeof project.date !== "undefined") {
          let key = project.date.split("/")[0];

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