import styled from 'styled-components';
import { color, space, SpaceProps, ColorProps, fontWeight, FontWeightProps, textAlign, TextAlignProps } from 'styled-system';
import { Theme } from '../../theme';

export type BaseProps = 
  ColorProps<Theme> & 
  SpaceProps<Theme> & 
  FontWeightProps<Theme> & 
  TextAlignProps<Theme>

export const Paragraph = styled.p<BaseProps>`
  ${ color }
  ${ space }
  ${ fontWeight }
  ${ textAlign }
`;