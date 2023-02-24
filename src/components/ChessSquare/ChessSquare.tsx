import React from "react";
import KnightPiece from "../KnightPiece/KnightPiece";
import useStyles from "./style";
import { ChessSquareProps } from "./types";

const ChessSquare = (props: ChessSquareProps) => {
	const { classes } = useStyles(props);

	const { sqrRow, sqrCol, containsKnight, sqrSize, knightSelected, makeMove, setKnightSelected } =
		props;

	const handleSquareClick = () => {
		// Square has the knight, and it has not been selected yet.
		if (!knightSelected && containsKnight) {
			setKnightSelected(true);
			return;
		}

		// Trying to move the knight to this square
		if (!containsKnight && knightSelected) {
			makeMove(sqrRow, sqrCol);
			return;
		}

		// Trying to unselect the knight
		if (containsKnight && knightSelected) {
			setKnightSelected(false);
		}
	};

	return (
		<div className={classes.root} onClick={handleSquareClick}>
			{containsKnight ? <KnightPiece size={sqrSize}></KnightPiece> : null}
		</div>
	);
};

export default ChessSquare;
