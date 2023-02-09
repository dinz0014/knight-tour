import { createStyles } from "@mantine/core";
import { ChessBoardProps } from "./types";

const useStyles = createStyles((theme, { maxSize }: ChessBoardProps) => ({
	root: {
		height: maxSize,
	},
}));

export default useStyles;
