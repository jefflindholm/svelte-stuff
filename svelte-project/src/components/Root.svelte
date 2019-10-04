<script>
  import { getResponse } from "@curi/svelte";
  import NavLink from "./NavLinks.svelte";
  const response = getResponse();
</script>

<NavLink />
<svelte:component this={$response.body} />
