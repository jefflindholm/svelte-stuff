<script>
  import { onMount } from "svelte";
  import Quotes from "./Quotes.svelte";

  export let data = [];

  // async data fetching function
  const fetchQuotes = async () => {
    try {
      const response = await fetch("http://localhost:8080/quotes");
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  };

  onMount(async function() {
    loadMoreQuotes();
  });

  async function loadMoreQuotes() {
    const quotes = await fetchQuotes();
    data = [...data, ...quotes];
    console.log(data);
  }
</script>

<div id="app">
  <h1>Great Quotes</h1>
  <p style="margin: 0 0 30px">Curated by Chris Coyier</p>
  {#if data.length === 0}
    <p>Quotes loading...</p>
  {:else}
    <Quotes quotes={data} />
  {/if}
  <button on:click={loadMoreQuotes}>Load More</button>
</div>
