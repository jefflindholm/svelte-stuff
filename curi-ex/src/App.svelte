<script>
  import Router from "@curi/svelte/components/Router.svelte";
  import NavLinks from "./components/NavLinks.svelte";
  import Content from "./components/Content.svelte";

  export let router;
  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Router {router}>
  <NavLinks {name} />
  <Content />
</Router>
