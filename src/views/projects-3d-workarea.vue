<template>
  <scroll-area color="royal-purple">
    <container>
      <ul class="palette">
        <template v-for="(item, itemIndex) in database">
          <row v-bind:key="itemIndex" tag="li" vertical>
            <column>
              <template v-for="pictureIndex in [0]">
                <img
                  v-bind:key="pictureIndex"
                  :src="`3dlib/${item.name}/000${pictureIndex + 1}.jpg`"
                />
              </template>
            </column>
          </row>
        </template>
      </ul>
    </container>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => ({
    panel: false,
    pictures: new Array(8),
    database: [
      
      // buildings
      { name: "itesa" },
      { name: "itla" },
      { name: "several" },
      { name: "avante" },
      { name: "capital" },
      { name: "pixel" },
      { name: "planttherapy" },
      { name: "enovational" },
      { name: "cabin" },

      // vehicles
      { name: "drakkar" },
      { name: "audi" },
      { name: "plane" },
      { name: "spaceship" },
      { name: "xwing" },
      
      // characters
      { name: "goose_01" },
      { name: "goose_02" },
      { name: "goose_03" },
      { name: "goose_04" },
      { name: "goose_05" },
      { name: "goose_06" },
      { name: "goose_07" },
      { name: "spirit" },

      // everyday tools
      { name: "iqra" },
      { name: "laptop" },
      { name: "horse" },
      { name: "backpack" },
      { name: "umbrella" },
      { name: "bench" },
      { name: "street-lamp" },
      { name: "flower-pot_01" },
      { name: "flower-pot_02" },

      // plants
      { name: "tree_01" },
      { name: "tree_02" },
      { name: "tree_03" },
      { name: "tree_04" },
      { name: "tree_05" },

      // planets
      { name: "planet_01" },
      { name: "planet_02" },
      { name: "planet_03" },
      { name: "planet_04" },
      { name: "planet_05" },

      //scenes
      { name: "kaspar" },
      { name: "sharpener" },
      { name: "404" },
    ],
  }),
  computed: {},
  created() {
    // this.selection = this.$store.getters.getFilterData;
  },
});
</script>