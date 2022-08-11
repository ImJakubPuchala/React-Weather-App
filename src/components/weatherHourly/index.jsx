import { weather } from "../../func/weather10days";
import { weather72hours } from "../../func/weather72hours";
import Banner from "../../template/banner";
import { IconForWeather } from "../_icon";
import style from "./style.module.scss";

export default function WeatherHourly() {
  let hour = new Date().getHours();
  const nextHour = (i) => {
    let next = new Date().setHours(i);
    return new Date(next).getHours();
  };
  const day = (i) => {
    let next = new Date().setHours(i);
    return new Date(next).toDateString();
  };
  return (
    <Banner>
      <h2>Weather</h2>
      <h3>Today - {day(0)}:</h3>
      {weather72hours.map((e, i) => (
        <>
          {i + 1 >= hour ? (
            <>
              {i === 23 ? <h3>Tomorrow - {day(i + 1)}:</h3> : ""}
              {i === 47 ? <h3>Next day - {day(i + 1)}:</h3> : ""}
              <div className={style.list} key={i}>
                <i>{nextHour(i + 1)}</i>
                <div>{e.temperature}°C</div>
                <div>
                  {i < 23 ? (
                    <>
                      <IconForWeather
                        typeOfWeather={weather[0].weather}
                        size='1'
                      />{" "}
                      {weather[0].weather}
                    </>
                  ) : i < 47 ? (
                    <>
                      <IconForWeather
                        typeOfWeather={weather[1].weather}
                        size='1'
                      />{" "}
                      {weather[1].weather}
                    </>
                  ) : (
                    <>
                      <IconForWeather
                        typeOfWeather={weather[2].weather}
                        size='1'
                      />{" "}
                      {weather[2].weather}
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      ))}
      <br />
    </Banner>
  );
}
