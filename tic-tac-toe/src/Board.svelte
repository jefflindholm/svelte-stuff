<script>
  import { winner, minimax } from "./computer.js";
  let turn = 0;
  let the_winner = "";

  export let board;
  export let date; // this is used to signify a new game start time

  // re-render if the prop changes
  $: board;
  $: {
    console.log(`start ${date}`);
    turn = 0;
    the_winner = "";
  }

  const players = ["X", "O"];

  function onClick(rIdx, cIdx) {
    if (the_winner !== "") return;

    const val = board[rIdx][cIdx];
    console.log(val);
    if (val === "X" || val === "O") return;
    board[rIdx][cIdx] = players[turn];

    turn = !turn * 1;

    let computerMove = minimax(board, turn);
    console.log(computerMove);
    if (computerMove.x !== -1)
      board[computerMove.x][computerMove.y] = players[turn];
    turn = !turn * 1;

    the_winner = winner(board);
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
