<script>
  import Fetch from "./Fetch.svelte";
  import Form from "./Form.svelte";
  import MyForm from "./MyForm.svelte";
  export let name;

  let searchTerm;

  function handleSubmit() {
    const { value } = this.elements.search;
    searchTerm = value;
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<hr />
<MyForm />
<hr />
<Form {handleSubmit} />
<hr />
<Fetch {searchTerm} let:data>
  <h1>A list of links</h1>
  <ul>
    {#each data as link}
      <li>
        <a href={link.url}>{link.title}</a>
      </li>
    {/each}
  </ul>
</Fetch>
