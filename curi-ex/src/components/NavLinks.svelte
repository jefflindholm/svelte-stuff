<script>
  import Link from "@curi/svelte/components/Link.svelte";
  import fakeAuth from "../fakeAuth";

  export let name;

  $: authenticated = $fakeAuth;
  $: hamburgerMenu = false;

  function toggleMenu() {
    hamburgerMenu = !hamburgerMenu;
  }
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link class="navbar-item" href="https://bulma.io">
      <img
        alt="BULMA"
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28" />
    </Link>

    <a
      class:is-active={hamburgerMenu}
      on:click={toggleMenu}
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div
    on:click={toggleMenu}
    id="navbarBasicExample"
    class="navbar-menu"
    class:is-active={hamburgerMenu}>
    <div class="navbar-start">
      <Link name="Home" class="navbar-item">Home</Link>

      <Link name="Protected" class="navbar-item">Protected</Link>

      <div class="navbar-item has-dropdown is-hoverable">
        <Link class="navbar-link">More</Link>

        <div class="navbar-dropdown">
          <Link class="navbar-item">About</Link>
          <Link class="navbar-item">Jobs</Link>
          <Link class="navbar-item">Contact</Link>
          <hr class="navbar-divider" />
          <Link class="navbar-item">Report an issue</Link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if authenticated}
            <h2>{name}</h2>
            <Link name="Logout" class="button is-light">Log out</Link>
          {:else}
            <Link class="button is-primary">
              <strong>Sign up</strong>
            </Link>
            <Link name="Login" class="button is-light">Log in</Link>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
