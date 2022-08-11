import { fakeMinMaxTemperature } from "./fakeBackend";
import { weather } from "./weather10days";

let weather72hours = [];
fakeMinMaxTemperature(weather72hours, [
  weather[0].temperature,
  weather[1].temperature,
  weather[2].temperature,
]);

export { weather72hours };
