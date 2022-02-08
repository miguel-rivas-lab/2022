<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Avatar Settings

      row
        column(size="100%")
          label(for="pants-lenght") Pants Lenght
        column(size="100%")
          input#pants-lenght.cobalt-blue(
            type="range",
            min="0",
            max="1",
            step="0.01",
            v-model="selection.pantsLegLenghtPercent"
          )

      row
        column(size="100%")
          label(for="pants-lenght") Pants Fit
        column(size="100%")
          input#pants-lenght.cobalt-blue(
            type="range",
            min="0",
            max="31",
            step="1",
            v-model="selection.pantsFit"
          )

      row
        column(size="100%")
          label(for="pants-lenght") Sleeve Lenght
        column(size="100%")
          input#pants-lenght.cobalt-blue(
            type="range",
            min="0",
            max="0.95",
            step="0.01",
            v-model="selection.armSleeveLenghtPercent"
          )

      row
        column(size="100%")
          label(for="pants-lenght") Shirt Lenght
        column(size="100%")
          input#pants-lenght.cobalt-blue(
            type="range",
            min="0",
            max="2.25",
            step="0.01",
            v-model="selection.shirtLenghtPercent"
          )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Defaults

      row
        column(size="100%")
          btn(color="gold-tips", text="Winnie the Pooh")

      row
        column(size="100%")
          btn(color="gold-tips", text="DC Boi")

      row
        column(size="100%")
          btn(color="gold-tips", text="Cat Woman")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getAvatarSelection;
  },
});
</script>