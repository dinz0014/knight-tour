import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		justifyContent: "space-between",
		padding: theme.spacing["md"],
		flex: 1,
		borderRight: `1px solid ${theme.colors.backdropColor[theme.fn.primaryShade() - 1]}`,
	},
	title: {
		padding: theme.spacing["sm"],
		fontSize: "4em",
	},
	welcome: {
		padding: theme.spacing["sm"],
		fontSize: "2em",
	},
	description: { padding: theme.spacing["sm"] },
	instructions: {
		padding: theme.spacing["sm"],
		fontSize: "1em",
	},
}));

export default useStyles;
