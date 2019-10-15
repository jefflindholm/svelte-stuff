<script>
  export let darkMode = false;
</script>

<style>
  .logo__icon {
    height: 2rem;
    margin-left: 1rem;
  }

  .logo__text {
    fill: #2b244d;
  }

  .logo__text-dark {
    fill: #ffff;
  }
</style>

<svg class="logo__icon" viewBox="150.3 22.2 213.7 42.8">
  <path fill="#00ff9b" d="M150.3 65V22.2L193 65z" data-name="Path 1" />
  <path fill="#003eff" d="M193.1 65h-42.8L193 22.2z" data-name="Path 2" />
  <text
    class="logo__text"
    class:logo__text-dark={darkMode}
    fill="#432c85"
    font-family="SegoeUI-Semibold,Segoe UI"
    font-size="30"
    font-weight="600"
    letter-spacing=".1em"
    transform="translate(237 56)">
    <tspan x="0" y="0">Minimis</tspan>
  </text>
</svg>
