<script>
  import { getRouter, getResponse } from "@curi/svelte";
  import fakeAuth from "../fakeAuth";

  const router = getRouter();
  const response = getResponse();

  function loginAndRedirect() {
    fakeAuth.login();
    const { query } = $response.location;
    router.navigate({ url: query.next || "/", method: "replace" });
  }
</script>

<div class="modal is-active">
  <div class="modal-background" />
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
      <button class="delete" aria-label="close" />
    </header>
    <section class="modal-card-body" />
    <footer class="modal-card-foot">
      <button class="button is-success" on:click={loginAndRedirect}>
        Login
      </button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
