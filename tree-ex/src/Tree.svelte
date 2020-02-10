<script>
  export let tree;
  const { label, data } = tree;
  export let expanded = true;
</script>

<style>
  .expanded {
    color: blue;
  }
</style>

<label on:click={() => (expanded = !expanded)} class:expanded>{label}</label>
{#if data && expanded}
  <ul>
    {#each data as item}
      <li>
        <svelte:self tree={item} />
      </li>
    {/each}
  </ul>
{/if}
