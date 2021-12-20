<template>
  <div class="gallery" v-if="database.length > 0">
    <container size="1450">
      <template v-for="(project, projectIndex) in database">
        <article v-bind:key="projectIndex" class="nano-box">
          <row :spacing="100" breakpoint="lg">
            <column size="60%">
              <img
                width="1050"
                height="551"
                :src="project.image"
                :alt="`${project.clients.join(' & ')} ${project.date}`"
              />
            </column>
            <column size="40%">
              <scroll-area color="royal-purple">
                <h1 v-html="project.clients.join(' & ')" />
                <ul class="summary">
                  <template v-if="project.types.includes('Group')">
                    <summary-row
                      v-bind:key="`projectIndex-${projectIndex}`"
                      :project="
                        helpers.getNewID(project.clients[0], project.date) +
                        '_group'
                      "
                    />
                  </template>
                  <template v-else>
                    <summary-row
                      v-bind:key="`projectIndex-${projectIndex}`"
                      :project="
                        helpers.getNewID(project.clients[0], project.date)
                      "
                    />
                  </template>
                  <li>
                    <ul class="summary" v-if="project.children.length">
                      <summary-row
                        v-for="(project2, projectIndex2) in project.children"
                        v-bind:key="`projectIndex2-${projectIndex2}`"
                        :project="project2"
                      >
                        <ul
                          class="summary"
                          v-if="projects[project2].children.length"
                        >
                          <summary-row
                            v-for="(project3, projectIndex3) in projects[
                              project2
                            ].children"
                            v-bind:key="`projectIndex3-${projectIndex3}`"
                            :project="project3"
                          >
                            <ul
                              class="summary"
                              v-if="projects[project3].children.length"
                            >
                              <summary-row
                                v-for="(project4, projectIndex4) in projects[
                                  project3
                                ].children"
                                v-bind:key="`projectIndex4-${projectIndex4}`"
                                :project="project4"
                              >
                              </summary-row>
                            </ul>
                          </summary-row>
                        </ul>
                      </summary-row>
                    </ul>
                  </li>
                </ul>
              </scroll-area>
            </column>
          </row>
        </article>
      </template>
    </container>
  </div>
  <div v-else class="loading">
    <m-icon glyph="duck" />
    <p v-html="'Loading Projects'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import summaryRow from "./summary.vue";
import helpers from "mr-kernel/modules/helpers";

export default Vue.extend({
  components: { summaryRow },
  props: {
    db: {
      type: Array,
    },
  },
  data: () => ({
    helpers,
  }),
  computed: {
    projects() {
      return {
        ...this.$root.projects,
        ...this.$root.groups,
      };
    },
    database() {
      return this.db;
    },
  },
});
</script>