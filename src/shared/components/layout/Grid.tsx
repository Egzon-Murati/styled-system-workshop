import styled from "styled-components";
import { grid, GridProps, LayoutProps, layout, color, ColorProps } from "styled-system";
import { Theme } from "../../theme";

export const Grid = styled.div<
	GridProps<Theme> &
	LayoutProps<Theme> &
	ColorProps<Theme>
>`
	display: grid;
	${grid}
	${layout}
	${color}
`;
