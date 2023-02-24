export interface ChessSquareProps {
	sqrRow: number;
	sqrCol: number;
	sqrSize: number;
	containsKnight: boolean;
	knightSelected: boolean;
	makeMove: (r: number, c: number) => void;
	setKnightSelected: (prevSelected: boolean) => void;
}
