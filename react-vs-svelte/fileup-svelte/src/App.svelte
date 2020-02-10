<script>
  import FileUpload from "./FileUpload.svelte";
  export let name;
  let files = [];
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <FileUpload multiple={true} bind:files>
    <p slot="help">Svelte wants you to upload some files</p>
    <ul slot="filelist">
      {#each files as f (f.name)}
        <li>{f.name}</li>
      {/each}
    </ul>
  </FileUpload>
</main>
