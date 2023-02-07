import { Center, Image } from "@mantine/core";
import { DragPreviewImage, useDrag } from "react-dnd";

interface knightProps {
	row: number;
	col: number;
}

const KnightPiece = ({ row, col }: knightProps) => {
	return (
		<>
			<Center
				className="knight-piece-container"
				style={{ width: 110, height: 110 }}
			>
				<Image
					src={"/n_w.png"}
					style={{ width: 80, height: 80 }}
					className="knight-piece"
				></Image>
			</Center>
		</>
	);
};

export default KnightPiece;
