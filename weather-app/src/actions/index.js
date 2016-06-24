import 'whatwg-fetch';

const API_KEY = 'f2dc9d70c1b4cd09816d0281162115fb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

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
