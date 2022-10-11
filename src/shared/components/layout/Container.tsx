import styled from 'styled-components';
import { space, SpaceProps, color, ColorProps, layout, LayoutProps, border, BorderProps, position, PositionProps } from 'styled-system';
import { Theme } from '../../theme';

export const Container = styled.div<
  SpaceProps<Theme> &
  ColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme>
>`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${position}
`;