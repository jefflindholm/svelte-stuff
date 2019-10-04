<script>
  import { getRouter } from "@curi/svelte";
  import auth from "../store/auth";
  const router = getRouter();
  function logoutAndRedirect() {
    auth.logout();
    router.navigate({ url: "/", method: "replace" });
  }
</script>

<div>
  <button type="button" on:click={logoutAndRedirect}>Logout</button>
</div>
