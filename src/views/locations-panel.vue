<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Map Controllers</legend>

        <row>
          <column size="100%">
            <label
              class="btn flat charcoal"
              :class="{ active: selection.viewPath }"
            >
              Toggle Path
              <input type="checkbox" v-model="selection.viewPath" />
            </label>
          </column>
        </row>
      </column>
    </row>

    <row class="row-block" tag="fieldset">
      <column size="100%">
        <legend>Locations</legend>

        <row>
          <column size="100%">
            <ul class="summary">
              <template v-for="(location, locationIndex) in locationsDB">
                <li class="table" role="table" v-bind:key="locationIndex">
                  <div role="rowgroup" class="table-body">
                    <toggle-row>
                      <template v-slot:header>
                        <t-column size="100%-35" v-html="location.title" />
                      </template>
                      <template v-slot:more>
                        <t-column size="100%">
                          <h3 v-html="location.description" />
                          <h4>
                            <time v-html="location.date" />
                          </h4>
                          <ul class="list">
                            <template
                              v-for="(item, itemIndex) in location.list"
                            >
                              <li
                                v-bind:key="`itemIndex-${itemIndex}`"
                                v-html="item"
                              />
                            </template>
                          </ul>
                          <ul class="skills">
                            <template
                              v-for="(tool, toolIndex) in location.tools"
                            >
                              <li
                                v-bind:key="`toolIndex${toolIndex}`"
                                v-html="tool"
                              />
                            </template>
                          </ul>
                          <div class="area-box">
                            <row group>
                              <column size="55">
                                <btn tag="span" color="silver" text="lat:" />
                              </column>
                              <column size="100%-55">
                                <p
                                  class="input-label"
                                  v-html="location.position.lat.toFixed(8)"
                                />
                              </column>
                            </row>
                            <row group>
                              <column size="55">
                                <btn tag="span" color="silver" text="lng:" />
                              </column>
                              <column size="100%-55">
                                <p
                                  class="input-label"
                                  v-html="location.position.lng.toFixed(8)"
                                />
                              </column>
                            </row>
                          </div>
                        </t-column>
                        <t-column size="100%">
                          <btn
                            @click="centerMap(location.position, location.zoom)"
                            color="gold-tips"
                            text="Go to location"
                          />
                        </t-column>
                      </template>
                    </toggle-row>
                  </div>
                </li>
              </template>
            </ul>
          </column>
        </row>
      </column>
    </row>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import toggleRow from "../components/toggle-row.vue";
import { type } from "mr-kernel/enums/types";

export default Vue.extend({
  components: { toggleRow },
  data: () => ({
    panel: false,
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getLocationSelection;
  },
  computed: {
    locationsDB() {
      return Object.values({
        ...this.$root.groups,
      }).filter((item) => item.types.includes(type.location));
    },
  },
  methods: {
    centerMap(position, zoom = 15) {
      this.$store.commit("centerMap", {
        position: position,
        zoom: zoom,
      });
    },
  },
});
</script>