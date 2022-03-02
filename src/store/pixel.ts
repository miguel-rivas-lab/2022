import { allColors } from "../db/wiki-colors";

export const pixelState = {
  gridSize: 32,
  pixelGrid: [],
  currentColor: allColors.pumpkin,
  lock: false,
  tool: 'brush',
};