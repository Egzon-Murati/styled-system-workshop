import { Grid } from "../shared/components/layout/Grid";
import { theme } from "../shared/theme";

const GridLayout = () => {
	return (
		<Grid
			height="100vh"
			width={1}
			gridTemplateColumns="300px 1fr 300px"
			gridTemplateRows={`${theme.heights.toolbar}px 1fr auto`}
			gridTemplateAreas="
                'panel toolbar toolbarContent'
                'panel ------- sidebar'
                'panel metadata sidebar'
                "
		>
			<Grid gridArea="panel" bg="grey100">
				Panel 1
			</Grid>
			<Grid gridArea="toolbar" bg="grey200">
				Panel 2
			</Grid>
			<Grid gridArea="toolbarContent" bg="grey500">
                Panel 3
            </Grid>
			Here goes the content...
			<Grid gridArea="sidebar" bg="grey600">
				Another panel
			</Grid>
			<Grid gridArea="metadata" bg="grey700" height={60}>
				Bottom panel
			</Grid>
		</Grid>
	);
};

export default GridLayout;
