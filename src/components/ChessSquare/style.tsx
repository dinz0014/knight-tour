import { createStyles } from "@mantine/core";
import { ChessSquareProps } from "./types";

const sqrBrightness = {
	selectedWithKnight: "brightness(80%)",
	doNothing: undefined,
	dark: "brightness(120%)",
	light: "brightness(80%)",
};

const useStyles = createStyles(
	(theme, { sqrRow, sqrCol, sqrSize, knightSelected, containsKnight }: ChessSquareProps) => ({
		root: {
			// Choosing the background color of the square depending on whether the square is selected or not
			backgroundColor:
				knightSelected && containsKnight
					? theme.colors.yellowGold[2]
					: (sqrRow + sqrCol) % 2 === 1
					? theme.colors.oceanBlue[theme.fn.primaryShade()]
					: theme.colors.skyBlue[2],

			filter: "brightness(100%)",
			width: sqrSize,
			height: sqrSize,
			cursor: knightSelected || containsKnight ? "pointer" : undefined,

			["&:hover"]: {
				filter:
					knightSelected && containsKnight
						? sqrBrightness.selectedWithKnight
						: !knightSelected && !containsKnight
						? sqrBrightness.doNothing
						: (sqrRow + sqrCol) % 2 === 1
						? sqrBrightness.dark
						: sqrBrightness.light,
				transition: "filter 0.1s ease",
			},
			transition: "all 0.1s ease",
		},
	})
);

export default useStyles;
