export class gColor {
  label: string;
  hex: string;
  item?: string;

  constructor(label: string, hex: string, item?: string) {
    this.label = label;
    this.hex = hex;
    this.item = item;
  }

  get RGB() {
    return {
      red: parseInt(this.hex.substr(1, 2), 16),
      green: parseInt(this.hex.substr(3, 2), 16),
      blue: parseInt(this.hex.substr(5, 2), 16),
    }
  }

  get HSL() {
    const r = this.RGB.red / 255,
      g = this.RGB.green / 255,
      b = this.RGB.blue / 255,
      cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;

    let h = 0,
      s = 0,
      l = 0;

    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { hue: h, saturation: s, lightness: l };
  }

  get hsl() {
    return `hsl(${this.HSL.hue}, ${this.HSL.saturation}%, ${this.HSL.lightness}%)`;
  }

  get rgb() {
    return `rgb(${this.RGB.red}, ${this.RGB.green}, ${this.RGB.blue})`;
  }

  get spinalCase() {
    return this.label
      .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/[ ]{1,}/g, "-")
      .toLowerCase();
  }
}