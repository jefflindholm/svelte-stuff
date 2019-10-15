import axios from 'axios';

export async function getCityWeatherByName(city, metric = 'imperial') {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then((data) => data.data);
  return data;
}

export async function getCitiesWeathersByNames(cities, metric = 'imperial') {
  const results = [];
  cities.forEach((city) => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`))
        .then((data) => data.data);
      results.push(data);
    });
    return results;
}

export async function getWeatherState(city) {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then((data) => data.data);
  return data;
}

export async function getCurrentTemp(cit, metric = 'imperial') {
  const dataSubject = new Subject<number>();
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then(data => data.data)
    .then(weather => Math.round(Number(weather.main.temp)));
  return data;
}


export async function getCurrentHum(cit, metric = 'imperial') {
  const dataSubject = new Subject<number>();
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then(data => data.data)
    .then(weather => Math.round(Number(weather.main.humidity)));
  return data;
}


export async function getCurrentWind(cit, metric = 'imperial') {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then(data => data.data)
    .then(weather => Math.round(Number(weather.wind.speed)));
  return data;
}


export async function getMaxTemp(cit, metric = 'imperial') {
  let max;
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then(data => data.data)
    .then(weather => {
      max = weather.list[0].main.temp;
      weather.list.forEach((value) => {
        if (max < value.main.temp) {
          max = value.main.temp;
        }
      });
      return Math.round(max);
    });
  return data;
}

export async function getMinTemp(cit, metric = 'imperial') {
  let min;
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then(data => data.data)
    .then(weather => {
      min = weather.list[0].main.temp;
      weather.list.forEach((value) => {
        if (min > value.main.temp) {
          min = value.main.temp;
        }
      });
      return Math.round(max);
    });
  return data;
}

export async function getForecast(cit, metric = 'imperial') {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
    .then(data => data.data)
    .then(weather => weather.list);
  return data;
}
