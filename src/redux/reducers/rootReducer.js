import { combineReducers } from 'redux';
import mapReducer from './map/map-reducer';
import citiesReducer from './cities/cities-reducer';

export default combineReducers({
  mapStore: mapReducer,
  citiesStore: citiesReducer,
})