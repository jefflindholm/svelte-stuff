<script>
  import { Router, Route } from "svero";
  import Details from "./components/Details.svelte";
  import Home from "./components/Home.svelte";
  import SliderCheck from "./components/SliderCheck.svelte";
  import Hamburger from "./svg/hamburger.svelte";
  import Logo from "./svg/logo.svelte";
  import { darkMode } from "./store.js";

  let showMenu = false;
  let darkModeActive;
  const unsubscribe = darkMode.subscribe(value => {
    darkModeActive = value;
  });
  const toggleMenu = () => (showMenu = !showMenu);
  const toggleMode = () => darkMode.update(mode => !mode);
</script>

<style>
  .mode-toggle__container {
    display: flex;
  }
  .mode-toggle__text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .root__container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 0.5fr auto;
    position: relative;
  }

  /*
================
    Header
================
*/

  /*
=========
    Slide Menu
=========
*/
  .side-menu__container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 25;
  }

  .side-menu__container-active {
    pointer-events: auto;
  }

  .side-menu__container::before {
    content: "";
    cursor: pointer;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #0c1066;
    opacity: 0;
    transition: opacity 300ms linear;
    will-change: opacity;
  }

  .side-menu__container-active::before {
    opacity: 0.3;
  }

  .slide-menu {
    box-sizing: border-box;
    transform: translateX(-103%);
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100%;
    width: 90%;
    max-width: 26rem;
    background-color: white;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 4fr 1fr;
    grid-gap: 1rem;
    transition: transform 300ms linear;
    will-change: transform;
  }

  .slide-menu-active {
    transform: none;
  }

  .menu-header {
    background: linear-gradient(to right, #00ff9b, #5f84fb);
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: "greeting greeting" "image details";
    box-sizing: border-box;
    width: 100%;
    align-content: center;
    color: white;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);
  }

  .greeting__text {
    grid-area: greeting;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    margin-top: 1rem;
    justify-self: center;
    align-self: center;
  }

  .account-details {
    grid-area: details;
    display: flex;
    flex-flow: column;
    margin-left: 1rem;
    align-self: center;
  }

  .name__text {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }

  .email__text {
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }

  .menu-body {
    display: grid;
    width: 100%;
  }

  .profile-image__container {
    grid-area: image;
    margin-right: 0.5rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    align-self: center;
    margin-left: 2rem;
  }

  .profile__image {
    max-width: 4rem;
  }

  /*
================-
    Header
================
*/
  .main__header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 0.25fr;
    grid-template-rows: 1fr;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    height: 4rem;
    margin: 0;
    align-items: center;
    transition: background-color 500ms linear;
    animation: 1s ease-in-out 0ms 1 fadein;
  }

  .main__header-dark {
    background-color: #2b244d;
    color: white;
  }
  /*Content*/
  .left__section {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 10px 30px 10px auto;
  }

  .hamburger__icon {
    grid-column-start: 2;
    grid-column-end: 3;
    z-index: 35;
    height: 1rem;
    padding-top: 0.25rem;
    margin-left: 0.2rem;
    cursor: pointer;
  }

  .logo__icon {
    height: 2rem;
    margin-left: 1rem;
    grid-column-start: 3;
  }

  .date__text {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    display: inline;
    margin: 0.5rem 0;
  }

  /*
================-
    Body
================
*/
  .main-container__bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    opacity: 0;
    background: white;
    transition: opacity 300ms linear;
  }

  .main-container__bg-dark {
    opacity: 1;
    background: linear-gradient(to bottom, #b290ff, #2e1d65);
    transition: opacity 300ms linear;
  }

  /*
================-
    Footer
================
*/
  .main__footer {
    background: transparent;
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    z-index: 100;
  }

  .copyright__text {
    letter-spacing: 0.1rem;
    color: white;
  }

  @media only screen and (max-width: 300px) {
    .slide-menu {
      width: 100%;
    }
  }
</style>

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
          src="https://avatars0.githubusercontent.com/u/145883?s=460&v=4"
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
      <div class="hamburger__icon" on:click={toggleMenu} id="Menu_Burger_Icon">
        <Hamburger darkMode={darkModeActive} />
      </div>
      <div class="logo__icon">
        <Logo darkMode={darkModeActive} />
      </div>
    </div>

    <h3 class="date__text">Today</h3>

    <div class="mode-toggle__container">
      <span class="mode-toggle__text">Light</span>
      <SliderCheck checked={darkModeActive} on:click={toggleMode} />
      <span class="mode-toggle__text">Dark</span>
    </div>
  </header>

  <main class="main__container">
    <div
      class="main-container__gb"
      class:main-container__bg-dark={darkModeActive} />
    <Router>
      <Route path="*">
        <Home darkMode={darkModeActive} />
      </Route>
      <Route path="/details:city">
        <Details darkMode={darkModeActive} />
      </Route>
    </Router>
  </main>

  <footer class="main__footer">
    <small class="copyright__text">Copyright 2019</small>
  </footer>
</div>
