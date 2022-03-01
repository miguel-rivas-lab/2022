import Vue from "vue";
import {
  validateSize,
  cssSizesWidth,
  cssSizesHeight,
} from "nano-grid/modules/columns-manager";

export default Vue.extend({
  data: () => ({
    selection: { columns: [] },
    cssSizesWidth,
    cssSizesHeight,
  }),
  created() {
    this.selection = this.$store.getters.getGridSelection;
  },
  methods: {
    getWidth(rawWidth) {
      const width = this.cssSizesWidth[rawWidth];
      const decimal = width[0] / width[1];
      const fraction = `${width[0]}/${width[1]}`;
      let percent;
      if (parseInt(decimal * 100) === (decimal * 100)) {
        percent = `${+(decimal * 100).toFixed(2)}%`;
      }

      return { percent, fraction, decimal: decimal.toFixed(2) };
    },
    getHeight(rawHeight) {
      const height = this.cssSizesHeight[rawHeight];
      const decimal = height[0] / height[1];
      const fraction = `${height[0]}/${height[1]}`;
      let percent;
      if (parseInt(decimal * 100) === (decimal * 100)) {
        percent = `${+(decimal * 100).toFixed(2)}%`;
      }

      return { percent, fraction, decimal: decimal.toFixed(2) };
    },
    getColumnHeight(height, absoluteHeight) {
      let computedSize = "";
      if (height) {
        if (height > 0) {
          computedSize += ", ";
          if (absoluteHeight) {
            computedSize += height;
          } else {
            computedSize += this.getHeight(height).fraction + "vh";
          }
        }
      }
      return computedSize;
    },
    getColumnWidth(width, widthSubtraction, absoluteWidth) {
      let computedSize = "";
      if (width) {
        if (width > 0) {
          if (absoluteWidth) {
            computedSize += width;
          } else {
            computedSize += this.getWidth(width).fraction;
          }
          if (widthSubtraction > 0) {
            computedSize += ` - ${widthSubtraction}`;
          }
        }
      }
      return computedSize;
    },
    getColumnSize(newValues) {
      const width = newValues.width;
      const widthSubtraction = newValues.widthSubtraction;
      const height = newValues.height;
      const absoluteHeight = newValues.absoluteHeight;
      const absoluteWidth = newValues.absoluteWidth;

      let computedSize = this.getColumnWidth(
        width,
        widthSubtraction,
        absoluteWidth
      );

      computedSize += this.getColumnHeight(height, absoluteHeight);

      return { computedSize, columnClass: validateSize(computedSize).class };
    },
  },
});