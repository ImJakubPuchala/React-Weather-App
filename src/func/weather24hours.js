import { fakeMinMaxTemperature } from "./fakeBackend";
import { weather } from "./weather10days";

let weather24hours = [];
fakeMinMaxTemperature(weather24hours, [weather[0].temperature]);

export { weather24hours };
