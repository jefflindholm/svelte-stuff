<script>
  import { onMount, onDestroy } from "svelte";
  import { getForcast } from "../services/weather-service";
  import Paris from "../svg/city-paris.svelte";
  import Doha from "../svg/city-doha.add-icon";
  import Default from "../svg/city-default.svelte";
  import DayDisplay from "./DayDisplay.svelte";

  // props
  export let city;
  export let temp;
  export let hum;
  export let state;
  export let wind;

  // internal values
  let dayData = [{}, {}, {}, {}, {}];

  let today;

  onMount(async () => {
    const todayNumberInWeek = new Date().getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    today = days[todayNumberInWeek];

    // TODO: watch for route changes and redo this
    dayData = [null, null, null, null, null];
    const forcast = await getForcast(this.city);
    console.log(forcast);

    for (let i = 0; i < data.length; i++) {
      const date = new Date(data[i].dt_txt).getDay();
      console.log(days[date]);
      const data = {};
      data.dayName = days[date];
      data.dayState = forcast[i].weather[0].main;
      data.dayTemp = Math.round(forcast[i].main.temp);
      console.log(data);
      if (
        (date === todayNumberInWeek + 1 ||
          (todayNumberInWeek === 6 && date === 0)) &&
        !dayData[0]
      ) {
        dayData[0] = data;
      } else if (
        !!dayData[0] &&
        !dayData[1] &&
        days[date] !== this.dayData[0].dayName
      ) {
        dayData[1] = data;
      } else if (
        !!dayData[1] &&
        !dayData[2] &&
        days[date] !== this.dayData[1].dayName
      ) {
        dayData[2] = data;
      } else if (
        !!dayData[2] &&
        !dayData[3] &&
        days[date] !== this.dayData[2].dayName
      ) {
        dayData[3] = data;
      } else if (
        !!dayData[3] &&
        !dayData[4] &&
        days[date] !== this.dayData[3].dayName
      ) {
        dayData[4] = data;
      }
    }
  });
</script>

<style>
  .details-page__wrapper-dark {
    background: linear-gradient(#fc7db8, #495cfc);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .background-gradient__circle {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
    height: 120%;
  }

  .main-weather__card-dark {
    background-color: white;
    height: 85%;
    width: 60%;
    border-radius: 1rem;
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.25fr;
    justify-items: center;
  }

  .card-header__container-dark {
    width: 100%;
    max-height: 20rem;
    position: relative;
    z-index: 1;
  }

  .back__button {
    position: absolute;
    top: 2rem;
    left: 2.25rem;
    width: 5rem;
    cursor: pointer;
    z-index: 3;
  }

  .header-content__wrapper {
    position: absolute;
    z-index: 2;
    color: white;
    top: 0;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
  }

  .temperature__text {
    font-size: 6rem;
    letter-spacing: 0.75rem;
  }

  .city-name__container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25%;
  }

  .city-name__underline {
    background: transparent;
    border-radius: 5px;
    height: 5px;
    box-shadow: 0 3rem 0 0 #ffffff;
  }

  .city-name__text {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 1.75rem;
    padding-bottom: 2rem;
  }

  .today-weather__container {
    align-self: center;
    justify-self: center;
    display: grid;
    width: 100%;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 2rem;
  }

  .temp-state__container {
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .weather-state__text {
    letter-spacing: 0.5rem;
    font-size: 1.15rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .hum-wind__container {
    display: flex;
    align-items: center;
    margin-left: -4rem;
  }

  .hum-wind__separator {
    margin: 0 2rem;
    width: 2px;
    height: 2.5rem;
    background-color: white;
  }

  .hum__text,
  .wind__text {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .hum__container,
  .wind__container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  /*
================
     BODY
================
*/

  .body-content__wrapper {
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    grid-template-rows: 1fr;
    justify-items: center;
    box-sizing: border-box;
    grid-column-gap: 1rem;
    width: 100%;
    padding: 2rem;
  }

  .forecast__container {
    display: flex;
    flex-flow: row;
    align-items: center;
    align-self: center;
    justify-self: center;
  }

  .twitter-feed__container {
    margin-top: 1rem;
    width: 100%;
  }

  .twitter-feed__text {
    color: #0c1066;
    font-size: 1.25rem;
  }

  .twitter__icon {
    width: 1.5rem;
  }

  .twitter-feed-tag__text {
    font-size: 0.85rem;
    color: #5f84fb;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  .twitter-feed__header {
    display: grid;
    grid-template-rows: 2rem;
    grid-template-columns: 0.5fr 1.5fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
  }
</style>

<div class="details-page__wrapper-dark">
  <svg class="background-gradient__circle" viewBox="4572 73 1328 1328">
    <defs>
      <linearGradient id="ddd" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#ff8b8b" />
        <stop offset="1" stop-color="#6676ff" />
      </linearGradient>
    </defs>
    <circle
      cx="664"
      cy="664"
      r="664"
      fill="url(#ddd)"
      transform="translate(4572 73)" />
  </svg>

  <svg class="back__button" routerLink="" viewBox="4085 152 98.5 126">
    <defs>
      <style>
        .a {
          fill: #2b244d;
        }

        .b {
          fill: rgba(0, 0, 0, 0);
        }

        .b,
        .c {
          stroke: #fff;
          stroke-width: 2px;
        }

        .c {
          fill: none;
        }

        .d {
          fill: #fff;
          font-size: 15px;
          font-family: SegoeUI, Segoe UI;
          letter-spacing: 0.4em;
        }
      </style>
    </defs>
    <g transform="translate(3980)">
      <circle class="a" cx="39" cy="39" r="39" transform="translate(105 152)" />
      <line class="b" x1="80" transform="translate(123.5 190.5)" />
      <line class="b" y1="26" x2="26" transform="translate(123.5 164.5)" />
      <line class="c" x1="26" y1="27" transform="translate(123.5 190.5)" />
      <text class="d" transform="translate(117 274)">
        <tspan x="0" y="0">BACK</tspan>
      </text>
    </g>
  </svg>

  <section class="main-weather__card-dark">
    <section class="card-header__container-dark">
      {#if city === 'paris'}
        <Paris />
      {:else if city === 'doha'}
        <Doha />
      {:else}
        <Default />
      {/if}
      <div class="header-content__wrapper">
        <div class="today-weather__container">
          <!--{today}-->
          <div class="temp-state__container">
            <span class="temperature__text">{temp}°</span>
            <span class="weather-state__text">{state}</span>
          </div>
          <div class="hum-wind__container">
            <div class="hum__container">
              <span class="hum__text">humidity</span>
              <span class="hum-value__text">{hum} %</span>
            </div>

            <div class="hum-wind__separator">&nbsp;</div>

            <div class="wind__container">
              <span class="wind__text">wind</span>
              <span class="wind-value__text">{wind} K/M</span>
            </div>
          </div>
        </div>

        <div class="city-name__container">
          <div class="city-name__underline">
            <span class="city-name__text">{city}</span>
          </div>
        </div>
      </div>

    </section>

    <main class="body-content__wrapper">
      <section class="twitter-feed__container">
        <div class="twitter-feed__header">
          <svg class="twitter__icon" viewBox="4332 625.812 30 24.375">
            <defs>
              <style>
                .twitter-icon-fill {
                  fill: #03a9f4;
                }
              </style>
            </defs>
            <path
              class="twitter-icon-fill"
              d="M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z"
              transform="translate(4332 577.812)" />
          </svg>
          <span class="twitter-feed__text">Twitter Feed</span>
          <span class="twitter-feed-tag__text">#{city}</span>
        </div>
        <div class="twitter-feed__body">
          <!--TODO: retrieve tweets from twitter API-->
        </div>
      </section>

      <section class="forecast__container">

        <DayDisplay {...dayData[0]} />
        <DayDisplay {...dayData[1]} />
        <DayDisplay {...dayData[2]} />
        <DayDisplay {...dayData[3]} />
        <DayDisplay {...dayData[4]} />

      </section>

    </main>

  </section>

</div>
