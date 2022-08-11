import Banner from "../../template/banner";
import { weather } from "../../func/weather10days";
import "./style.scss";
import { IconForWeather } from "../_icon";

export default function Weather10Days() {
  return (
    <Banner>
      {weather.map((e) => (
        <div style={{ marginTop: "1.5rem" }}>
          <i>{new Date(e.date).toDateString()}</i>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              borderBottom: "2px solid blue",
            }}
          >
            <p>
              {e.temperature}°C {e.weather}
            </p>
            <IconForWeather typeOfWeather={e.weather} />
          </div>
        </div>
      ))}
      <br />
    </Banner>
  );
}
