<script>
  let board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

  const players = ["X", "O"];
  let turn = 0;
  let the_winner = "";

  function clean() {
    board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
  }
  function onClick(rIdx, cIdx) {
    if (the_winner !== "") return;

    const val = board[rIdx][cIdx];
    console.log(val);
    if (val === "X" || val === "O") return;
    board[rIdx][cIdx] = players[turn];
    turn = !turn * 1;

    the_winner = winner();
  }

  const all = array => array.every((val, i, arr) => val === arr[0]);

  const row = (array, f, s, t) => [array[0][f], array[1][s], array[2][t]];

  function winner() {
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
</script>

<style>
  .row {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
    margin: 10px;
  }
  .column {
    align-content: center;
    text-align: center;
    color: #fff;
    background-color: #444;
    border-radius: 10px;
    padding: 20px;
    font-size: 150%;
  }
</style>

{#each board as row, rIdx}
  <div class="row">
    {#each row as col, cIdx}
      <div class="column" on:click={() => onClick(rIdx, cIdx)}>{col}</div>
    {/each}
  </div>
{/each}

<button on:click={clean}>Reset</button>
