import styled from 'styled-components';
import { space, SpaceProps, color, ColorProps, layout, LayoutProps, border, BorderProps, PositionProps, position} from 'styled-system';
import { Theme } from '../../theme';

export const Button = styled.button<
  SpaceProps<Theme> &
  ColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  PositionProps
>`
  ${ space }
  ${ color }
  ${ layout }
  ${ border }
  ${ position }
`;