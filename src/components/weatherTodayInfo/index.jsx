import { fakeWindDirection } from "../../func/fakeBackend";
import Banner from "../../template/banner";
import { IconForWindDirection } from "../_icon";
import style from "./style.module.scss";

export default function WeatherTodayInfo({ weather }) {
  return (
    <Banner>
      <h2>Weather for today:</h2>
      <div className={style.grid}>
        <p>
          <i className='bi bi-thermometer-half' />
          Temperature:
        </p>
        <p>
          {Math.min(...weather.map((e) => e.temperature)) +
            " / " +
            Math.max(...weather.map((e) => e.temperature))}
          °C
        </p>
        <p>
          <i className='bi bi-wind' />
          Wind:
        </p>
        <p>
          <IconForWindDirection direction={fakeWindDirection()} />{" "}
          {Math.floor(Math.random() * 500) / 10} km/h
        </p>
        <p>
          <i className='bi bi-arrows-collapse' />
          Pressure
        </p>
        <p>{Math.floor((Math.random() * 50 + 980) * 10) / 10} hPa</p>
        <p>a</p>
        <p>a</p>
      </div>
    </Banner>
  );
}
