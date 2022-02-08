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

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Face

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.topHair }")
            | Toggle Top Hair
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.topHair"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.sideHair }")
            | Toggle Side Hair
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.sideHair"
            )

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.beard }")
            | Toggle Beard
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.beard"
            )

      row
        column(size="100%")
          label Hair Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.hairColor")

      row
        column(size="100%")
          label Hair Side Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.hairSideColor")

      row
        column(size="100%")
          label Beard Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.beardColor")

      row
        column(size="100%")
          label Lips Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.lipsColor")

      row
        column(size="100%")
          label(for="happiness") Happiness
        column(size="100%")
          input#happiness.cobalt-blue(
            type="range",
            min="-20",
            max="20",
            step="0.1",
            v-model="selection.happiness"
          )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend Shirt

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.shirt }")
            | Toggle Shirt
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.shirt"
            )

      row
        column(size="100%")
          label(for="shirt-length") Length
        column(size="100%")
          input#shirt-length.cobalt-blue(
            type="range",
            min="0",
            max="2.25",
            step="0.01",
            v-model="selection.shirtLengthPercent"
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
            v-model="selection.armSleeveLengthPercent"
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
          label.btn.flat.charcoal(:class="{ active: selection.pants }")
            | Toggle Pants
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.pants"
            )

      row
        column(size="100%")
          label(for="pants-length") Length
        column(size="100%")
          input#pants-length.cobalt-blue(
            type="range",
            min="0",
            max="1",
            step="0.01",
            v-model="selection.pantsLegLengthPercent"
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
      legend Shoes

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.shoes }")
            | Toggle Shoes
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.shoes"
            )

      row
        column(size="100%")
          label Color
        column(size="100%")
          btn(color="gold-tips", :text="selection.shoeColor")

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