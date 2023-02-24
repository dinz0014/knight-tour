import { SimpleGrid } from "@mantine/core";
import { useDisclosure, useMouse } from "@mantine/hooks";
import React, { useMemo, useState } from "react";
import { getRowColFromString, getStringFromRowCol } from "../../api/algebraNotation";
import { checkValidMove } from "../../api/knightsTour";
import ChessSquare from "../ChessSquare/ChessSquare";
import useStyles from "./style";
import { ChessBoardProps } from "./types";

const ChessBoard = (props: ChessBoardProps) => {
	// Memoise the initial board state
	const initialBoard: number[][] = useMemo(() => {
		const board = Array.from({ length: props.boardSize }, () =>
			Array.from({ length: props.boardSize }, () => 0)
		);
		board[0][0] = -1;
		return board;
	}, []);

	// State variables
	const [board, setBoard] = useState<number[][]>(initialBoard);
	const [knightLocation, setKnightLocation] = useState<string>("a" + props.boardSize);
	const [knightSelected, handlers] = useDisclosure(false);

	// Memoise the current knight position
	const knightPosition = useMemo(() => getRowColFromString(knightLocation), [knightLocation]);

	// Get coordinates of mouse position within the ref element
	const { ref, x, y } = useMouse();
	const sqrSize = props.maxSize / props.boardSize;

	const handleGridClick: React.MouseEventHandler<HTMLDivElement> = () => {
		const col = Math.floor(x / sqrSize);
		const row = Math.floor(y / sqrSize);
		const [kr, kc] = knightPosition;

		if (knightSelected) {
			// Allows user to click on the knight multiple times without encountering warnings.
			if (kr == row && kc === col) return;

			if (checkValidMove({ board, from: knightPosition, to: [row, col] })) {
				const newBoard = [...board];

				newBoard[row][col] = board[kr][kc] + 1;
				setBoard(newBoard);
				setKnightLocation(getStringFromRowCol(row, col));
			} else {
				alert("Invalid move");
			}

			handlers.close();
			return;
		}

		if (row !== kr || col !== kc) {
			return;
		}

		handlers.open();
	};

	const { classes } = useStyles(props);

	return (
		<SimpleGrid
			cols={props.boardSize}
			spacing={0}
			verticalSpacing={0}
			ref={ref}
			onClick={handleGridClick}
			className={classes.root}
		>
			{board.flat().map((square, i) => {
				return (
					<ChessSquare
						key={i}
						sqrRow={Math.floor(i / props.boardSize)}
						sqrCol={i % props.boardSize}
						sqrSize={sqrSize}
						containsKnight={
							Math.floor(i / props.boardSize) === knightPosition[0] &&
							i % props.boardSize === knightPosition[1]
						}
						knightSelected={knightSelected}
					/>
				);
			})}
			;
		</SimpleGrid>
	);
};

export default ChessBoard;
