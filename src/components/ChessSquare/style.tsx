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
	},
}));

export default useStyles;
