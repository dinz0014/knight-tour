import React from "react";
import KnightPiece from "../KnightPiece/KnightPiece";
import useStyles from "./style";
import { ChessSquareProps } from "./types";

const ChessSquare = (props: ChessSquareProps) => {
	const { classes } = useStyles(props);
	return (
		<div className={classes.root}>
			{props.containsKnight ? <KnightPiece size={props.sqrSize}></KnightPiece> : null}
		</div>
	);
};

export default ChessSquare;
