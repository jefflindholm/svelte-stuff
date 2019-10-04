<script>
  import Link from "@curi/svelte/components/Link.svelte";
  import auth from "../store/auth";
  let methods = ["email", "phone"];
  $: authenticated = auth.authenticated();
</script>

<nav>
  <ul>
    <li>
      <Link name="Home">Home</Link>
    </li>
    <li>
      <Link name="Contact">Contact Us</Link>
      <ul>
        {#each methods as method}
          <li>
            <Link name="Method" params={{ method }}>By {method}</Link>
          </li>
        {/each}
      </ul>
    </li>
    {#if authenticated}
      <li>
        <Link name="Logout">Logout</Link>
      </li>
    {:else}
      <li>
        <Link name="Login">Login</Link>
      </li>
    {/if}
  </ul>
</nav>
