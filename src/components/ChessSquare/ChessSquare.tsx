import React from "react";
import { ReactComponent as KnightSVG } from "../../assets/portablejim-Chess-tile-Knight-2.svg";

interface ChessSquareProps {
	sqrRow: number;
	sqrCol: number;
	containsKnight: boolean;
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
		>
			{props.containsKnight ? <KnightSVG /> : null}
		</div>
	);
};

export default ChessSquare;
