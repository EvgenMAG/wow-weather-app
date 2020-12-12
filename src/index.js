import css from "./css/styles.css";
import refs from "./js/refs.js";

// import "./js/fetch.js";
import MagicWeather from "./js/classVersion.js";

const myWeatherApp = new MagicWeather(refs);

myWeatherApp.search();
