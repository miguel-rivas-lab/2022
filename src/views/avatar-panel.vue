<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend Presets

      row
        column(size="100%")
          btn(color="gold-tips", text="Miguel", @click="miguel()")

      row
        column(size="100%")
          btn(color="gold-tips", text="90's", @click="baggy()")

      row
        column(size="100%")
          btn(color="gold-tips", text="Work", @click="monday()")

      row
        column(size="100%")
          btn(color="gold-tips", text="Sunday", @click="sunday()")

      row
        column(size="100%")
          btn(color="gold-tips", text="Winnie the Pooh", @click="pooh()")

      row
        column(size="100%")
          btn(color="gold-tips", text="DC Boi", @click="dcBoi()")

      row
        column(size="100%")
          btn(color="gold-tips", text="Pool Boi", @click="summer()")

      row
        column(size="100%")
          btn(color="gold-tips", text="Franciscano", @click="franciscano()")

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

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Porcelain",
        @click="tan('#e9ceb2ff', '#e9957bff', '#e9957bff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Honey",
        @click="tan('#daad7fff', '#d28d5fff', '#d28d5fff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Caramel",
        @click="tan('#b68450ff', '#916d56ff', '#916d56ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Umber",
        @click="tan('#8b653dff', '#705340ff', '#705340ff')"
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

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Raven",
        @click="dyeHair('#444444ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Brunette",
        @click="dyeHair('#6d5542ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Blonde",
        @click="dyeHair('#a8723aff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Ginger",
        @click="dyeHair('#a34026ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        text="Silver",
        @click="dyeHair('#abababff')"
      )

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
    skinColors: ["#e9ceb2", "#daad7f", "#b68450", "#8b653d"],
    skinColors2: ["#e9957b", "#d28d5f", "#916d56", "#705340"],
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
  methods: {
    miguel() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = false;
      this.selection.shirtColor = { hex8: "#515151ff" };
      this.selection.armSleeveColor = { hex8: "#515151ff" };
      this.selection.pantsColor = { hex8: "#556f36ff" };
      this.selection.pantsLegColor = { hex8: "#556f36ff" };
      this.selection.shoeColor = { hex8: "#393939ff" };
      this.selection.armSleeveLengthPercent = 30 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 20 / 100;
      this.selection.pantsFit = 15;
    },
    dcBoi() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = true;
      this.selection.shirtColor = { hex8: "#646dabff" };
      this.selection.armSleeveColor = { hex8: "#646dabff" };
      this.selection.pantsColor = { hex8: "#939393ff" };
      this.selection.pantsLegColor = { hex8: "#939393ff" };
      this.selection.shoeColor = { hex8: "#393939ff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 30 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 20 / 100;
      this.selection.pantsFit = 15;
    },
    sunday() {
      this.selection.shirt = false;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.beard = true;
      this.selection.belt = true;
      this.selection.pantsColor = { hex8: "#dcdcdcff" };
      this.selection.shoeColor = { hex8: "#dcdcdcff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.pantsLegLengthPercent = 0 / 100;
    },
    pooh() {
      this.selection.shirt = true;
      this.selection.pants = false;
      this.selection.shoes = false;
      this.selection.belt = false;
      this.selection.shirtColor = { hex8: "#8d2d2eff" };
      this.selection.armSleeveColor = { hex8: "#8d2d2eff" };
      this.selection.armSleeveLengthPercent = 20 / 100;
      this.selection.shirtLengthPercent = 60 / 100;
      this.selection.pantsLegLengthPercent = 0 / 100;
    },
    summer() {
      this.selection.shirt = false;
      this.selection.pants = true;
      this.selection.shoes = false;
      this.selection.belt = true;
      this.selection.pantsColor = { hex8: "#8d2d2eff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 20 / 100;
      this.selection.shirtLengthPercent = 60 / 100;
      this.selection.pantsLegLengthPercent = 0 / 100;
    },
    monday() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = true;
      this.selection.shirtColor = { hex8: "#dcdcdcff" };
      this.selection.armSleeveColor = { hex8: "#dcdcdcff" };
      this.selection.pantsColor = { hex8: "#cebea4ff" };
      this.selection.pantsLegColor = { hex8: "#cebea4ff" };
      this.selection.shoeColor = { hex8: "#515151ff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 95 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 100 / 100;
      this.selection.pantsFit = 0;
    },
    baggy() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = false;
      this.selection.shirtColor = { hex8: "#515151ff" };
      this.selection.armSleeveColor = { hex8: "#515151ff" };
      this.selection.pantsColor = { hex8: "#edcb4bff" };
      this.selection.pantsLegColor = { hex8: "#edcb4bff" };
      this.selection.armSleeveLengthPercent = 95 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 100 / 100;
      this.selection.pantsFit = 15;
    },
    franciscano() {
      this.selection.shirt = true;
      this.selection.pants = false;
      this.selection.belt = true;
      this.selection.shoes = true;
      this.selection.shirtColor = { hex8: "#402f23ff" };
      this.selection.armSleeveColor = { hex8: "#402f23ff" };
      this.selection.shoeColor = { hex8: "#393939ff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 95 / 100;
      this.selection.shirtLengthPercent = 225 / 100;
    },
    dyeHair(color) {
      this.selection.beardColor = { hex8: color };
      this.selection.hairColor = { hex8: color };
      this.selection.hairSideColor = { hex8: color };
    },
    tan(color, secondary, lips) {
      this.selection.skinColor = { hex8: color };
      this.selection.skinColor2 = { hex8: secondary };
      this.selection.lipsColor = { hex8: lips };
    },
  },
});
</script>