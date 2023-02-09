import { Center } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import React from "react";
import ChessBoard from "../ChessBoard/ChessBoard";

const MainContainer = () => {
	const { ref, width, height } = useElementSize();
	const boardWidth = width - 50;
	const boardHeight = height - 50;
	return (
		<Center
			ref={ref}
			style={{
				flex: 3,
				height: "100vh",
			}}
		>
			<ChessBoard
				maxSize={boardWidth < boardHeight ? boardWidth : boardHeight}
				boardSize={8}
			></ChessBoard>
		</Center>
	);
};

export default MainContainer;
