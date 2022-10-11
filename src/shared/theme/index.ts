import layout from './categories/layout';
import animation from './categories/animation';
import color from './categories/color';
import typography from './categories/typography';
import border from './categories/border';
import misc from './categories/misc';
import sizing from './categories/sizing';
import zIndex from './categories/zIndex';

/**
 * The theme follows the styled-system theme specification: https://styled-system.com/theme-specification
 * However, it also contains additional properties, that can be used as usual in any styled-component.
 */

export const theme = {
  ...layout,
  ...typography,
  ...color,
  ...animation,
  ...border,
  ...misc,
  ...sizing,
  ...zIndex
};

export type Theme = typeof theme;