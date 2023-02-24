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
		board[0][0] = 1;
		return board;
	}, []);

	// State variables
	const [board, setBoard] = useState<number[][]>(initialBoard);
	const [knightLocation, setKnightLocation] = useState<string>("a" + props.boardSize);
	const [knightSelected, setKnightSelected] = useState<boolean>(false);

	const boardRef = useRef<HTMLDivElement>(null);

	// Memoise the current knight position
	const knightPosition = useMemo(() => getRowColFromString(knightLocation), [knightLocation]);

	// Get coordinates of mouse position within the ref element
	const sqrSize = props.maxSize / props.boardSize;

	const makeMove = (r: number, c: number) => {
		if (checkValidMove({ board, from: knightPosition, to: [r, c] })) {
			// Make the move if it is valid
			setKnightLocation(getStringFromRowCol(r, c));
			const newBoard = [...board];
			newBoard[r][c] = newBoard[knightPosition[0]][knightPosition[1]] + 1;
			setBoard(newBoard);
		} else {
			// TODO: instead of popping up alerts, could visually indicate (for example, highlighting the clicked square in red)
			alert("Invalid Move!");
		}
	};

	const { classes } = useStyles(props);

	// Handling clicking outside of the board component
	useEffect(() => {
		// Function to handle click events
		function handleClickOutside(event: MouseEvent) {
			if (boardRef.current && !boardRef.current.contains(event.target as Node)) {
				setKnightSelected(false); // Click occurred outside of component, toggle knightSelected
			}
		}

		// Add event listener to document object
		document.addEventListener("click", handleClickOutside);

		// Clean up event listener when component is unmounted
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [boardRef]);

	return (
		<SimpleGrid
			ref={boardRef}
			cols={props.boardSize}
			spacing={0}
			verticalSpacing={0}
			ref={ref}
			onClick={handleGridClick}
			className={classes.root}
		>
			{board.flat().map((_, i) => {
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
						makeMove={makeMove}
						setKnightSelected={setKnightSelected}
					/>
				);
			})}
			;
		</SimpleGrid>
	);
};

export default ChessBoard;
