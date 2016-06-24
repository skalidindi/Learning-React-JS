import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state;
    case FETCH_WEATHER_SUCCESS:
      return [action.payload, ...state];
    case FETCH_WEATHER_FAILURE:
      return [action.error];
    default:
      return state;
  }
}
