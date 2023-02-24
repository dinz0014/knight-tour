interface GetValidMovesArgs {
    board: number[][];
    knightPosition: [number, number];
}

interface CheckValidMoveArgs {
    board: number[][];
    from: [number, number];
    to: [number, number];
}

export function getValidMoves({board, knightPosition} : GetValidMovesArgs): [number, number][] {
    const directions = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

/**
 * Function to get the valid moves for the knight from its current position
 *
 * @export
 * @param {GetValidMovesArgs} {board, knightPosition} - The current state of the board and the position of the knight
 * @return {*}  {[number, number][]} - A list of valid moves
 */
export function getValidMoves({board, knightPosition} : GetValidMovesArgs): [number, number][] {
    
    const validMoves : [number, number][] = [];
    const [kr, kc] = knightPosition;

    directions.forEach(([dx, dy]) => {
        // If the next move is a valid move, push it to the validMoves array
        const [nr, nc] = [kr + dx, kc + dy];
        if (checkValidMove({board, from : [kr, kc], to : [nr, nc]})){
                validMoves.push([kr + dx, kc + dy]);
            } 
    });

    return validMoves;
}

/**
 * Function to check if a certain knight move is valid or not
 *
 * @export
 * @param {CheckValidMoveArgs} {board, from, to} - The current state of the chess board, the position moving from, and the position moving to
 * @return {*}  {boolean} - True if the move is valid, False otherwise
 */
export function checkValidMove({board, from, to} : CheckValidMoveArgs) : boolean {
    // Check if the new position is within the bounds of the board and not visited
    const [fr, fc] = from;
    const [tr, tc] = to;
    const isToValid = (tr >= 0 && tr < board.length && tc >= 0 && tc < board[0].length && board[tr][tc] !== -1);

    // Check if the row and column differences matchup (either rd = 2 and cd = 1 or vice versa)
    const rd = Math.abs(fr - tr);
    const cd = Math.abs(fc - tc);
    const isMoveValid = rd <= 2 && cd <= 2 && rd + cd === 3;

    return isMoveValid && isToValid;
}
