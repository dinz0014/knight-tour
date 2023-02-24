interface GetValidMovesArgs {
    board: number[][];
    knightPosition: [number, number];
}

interface CheckValidMoveArgs {
    board: number[][];
    from: [number, number];
    to: [number, number];
}

interface GetKnightTourArgs {
    knightPosition: [number, number];
    boardSize: number;
}
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
    const isToValid = (tr >= 0 && tr < board.length && tc >= 0 && tc < board[0].length && board[tr][tc] === 0);

    // Check if the row and column differences matchup (either rd = 2 and cd = 1 or vice versa)
    const rd = Math.abs(fr - tr);
    const cd = Math.abs(fc - tc);
    const isMoveValid = rd <= 2 && cd <= 2 && rd + cd === 3;

    return isMoveValid && isToValid;
}

/**
 * Function to solve the knight's tour problem for this starting position.
 *
 * @export
 * @param {GetKnightTourArgs} {knightPosition, board} - The starting position for the knight and the current state of the board
 * @return {*}  {number[][]} - A representation of the board, with its cells numbered from 1 to 64 to indicate the solution.
 */
export function getKnightTour({knightPosition, boardSize}: GetKnightTourArgs) : number[][]{
    const [krStart, kcStart] = knightPosition;

    // Copy the starting position of the knight so we can return to it if any attempts fail
    let kr = krStart;
    let kc = kcStart;

    // Construct new empty board, with start position marked.
    let res = Array.from({ length: boardSize }, () =>
    Array.from({ length: boardSize }, () => 0));
    res[kr][kc] = 1;

    // Nested function to find the number of available squares for a knight 
    function getDegree([row, col] : [number, number]) : number {
        let degree = 0;
        
        directions.forEach(([dr, dc]) => {
            const [nr, nc] = [row + dr, col + dc];
            // If the new row and col are valid and the board is empty at that point, the knight can potentially go there
            if (nr >= 0 && nc >= 0 && nr < boardSize && nc < boardSize && res[nr][nc] == 0)
            {
                degree++;
            }
        })
        
        return degree;
    }

    // Nested function to get the next best move for the knight
    function getNextMove(): [number, number] {
        let mindex = -1;
        let minDegree = Number.MAX_SAFE_INTEGER;

        // Start at a random direction
        const start = Math.floor(Math.random()*1000) % boardSize;
        
        for (let count = 0; count < boardSize; count++){
            const i = (start + count) % boardSize;
            const [dr, dc] = directions[i];
            const [nr, nc] = [kr + dr, kc + dc];

            if (!checkValidMove({board : res, from : [kr, kc], to : [nr, nc]})) continue;

            // Find the move with minimum degree
            const degree = getDegree([nr, nc]);
            if (degree < minDegree){
                minDegree = degree;
                mindex = i;
            }
        }

        // If no moves available, return old position
        if (mindex === -1)
        {
            return [kr, kc];
        }

        return [kr + directions[mindex][0], kc + directions[mindex][1]];
    }

    let attempts = 5;
    // Try to solve this 5 times
    while (attempts > 0){
        // Reset the board and knight positions
        let count = 0;
        kr = krStart;
        kc = kcStart;
        res = Array.from({ length: boardSize }, () =>
        Array.from({ length: boardSize }, () => 0));
        res[kr][kc] = 1;
        
        for (let i = 1; i < boardSize * boardSize; i++){
            const [nr, nc] = getNextMove();
            if (nr === kr && nc === kc){break;}
            res[nr][nc] = res[kr][kc] + 1;
            kr = nr;
            kc = nc;
            count++;
        }
        
        // If all the squares haven't been covered try again;
        if (count != 64){
            attempts--;
        }
        else{
            break;
        }

    }

    return res;
}
