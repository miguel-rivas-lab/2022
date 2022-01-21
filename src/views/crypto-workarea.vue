<template>
  <scroll-area color="royal-purple">
    <container>
      <section class="nano-box">
        <div class="table" role="table">
          <div role="rowgroup" class="table-head">
            <row breakpoint="lg" table-element>
              <column size="10%" table-element>Code</column>
              <column size="55%" table-element>Name</column>
              <column size="35%-35" table-element>USD Value</column>
              <suffix size="35" />
            </row>
          </div>
          <div role="rowgroup" class="table-body">
            <template v-for="(row, rowIndex) in cryptoDB">
              <toggle-row breakpoint="lg" v-bind:key="rowIndex">
                <template v-slot:header>
                  <t-column size="10%" v-html="row.symbol" />
                  <t-column size="55%" v-html="row.name" />
                  <t-column size="35%-35" v-html="row.priceUsd" />
                </template>
              </toggle-row>
            </template>
          </div>
        </div>
      </section>
    </container>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import ToggleRow from "../components/toggle-row.vue";
import { currency } from "../db/crypto";

export default Vue.extend({
  components: { ToggleRow },
  data: () => ({
    cryptoDB: [],
  }),
  mounted() {
    this.$axios
      .get(`https://api.coincap.io/v2/assets?ids=${currency.join(",")}`)
      .then((response) => {
        this.cryptoDB = response.data.data
          .map((item) => {
            return {
              name: item.name,
              symbol: item.symbol,
              priceUsd: parseFloat(item.priceUsd).toFixed(4),
            };
          })
          .sort((a, b) => b.priceUsd - a.priceUsd);
      });
  },
});
</script>