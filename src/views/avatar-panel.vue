<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend General

      row
        column(size="100%")
          label Skin Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.skinColor")

      row
        column(size="100%")
          label Secondary Skin Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.skinColor2")

      row
        column(size="100%")
          label Hair Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.hairColor")

      row
        column(size="100%")
          label Beard Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.beardColor")

      row
        column(size="100%")
          label Shoes Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.shoeColor")

      row
        column(size="100%")
          label Lips Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.lipsColor")

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Shirt

      row
        column(size="100%")
          label(for="shirt-length") Length
        column(size="100%")
          input#shirt-length.cobalt-blue(
            type="range",
            min="0",
            max="2.25",
            step="0.01",
            v-model="selection.shirtLenghtPercent"
          )

      row
        column(size="100%")
          label(for="sleeve-length") Sleeve Length
        column(size="100%")
          input#sleeve-length.cobalt-blue(
            type="range",
            min="0",
            max="0.95",
            step="0.01",
            v-model="selection.armSleeveLenghtPercent"
          )

      row
        column(size="100%")
          label Shirt Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.shirtColor")

      row
        column(size="100%")
          label Sleeve Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.armSleeveColor")

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Pants

      row
        column(size="100%")
          label(for="pants-length") Length
        column(size="100%")
          input#pants-length.cobalt-blue(
            type="range",
            min="0",
            max="1",
            step="0.01",
            v-model="selection.pantsLegLenghtPercent"
          )

      row
        column(size="100%")
          label(for="pants-fit") Fit
        column(size="100%")
          input#pants-fit.cobalt-blue(
            type="range",
            min="0",
            max="31",
            step="1",
            v-model="selection.pantsFit"
          )

      row
        column(size="100%")
          label Pants Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.pantsColor")

      row
        column(size="100%")
          label Leg Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.pantsLegColor")

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Defaults

      row
        column(size="100%")
          btn(color="gold-tips", text="Sunday")

      row
        column(size="100%")
          btn(color="gold-tips", text="Saturday")

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