<script>
  export let quotes = [];
</script>

{#each quotes as quote}
  <div class="quote">
    {@html quote.content}
    <p class="author">- {quote.author}</p>
  </div>
{/each}
