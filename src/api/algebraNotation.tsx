const codeOfa = 97;

export function getRowColFromString(position: string): [number, number] {
	const row = 8 - parseInt(position.charAt(1));
	const col = position.charCodeAt(0) - codeOfa;

	if (row === undefined || col === undefined) {
		return [-1, -1];
	}
	return [row, col];
}

export function getStringFromRowCol(row: number, col: number): string {
	const colStr = String.fromCharCode(col + codeOfa);
	return colStr + (8 - row);
}
