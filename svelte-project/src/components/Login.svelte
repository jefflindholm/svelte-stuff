<script>
  import { getRouter, getResponse } from "@curi/svelte";
  import auth from "../store/auth";

  const router = getRouter();
  const response = getResponse();

  function loginAndRedirect() {
    auth.login();
    const { query } = $response.location;
    router.navigate({ url: query.next || "/", method: "replace" });
  }
</script>

<div>
  <button type="button" on:click={loginAndRedirect}>Login</button>
</div>
