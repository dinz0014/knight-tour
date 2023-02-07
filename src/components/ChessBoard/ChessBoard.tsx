import { SimpleGrid } from "@mantine/core";
import { useState } from "react";
import ChessSquare from "../ChessSquare/ChessSquare";

const ChessBoard = () => {
	const [board, setBoard] = useState(() => {
		return Array(64).fill(0);
	});

	return (
		<SimpleGrid cols={8} spacing={0}>
			{board.map((_, i) => {
				return (
					<ChessSquare
						sqrRow={Math.floor(i / 8)}
						sqrCol={i % 8}
					></ChessSquare>
				);
			})}
		</SimpleGrid>
	);
};

export default ChessBoard;
