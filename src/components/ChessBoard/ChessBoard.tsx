import { SimpleGrid } from "@mantine/core";
import { useDisclosure, useMouse } from "@mantine/hooks";
import React, { useMemo, useState } from "react";
import { getRowColFromString, getStringFromRowCol } from "../../api/algebraNotation";
import { checkValidMove } from "../../api/knightsTour";
import ChessSquare from "../ChessSquare/ChessSquare";

const ChessBoard = () => {
	// Memoise the initial board state
	const initialBoard: number[][] = useMemo(() => {
		const board = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 0));
		board[0][0] = -1;
		return board;
	}, []);

	// State variables
	const [board, setBoard] = useState<number[][]>(initialBoard);
	const [knightLocation, setKnightLocation] = useState<string>("a8");
	const [knightSelected, handlers] = useDisclosure(false);

	// Memoise the current knight position
	const knightPosition = useMemo(() => getRowColFromString(knightLocation), [knightLocation]);

	// Get coordinates of mouse position within the ref element
	const { ref, x, y } = useMouse();

	const handleGridClick: React.MouseEventHandler<HTMLDivElement> = () => {
		const col = Math.floor(x / 110);
		const row = Math.floor(y / 110);

		if (knightSelected) {
			if (checkValidMove({ board, from: knightPosition, to: [row, col] })) {
				const newBoard = [...board];
				newBoard[row][col] = -1;
				setBoard(newBoard);
				setKnightLocation(getStringFromRowCol(row, col));
			} else {
				alert("Invalid move");
			}

			handlers.close();
			return;
		}

		if (row !== knightPosition[0] || col !== knightPosition[1]) {
			return;
		}

		handlers.open();
	};

	return (
		<SimpleGrid cols={8} spacing={0} ref={ref} onClick={handleGridClick}>
			{board.flat().map((square, i) => {
				return (
					<ChessSquare
						key={i}
						sqrRow={Math.floor(i / 8)}
						sqrCol={i % 8}
						containsKnight={
							Math.floor(i / 8) === knightPosition[0] && i % 8 === knightPosition[1]
						}
					/>
				);
			})}
			;
		</SimpleGrid>
	);
};

export default ChessBoard;
