export function validateColors(colors: string[]) {
  const hexColorRegex = /^#[0-9a-fA-F]{8}$|#[0-9a-fA-F]{6}$|#[0-9a-fA-F]{4}$|#[0-9a-fA-F]{3}$/;

  const validColors = colors.filter(color => color.match(hexColorRegex));
  const noRepeatedValidColors = [...new Set(validColors)];

  return noRepeatedValidColors;
}
