import React from "react";

interface ChessSquareProps {
	sqrRow: number;
	sqrCol: number;
}

const ChessSquare = (props: ChessSquareProps) => {
	return (
		<div
			style={{
				backgroundColor:
					(props.sqrRow + props.sqrCol) % 2 === 1 ? "black" : "white",
				width: 85,
				height: 85,
			}}
		></div>
	);
};

export default ChessSquare;
