import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps, position, PositionProps, layout, LayoutProps, ColorProps, color } from 'styled-system';
import { Theme } from '../../theme';

export const FlexContainer = styled.div<
  FlexboxProps<Theme> &
  SpaceProps<Theme> &
  PositionProps<Theme> &
  LayoutProps<Theme> &
  ColorProps<Theme> 
>`
  display: flex;
  ${ flexbox }
  ${ space }
  ${ position }
  ${ layout }
  ${ color }
`;