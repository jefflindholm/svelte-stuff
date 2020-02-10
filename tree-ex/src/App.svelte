<script>
  import Tree from "./Tree.svelte";
  export let name;
  const tree = {
    label: "My Tree",
    data: [
      {
        label: "one",
        data: [
          { label: "one 1" },
          { label: "one 2" },
          { label: "one 3" },
          { label: "one 4" }
        ]
      },
      { label: "two", data: [] },
      { label: "three", data: [] }
    ]
  };
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
  .tree {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <div class="tree">
    <Tree {tree} />
  </div>
</main>
