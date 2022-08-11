import Banner from "../../template/banner";
import { IconForWeather } from "../_icon";
import style from "./style.module.scss";

export default function WeatherFor10Days({ weather }) {
  return (
    <Banner>
      <h2>Weather for 10 days:</h2>
      <div className={style.grid}>
        {weather.map((e, i) =>
          // eslint-disable-next-line
          i != 0 ? (
            <div id={style.day} key={i}>
              <IconForWeather typeOfWeather={e.weather} />
              <br />
              <i>{e.weather}</i>
              <br />
              {e.temperature}°C
              <br />
              {new Date(e.date).toDateString()}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </Banner>
  );
}
