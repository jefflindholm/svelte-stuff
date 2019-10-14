<script>
  let showMenu = false;
  let darkModeActive = false;
  const toggleMenu = () => (showMenu = !showMenu);
  const toggleMode = () => (darkModeActive = !darkModeActive);
</script>

<aside
  class="side-menu__container"
  class:side-menu_conntainer-active={showMenu}
  on:click={toggleMenu}>
  <nav class="slide-menu" class:slide-menu-active={showMenu}>
    <section class="menu-header">
      <span class="greeting__text">Welcome Back</span>
      <div class="profile-image__container">
        <img
          class="profile__image"
          src="https://avatars3.githubusercontent.com/u/5658460?s=460&v=4"
          alt="profile-image" />
      </div>
      <div class="account-details">
        <span class="name__text">Jeff Lindholm</span>
        <span class="email__text">jeff@lindholm.or</span>
      </div>
    </section>
    <section class="menu-body" />
    <section class="menu-footer" />
  </nav>
</aside>
<div class="root__container">
  <header class:main__header-dark={darkModeActive} class="main__header">

    <div class="left__section">
      <svg
        on:click={toggleMenu}
        class="hamburger__icon"
        id="Menu_Burger_Icon" />
      <svg class="logo__icon" />
    </div>

    <h3 class="date__text">Today</h3>

    <div class="mode-toggle__container">
      <span class="mode-toggle__text">Light</span>
      <label class="togglt-button__container">
        <input
          type="checkbox"
          on:click={toggleMode}
          class="mode-toggle__input" />
        <span
          class="mode-toggle__bg"
          class:mode-toggle__gb-checked={darkModeActive} />
        <span
          class="mode-toggle_circle"
          class:mode-toggle__circle-checked={darkModeActive} />
      </label>
      <span class="mode-toggle__text">Dark</span>
    </div>
  </header>

  <main class="main__container">
    <div
      class="main-container__gb"
      class:main-container__bg-dark={darkModeActive} />
    <router />
  </main>

  <footer class="main__footer">
    <small class="copyright__text">Copyright 2019</small>
  </footer>
</div>
