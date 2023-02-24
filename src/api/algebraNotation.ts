const codeOfa = 97;
/**
 * This function gets the row and column numbers from the algebraic notation.
 *
 * @export
 * @param {string} position - A valid position in the chess board
 * @return {*}  {[number, number]} Containing the row, col value.
 */
export function getRowColFromString(position: string): [number, number] {
	const row = 8 - parseInt(position.charAt(1));
	const col = position.charCodeAt(0) - codeOfa;

	if (row === undefined || col === undefined) {
		return [-1, -1];
	}
	return [row, col];
}

/**
 * This function converts a chess board position given by row and column to its algebraic notation
 *
 * @export
 * @param {number} row - The row index of the position
 * @param {number} col - The column index of the position
 * @return {*}  {string} - The equivalent algebraic notation of the position
 */
export function getStringFromRowCol(row: number, col: number): string {
	const colStr = String.fromCharCode(col + codeOfa);
	return colStr + (8 - row);
}
