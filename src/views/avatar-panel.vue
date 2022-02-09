<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend General

      row
        column(size="100%")
          label(for="height") Height
        column(size="100%")
          input#height.cobalt-blue(
            type="range",
            min="0.80",
            max="1",
            step="0.01",
            v-model="selection.height"
          )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Skin Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.skinColor",
                :preset-colors="skinColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Secondary Skin Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.skinColor2",
                :preset-colors="skinColors2",
                disable-fields
              )

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

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Hair Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.hairColor",
                :preset-colors="hairColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Hair Side Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.hairSideColor",
                :preset-colors="hairColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Beard Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.beardColor",
                :preset-colors="hairColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Lips Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.lipsColor",
                :preset-colors="lipsColors",
                disable-fields
              )

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

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Shirt Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.shirtColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Sleeve Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.armSleeveColor",
                :preset-colors="fabricColors",
                disable-fields
              )

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
          label.btn.flat.charcoal(:class="{ active: selection.belt }")
            | Toggle Belt
            input(
              type="checkbox",
              value="Group",
              name="row-style",
              v-model="selection.belt"
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

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Pants Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.pantsColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Legs Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.pantsLegColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Belt Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.beltColor",
                :preset-colors="fabricColors",
                disable-fields
              )

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

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") Shoes Color
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.shoeColor",
                :preset-colors="fabricColors",
                disable-fields
              )

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
import ColorPicker from "mr-vue-color/src/components/Simple.vue";
import ToggleRow from "../components/toggle-row.vue";

export default Vue.extend({
  components: { ColorPicker, ToggleRow },
  data: () => ({
    selection: {},
    colors: { h: 10, s: 0.5, l: 0.2, a: 1 },
    skinColors: [
      "#e9ceb2",
      "#daad7f",
      "#b68450",
      "#8b653d",
    ],
     skinColors2: [
      "#e9957b",
      "#d28d5f",
      "#916d56",
      "#705340",
    ],
    fabricColors: [
      "#939393",
      "#515151",
      "#edcb4b",
      "#556f36",
      "#dcdcdc",
      "#ab6483",
      "#646dab",
      "#8d2d2e",
      "#cebea4",
    ],
    hairColors: [
      "#444444",
      "#6d5542",
      "#a34026",
      "#ababab",
      "#135440",
      "#664992",
    ],
    lipsColors: [
      "#e9957b",
      "#d28d5f",
      "#916d56",
      "#705340",
      "#8d2d2e",
      "#2c184c",
      "#181d4c",
      "#111111",
    ],
  }),
  created() {
    this.selection = this.$store.getters.getAvatarSelection;
  },
  methods: {},
});
</script>