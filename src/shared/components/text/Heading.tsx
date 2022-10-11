import React from 'react';
import styled from 'styled-components';
import { fontWeight, FontWeightProps, textAlign, TextAlignProps, space, SpaceProps } from 'styled-system';
import { Theme } from '../../theme';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type BaseProps =
  TextAlignProps<Theme> &
  SpaceProps<Theme> &
  FontWeightProps<Theme>

const StyledHeading = styled.h1<
  BaseProps
>`
  margin: 0;
  ${ fontWeight }
  ${ textAlign }
  ${ space }
`;

type Props = React.PropsWithChildren<
  Omit<BaseProps, 'headingLevel'>
> & {
  level: HeadingLevel
}

export const Heading = (props: Props) => {
  return (
    <StyledHeading
      as={`h${props.level}`}
      {...props}
    >
      { props.children }
    </StyledHeading>
  );
};