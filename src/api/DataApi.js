import Axios from "axios";
import config from "../config/config";

export class DataApi {
  static get() {
    return Axios.get('./data/cities.json')
  }

  static getWeather(cityName) {
    return Axios.get(`${config.apiUrl}${cityName}`)
  }
}