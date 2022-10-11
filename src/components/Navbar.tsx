import styled from "styled-components";
import { FlexContainer } from "../shared/components/layout/FlexContainer";
import { Nav, NavItem, NavEntry } from "../shared/components/nav/Nav";

const NavList = styled(FlexContainer)`
    list-style-type: none;
`;

const Navbar = () => {
	return (
		<Nav my={5}>
			<NavList as="ul" alignItems="center">
                <NavItem>
                    <NavEntry color="textDefault" p={6} to="/flex">
                        Flex layout
                    </NavEntry>
                </NavItem>
                <NavItem>
                    <NavEntry color="textDefault" p={6} to="/grid">
                        Grid layout
                    </NavEntry>
                </NavItem>
			</NavList>
		</Nav>
	);
};

export default Navbar;
