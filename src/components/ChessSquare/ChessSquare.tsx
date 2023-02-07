import React from "react";
import KnightPiece from "../KnightPiece/KnightPiece";

interface ChessSquareProps {
	sqrRow: number;
	sqrCol: number;
	containsKnight: boolean;
}

const ChessSquare = (props: ChessSquareProps) => {
	return (
		<>
			<div
				style={{
					backgroundColor:
						(props.sqrRow + props.sqrCol) % 2 === 1
							? "black"
							: "white",
					width: 110,
					height: 110,
				}}
			>
				{props.containsKnight ? (
					<KnightPiece row={props.sqrRow} col={props.sqrCol} />
				) : null}
			</div>
		</>
	);
};

export default ChessSquare;
