export default class MagicWeather {
  constructor(refs) {
    this.refs = refs;
  }

  getFetch(query) {
    let apiKey = `b95ab1bf0e99e5372f620fa0f919473e`;
    const { city, temp, icon, descrip, humidity, wind, weather } = this.refs;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) return alert("No data in this city");
        return response.json();
      })
      .then((data) => {
        city.textContent = `Weather in ${data.name}`;
        let tempC = Math.round(data.main.temp - 273.15);
        temp.textContent = `${tempC}°C`;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        icon.alt = data.weather[0].description;
        descrip.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind speed: ${data.wind.speed} km/h`;
        weather.classList.remove("loading");
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name}')`;
      })
      .catch((error) => console.log(error));
  }
  search() {
    const { input, button } = this.refs;

    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.getFetch(input.value);
        input.value = "";
      }
    });

    button.addEventListener("click", () => {
      this.getFetch(input.value);
      input.value = "";
    });
  }
}
