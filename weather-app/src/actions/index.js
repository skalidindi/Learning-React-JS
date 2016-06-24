import 'whatwg-fetch';
import { OPEN_WEATHER_API_KEY } from '../api_keys';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = fetch(url);

  return (dispatch) => {
    dispatch({ type: FETCH_WEATHER });

    request.then(
      (response) => {
        response.json().then((cityData) => {
          dispatch({ type: FETCH_WEATHER_SUCCESS, payload: cityData });
        });
      },
      (error) => {
        dispatch({ type: FETCH_WEATHER_FAILURE, error });
      }
    );
  };
}
