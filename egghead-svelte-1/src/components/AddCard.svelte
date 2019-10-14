<script>
  import AddIcon from "../icons/add-icon.svelte";
  import CityIllustration from "../icons/city-illustration.svelte";

  export let darkMode = false;
</script>

<style>
  .add__card {
    background-color: #ffffff;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 2rem;
    margin: 2rem;
    width: 19rem;
    height: 30rem;
    justify-items: center;
    cursor: pointer;
    border-radius: 1.75rem;
    animation: 1.25s ease-in-out 0ms 1 fadein;
    color: #443282;
  }

  .add__card-dark {
    background: linear-gradient(to bottom, #711b86, #00057a);
    color: white;
  }

  .card__title {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .body__container {
    align-self: end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  }
</style>

<div class="add__card" class:add__card-dark={darkMode}>
  <div class="header__container">
    <span class="card__title">Add city</span>
  </div>
  <div class="body__container">
    <AddIcon />
    <CityIllustration />
  </div>
</div>
