import { createStyles } from "@mantine/core";
import { ChessSquareProps } from "./types";

const useStyles = createStyles((theme, { sqrRow, sqrCol, sqrSize }: ChessSquareProps) => ({
	root: {
		backgroundColor:
			(sqrRow + sqrCol) % 2 === 1
				? theme.colors.oceanBlue[theme.fn.primaryShade()]
				: theme.colors.skyBlue[2],
		width: sqrSize,
		height: sqrSize,
		transition: "all 0.1s ease-in",
	},

	selected: {
		backgroundColor: theme.colors.yellowGold[2],
	},
}));

export default useStyles;
