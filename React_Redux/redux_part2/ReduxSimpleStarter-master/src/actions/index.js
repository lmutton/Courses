import axios from 'axios';

const API_KEY = '9aa7312a172c330eedc959a6feca142f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//backticks lets you use es6 syntax ${}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //this is a promise

  return {
    type: FETCH_WEATHER,
    payload: request
    //return the promise as a payload
  };
}
