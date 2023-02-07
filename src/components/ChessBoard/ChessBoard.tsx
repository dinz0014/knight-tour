import { SimpleGrid } from "@mantine/core";
import { useState } from "react";
import ChessSquare from "../ChessSquare/ChessSquare";

const ChessBoard = () => {
	const [board, setBoard] = useState(() => {
		let arr = Array(64).fill(0);
		arr[0] = 1;
		return arr;
	});

	return (
		<SimpleGrid cols={8} spacing={0}>
			{board.map((el, i) => {
				return (
					<ChessSquare
						sqrRow={Math.floor(i / 8)}
						sqrCol={i % 8}
						containsKnight={el === 1}
					></ChessSquare>
				);
			})}
		</SimpleGrid>
	);
};

export default ChessBoard;
