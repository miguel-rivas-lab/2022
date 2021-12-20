<template>
  <li class="table" role="table">
    <div role="rowgroup" class="table-body">
      <toggle-row>
        <template v-slot:header>
          <template v-if="!projects[project].types.includes('Group')">
            <t-column size="100%-35" v-html="projects[project].title" />
          </template>
          <template v-else>
            <t-column size="100%-35" v-html="'Summary'" />
          </template>
        </template>
        <template v-slot:more>
          <t-column size="100%" v-if="projects[project]">
            <h2 v-html="projects[project].clients.join(' & ')" />
            <h3
              v-if="!projects[project].types.includes('Group')"
              v-html="projects[project].types"
            />
            <h4>
              <time v-html="projects[project].date" />
            </h4>
            <ul class="skills">
              <template>
                <template
                  v-for="(projectTool, projectToolIndex) in projects[project]
                    .tools"
                >
                  <li
                    v-bind:key="`projectToolIndex-${projectToolIndex}`"
                    v-html="projectTool"
                  />
                </template>
              </template>
            </ul>
            <ul v-if="projects[project].links.length" class="navigation">
              <template
                v-for="(projectLink, projectLinkIndex) in projects[project]
                  .links"
              >
                <li v-bind:key="`projectLinkIndex-${projectLinkIndex}`">
                  <btn
                    v-if="projectLink.self"
                    size="md"
                    color="gold-tips"
                    class="fsz"
                    :text="projectLink.text"
                    @click="sentToProjector(projectLink.url)"
                  />
                  <btn
                    v-else
                    tag="a"
                    size="md"
                    color="royal-purple"
                    target="_blank"
                    :href="projectLink.url"
                    :text="projectLink.text"
                  />
                </li>
              </template>
            </ul>
          </t-column>
          <t-column size="100%" v-if="hasSlots">
            <slot />
          </t-column>
        </template>
      </toggle-row>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import toggleRow from "./toggle-row.vue";

export default Vue.extend({
  components: { toggleRow },
  props: {
    project: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    hasSlots: undefined,
  }),
  computed: {
    projects() {
      return {
        ...this.$root.projects,
        ...this.$root.groups,
      };
    },
  },
  methods: {
    sentToProjector(src) {
      this.$store.commit("setProject", {
        value: src,
      });
      console.clear();
    },
  },
  mounted() {
    this.hasSlots = this.$slots.default?.length;
  },
});
</script>