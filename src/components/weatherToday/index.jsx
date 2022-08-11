import Banner from "../../template/banner";
import { IconForWeather } from "../_icon";
import style from "./style.module.scss";

export default function WeatherToday({ weather, location }) {
  return (
    <Banner>
      <div className={style.city}>
        <b>{location}</b>
      </div>
      <div className={style.details}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
          }}
        >
          <div>
            <h1 className={style.temperature}>{weather.temperature}°C</h1>
            <h2 className={style.information}>{weather.weather}</h2>
            <h3>{weather.temperature}°C</h3>
          </div>
          <div>
            <IconForWeather typeOfWeather={weather.weather} size={"6rem"} />
          </div>
        </div>
      </div>
    </Banner>
  );
}
