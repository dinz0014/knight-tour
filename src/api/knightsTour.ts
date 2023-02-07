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
};

export function checkValidMove({board, from, to} : CheckValidMoveArgs) : boolean {
    const [fr, fc] = from;
    const [tr, tc] = to;
    // Check if the new position is within the bounds of the board and not visited
    const isToValid = (tr >= 0 && tr < board.length && tc >= 0 && tc < board[0].length && board[tr][tc] !== -1);

    // Check if the row and column differences matchup (either rd = 2 and cd = 1 or vice versa)
    const isMoveValid = (Math.abs(tr - fr) === 2 && Math.abs(tc - fc) === 1) || (Math.abs(tr - fr) === 1 && Math.abs(tc - fc) === 2);
    return isMoveValid && isToValid;
}
