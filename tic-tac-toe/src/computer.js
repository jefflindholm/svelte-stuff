const all = array => array.every((val, i, arr) => val === arr[0]);

const row = (array, f, s, t) => [array[0][f], array[1][s], array[2][t]];

export function winner(board) {
  let player = "";

  for (let i = 0; i < 3; i++) {
    if (all(board[i])) {
      return board[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    const check = row(board, i, i, i);
    if (all(check)) {
      return check[0];
    }
  }

  let check = row(board, 0, 1, 2);
  if (all(check)) {
    return check[0];
  }
  check = row(board, 2, 1, 0);
  if (all(check)) {
    return check[0];
  }

  return "";
}

const players = ["X", "O"];

export function minimax(board, turn) {
  const player = players[turn];
  const winning = winner(board);
  if (winning !== "") {
    return { score: winning === player ? 1 : -1, x: -1, y: -1 }; // winner.rawValue * player.rawValue
  }

  let moveX = -1;
  let moveY = -1;
  let score = -2;

  for (let x = 0; x < 3; x++)
    for (let y = 0; y < 3; y++) {
      // For all moves
      if (board[x][y] !== "X" && board[x][y] !== "O") {
        // Only possible moves
        var boardWithNewMove = [...board]; // Copy board to make it mutable
        boardWithNewMove[x] = [...board[x]];
        boardWithNewMove[x][y] = player; // Try the move

        let scoreForTheMove = -1 * minimax(boardWithNewMove, !turn * 1).score;

        if (scoreForTheMove > score) {
          score = scoreForTheMove;
          moveX = x;
          moveY = y;
        } // Picking move that gives oponnent the worst score
      }
    }
  if (moveX == -1) {
    return { score: 0, x: -1, y: -1 }; // No move - it's a draw
  }
  return { score, x: moveX, y: moveY };
}
