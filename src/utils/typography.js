import { GLOBAL_SPACING_UNIT } from "utils/spacing";

export const GLOBAL_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
export const GLOBAL_FONT_SIZE = "16px";

export const FONT_SIZES = {
  XLARGE: {
    fontSize: 30,
    lineHeight: GLOBAL_SPACING_UNIT
  },
  LARGE: {
    fontSize: 25,
    lineHeight: GLOBAL_SPACING_UNIT
  },
  MEDIUM: {
    fontSize: 20,
    lineHeight: GLOBAL_SPACING_UNIT
  },
  SMALL: {
    fontSize: 16,
    lineHeight: GLOBAL_SPACING_UNIT
  },
  XSMALL: {
    fontSize: 14,
    lineHeight: GLOBAL_SPACING_UNIT
  }
};

export function toRem(fontSize, baseFontSize = 16) {
  return `${fontSize / baseFontSize}rem`;
}

export function toPx(fontSize, baseFontSize = 16) {
  return `${fontSize * baseFontSize}px`;
}
