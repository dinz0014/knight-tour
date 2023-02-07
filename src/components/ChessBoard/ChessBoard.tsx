import { SimpleGrid } from "@mantine/core";
import { useState } from "react";
import ChessSquare from "../ChessSquare/ChessSquare";

const ChessBoard = () => {
	const [board, setBoard] = useState(() => {
		const arr = [];

		for (let i = 0; i < 8; i++) {
			arr.push(Array(8).fill(0));
		}

		arr[0][0] = 1;
		return arr;
	});

	return (
		<SimpleGrid cols={8} spacing={0}>
			{board.flat().map((square, i) => {
				return (
					<ChessSquare
						key={i}
						sqrRow={Math.floor(i / 8)}
						sqrCol={i % 8}
						containsKnight={square === 1}
					/>
				);
			})}
			;
		</SimpleGrid>
	);
};

export default ChessBoard;
