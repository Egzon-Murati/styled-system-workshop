import { FlexContainer } from "../shared/components/layout/FlexContainer";
import { Container } from "../shared/components/layout/Container";

const FlexLayout = () => {
	return (
		<>
			<FlexContainer
				alignItems="flex-end"
				justifyContent="space-evenly"
				height={200}
			>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
			</FlexContainer>

			<FlexContainer
				alignItems="center"
				justifyContent="space-between"
				height={200}
			>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
			</FlexContainer>

			<FlexContainer
				alignItems="center"
				justifyContent="space-around"
				height={200}
			>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5}>
					Container
				</Container>
			</FlexContainer>

			<FlexContainer
				alignItems="center"
				justifyContent="start"
				height={200}
			>
				<Container bg="green500" width={250} p={5} mr={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5} mr={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5} mr={5}>
					Container
				</Container>
			</FlexContainer>

			<FlexContainer
				alignItems="center"
				justifyContent="end"
				height={200}
			>
				<Container bg="green500" width={250} p={5} mr={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5} mr={5}>
					Container
				</Container>
				<Container bg="green500" width={250} p={5} mr={5}>
					Container
				</Container>
			</FlexContainer>
		</>
	);
};

export default FlexLayout;
