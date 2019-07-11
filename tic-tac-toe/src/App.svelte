<script>
  import Board from "./Board.svelte";
  let board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
  let date = Date.now();
  function clean() {
    board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    date = Date.now();
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Tic tac toe</h1>

<Board {board} {date} />
<button on:click={clean}>Reset</button>
