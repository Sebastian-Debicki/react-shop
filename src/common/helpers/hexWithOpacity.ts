export const hexWithOpacity = (hex: string, opacity: number) =>
  `${hex}${Math.floor(opacity * 255).toString(16)}`;
