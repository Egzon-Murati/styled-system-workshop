import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
	space,
	SpaceProps,
	flexbox,
	FlexboxProps,
	border,
	BorderProps,
	layout,
	LayoutProps,
	color,
	ColorProps,
} from "styled-system";
import { Theme } from "../../theme";

export const Nav = styled.nav<
	SpaceProps<Theme> &
    FlexboxProps<Theme> &
    BorderProps<Theme> &
    LayoutProps<Theme>
>`
	${space}
	${flexbox}
    ${border}
    ${layout}
`;

export const NavItem = styled.li<SpaceProps<Theme>>`
	${space}
	&:not(:last-child) {
		border-right: ${(props) =>
		`${props.theme.borderWidths[1]}px solid ${props.theme.colors.borderLight}`};
	}
`;

export const NavEntry = styled(NavLink)<
    ColorProps<Theme> & 
    SpaceProps<Theme>
>`
	${color}
	${space}
    &.active {
		text-shadow: 0px 0px 1px #333333;
	}
	text-decoration: none;
`;
