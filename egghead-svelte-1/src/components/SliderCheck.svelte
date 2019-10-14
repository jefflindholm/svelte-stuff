<script>
  import { createEventDispatcher } from "svelte";

  export let checked;
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click", checked);
  }
</script>

<style>
  .toggle-button__container {
    display: flex;
    padding-left: 4px;
    padding-right: 4px;
  }
  .toggle__checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .toggle__label {
    cursor: pointer;
    text-indent: -9999px;
    width: 35px;
    height: 20px;
    background: grey;
    display: block;
    border-radius: 10px;
    position: relative;
  }

  .toggle__label:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 5px;
    transition: 0.3s;
  }

  .toggle__checkbox:checked + label {
    background: gray;
  }

  .toggle__checkbox:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  .toggle__label:active:after {
    width: 15px;
  }
</style>

<div class="toggle-button__container">
  <input
    id="toggle-mode"
    {checked}
    on:click={handleClick}
    type="checkbox"
    class="toggle__checkbox" />
  <label for="toggle-mode" class="toggle__label" />
</div>
