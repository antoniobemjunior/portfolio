export const hexToRgb = (hex) => {
  if (!hex) return null;
  const h = hex.replace("#", "");
  if (h.length === 3) {
    return {
      r: parseInt(h[0] + h[0], 16),
      g: parseInt(h[1] + h[1], 16),
      b: parseInt(h[2] + h[2], 16),
    };
  }
  if (h.length === 6) {
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16),
    };
  }
  return null;
};

export const relativeLuminance = ({ r, g, b }) => {
  const srgb = [r / 255, g / 255, b / 255].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
};

export const contrastColor = (hex) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#fff";
  const lum = relativeLuminance(rgb);
  return lum > 0.65 ? "#000" : "#fff";
};
