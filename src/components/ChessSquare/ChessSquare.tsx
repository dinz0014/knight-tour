import React from "react";
import KnightPiece from "../KnightPiece/KnightPiece";
import useStyles from "./style";
import { ChessSquareProps } from "./types";

const ChessSquare = (props: ChessSquareProps) => {
	const { classes, cx } = useStyles(props);
	return (
		<div
			className={cx(classes.root, {
				[classes.selected]: props.knightSelected && props.containsKnight,
			})}
		>
			{props.containsKnight ? <KnightPiece size={props.sqrSize}></KnightPiece> : null}
		</div>
	);
};

export default ChessSquare;
