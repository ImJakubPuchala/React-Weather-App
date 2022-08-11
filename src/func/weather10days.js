import { calculateWeek } from "./calculateWeek";
import { fakeTemperature, fakeWeather } from "./fakeBackend";

const week = calculateWeek();

const temperatureForWeek = (before) => {
  let temperature = 0;
  do {
    temperature = fakeTemperature();
  } while (Math.abs(temperature - before) >= 5);
  return temperature;
};

let weather = [];
for (let i = 0; i < 10; i++) {
  if (i === 0) {
    weather.push({
      date: week[i],
      weather: fakeWeather(),
      temperature: temperatureForWeek(fakeTemperature()),
    });
  } else {
    weather.push({
      date: week[i],
      weather: fakeWeather(),
      temperature: temperatureForWeek(weather[i - 1].temperature),
    });
  }
}

export { week, weather };
