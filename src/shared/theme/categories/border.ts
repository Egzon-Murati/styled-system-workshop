import { asMutable } from '../../utils';
import color from './color';
const { colors } = color;

/**
 * Theme properties related to borders.
 * 
 * Sourced from https://skapa.ikea.net/foundations/layout-and-spacing/borders
 */

const borderWidths = [ 
  1, 
  2 
] as const;

const borderColors = [
  'grey200',
  'grey300'
] as const;

// Combination of border widths and border colors with the format "<width>-<color>"
type BorderKey = `${typeof borderWidths[number]}-${typeof borderColors[number]}`;
type Borders = {
  [key in BorderKey]: string
};

export default {
  // Theme properties cannot be readonly since this messes up styled-system typings
  borderWidths: asMutable(borderWidths), 

  // complete borders ("<x>px solid <color>")
  borders: borderColors.reduce(
    (acc, colorKey) => {
      borderWidths.forEach(width => {
        acc[`${width}-${colorKey}`] = `${width}px solid ${colors[colorKey]}`;
      });

      return acc;
    }, 
    {} as Borders
  ) as Borders,

  // border radius
  radii: [ 
    0, 4, 8, 12, 20, 48, 64, 

    /* Not part of SKAPA spec: */ 
    9999, '100%' 
  ],
};