import { Center, Image } from "@mantine/core";
import { DragPreviewImage, useDrag } from "react-dnd";

interface knightProps {
	size: number;
}

const KnightPiece = ({ size }: knightProps) => {
	const scaling = 0.7;
	return (
		<>
			<Center className="knight-piece-container" style={{ width: size, height: size }}>
				<Image
					src={"/n_w.png"}
					style={{ width: size * scaling, height: size * scaling }}
					className="knight-piece"
				></Image>
			</Center>
		</>
	);
};

export default KnightPiece;
