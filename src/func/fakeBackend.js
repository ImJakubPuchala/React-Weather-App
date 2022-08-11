function fakeWeather() {
  const weather = [
    "Sunny",
    "Fog",
    "Lightning",
    "Rain",
    "Storm",
    "Clouds",
    "Wind",
  ];

  let random = Math.floor(Math.random() * 6);

  return weather[random];
}

function fakeTemperature() {
  return Math.floor(Math.random() * 26);
}

function fakeTemperatureMax(temperature) {
  return Math.floor(Math.random() * temperature);
}

function fakeWind() {
  return Math.floor(Math.random() * 25);
}

function fakeWindDirection() {
  const wind = ["North", "East", "West", "South"];

  let random = Math.floor(Math.random() * 4);

  return wind[random];
}

function fakeMinMaxTemperature(array, max) {
  max.forEach((e) => {
    let time = Math.floor(Math.random() * 6);
    let temp = Math.floor(Math.random() * 20 * 100) / 100;
    for (let i = -12 - time; i < 12 - time; i++) {
      if (i > 0) {
        array.push({
          weather: e,
          temperature: Math.floor(-i * temp + e * 10) / 10,
        });
      } else {
        array.push({
          weather: e,
          temperature: Math.floor(i * temp + e * 10) / 10,
        });
      }
    }
  });
}

export {
  fakeWeather,
  fakeTemperature,
  fakeTemperatureMax,
  fakeWind,
  fakeWindDirection,
  fakeMinMaxTemperature,
};
