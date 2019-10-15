<script>
  export let dayName;
  export let dayState;
  export let dayTemp;
</script>

<style>
  .day-weather__container {
    display: flex;
    flex-flow: column;
    margin: 2rem 1.5rem;
    justify-content: center;
    align-items: center;
  }

  .day-name__text {
    font-size: 1.5rem;
    color: #39437a;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .forecast-condition__icon {
    height: 4rem;
  }

  .day-temp__text {
    font-size: 1.85rem;
    color: #0c1066;
    letter-spacing: 0.25rem;
    margin: 0.75rem 0;
    text-align: center;
    padding-left: 0.35rem;
  }

  .day-state__text {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #2b244d;
  }
</style>

<div class="day-weather__container">
  <span class="day-name__text">{dayName}</span>
  {#if dayState === 'Clouds'}
    <svg class="forecast-condition__icon" viewBox="2436.9 -843.1 275.5 274.1">
      <g data-name="cloudy icon" transform="translate(84 790)">
        <circle
          cx="137"
          cy="137"
          r="137"
          fill="#fff"
          data-name="Ellipse 23"
          transform="translate(2354 -1633)" />
        <path
          fill="#ffde17"
          d="M2523.4-1361.5a37.2 37.2 0 0 0
          8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7
          40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29
          137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1
          8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8
          138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8
          138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1
          25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7
          138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8
          138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0
          1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z"
          data-name="Subtraction 1" />
      </g>
    </svg>
  {:else if dayState === 'Rain' || dayState === 'Drizzle'}
    <svg class="forecast-condition__icon" viewBox="3170 -843.1 163.5 242.7">
      <g data-name="Rain Icon">
        <g data-name="Water Drops">
          <path
            fill="#0032cc"
            d="M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z"
            data-name="Path 7" />
          <path
            fill="#003eff"
            d="M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z"
            data-name="Path 3" />
        </g>
      </g>
    </svg>
  {:else if dayState === 'Storm'}
    <svg class="forecast-condition__icon" viewBox="3487.9 -810.7 291.2 200.3">
      <g data-name="Strom icon" transform="translate(1959 -1260.7)">
        <ellipse
          cx="55.3"
          cy="51.7"
          class="cls-1"
          data-name="Ellipse 14"
          rx="55.3"
          ry="51.7"
          transform="translate(1529 490.4)" />
        <ellipse
          cx="55.3"
          cy="51.7"
          class="cls-1"
          data-name="Ellipse 15"
          rx="55.3"
          ry="51.7"
          transform="translate(1569.6 467.8)" />
        <circle
          cx="55.3"
          cy="55.3"
          r="55.3"
          class="cls-1"
          data-name="Ellipse 16"
          transform="translate(1618.9 476.8)" />
        <ellipse
          cx="55.3"
          cy="51.7"
          class="cls-1"
          data-name="Ellipse 17"
          rx="55.3"
          ry="51.7"
          transform="translate(1631.8 450)" />
        <ellipse
          cx="55.3"
          cy="51.7"
          class="cls-1"
          data-name="Ellipse 18"
          rx="55.3"
          ry="51.7"
          transform="translate(1687.1 477.5)" />
        <ellipse
          cx="55.3"
          cy="51.7"
          class="cls-1"
          data-name="Ellipse 19"
          rx="55.3"
          ry="51.7"
          transform="translate(1709.6 507.3)" />
        <circle
          cx="55.3"
          cy="55.3"
          r="55.3"
          class="cls-1"
          data-name="Ellipse 20"
          transform="translate(1639.6 500.1)" />
        <ellipse
          cx="55.3"
          cy="51.7"
          class="cls-1"
          data-name="Ellipse 21"
          rx="55.3"
          ry="51.7"
          transform="translate(1569.6 507.3)" />
        <path
          fill="none"
          stroke="#fd0"
          stroke-width="18"
          d="M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2"
          data-name="Path 59" />
        <path
          fill="none"
          stroke="#fd0"
          stroke-width="15"
          d="M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2"
          data-name="Path 60" />
      </g>
    </svg>
  {:else if dayState === 'Sunny' || dayState === 'Clear'}
    <svg class="forecast-condition__icon" viewBox="2050 -845 262 262">
      <circle
        cx="131"
        cy="131"
        r="131"
        fill="#ffde17"
        data-name="Sun Icon"
        transform="translate(2050 -845)" />
    </svg>
  {/if}
  <span class="day-temp__text">{dayTemp}°</span>
  <span class="day-state__text">{dayState}</span>
</div>
