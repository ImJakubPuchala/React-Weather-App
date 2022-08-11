import { useEffect, useState } from "react";
import Banner from "../../template/banner";
import "./style.module.scss";

export default function WeatherHoursShort({ weather }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <Banner>
      <h2>Weather for today:</h2>
      <div style={{ overflow: "scroll", padding: "10px", textAlign: "center" }}>
        <table>
          <thead>
            <tr>
              <th>1 AM</th>
              <th>2 AM</th>
              <th>3 AM</th>
              <th>4 AM</th>
              <th>5 AM</th>
              <th>6 AM</th>
              <th>7 AM</th>
              <th>8 AM</th>
              <th>9 AM</th>
              <th>10 AM</th>
              <th>11 AM</th>
              <th>12 AM</th>
              <th>1 PM</th>
              <th>2 PM</th>
              <th>3 PM</th>
              <th>4 PM</th>
              <th>5 PM</th>
              <th>6 PM</th>
              <th>7 PM</th>
              <th>8 PM</th>
              <th>9 PM</th>
              <th>10 PM</th>
              <th>11 PM</th>
              <th>12 PM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weather.map((e, i) => (
                <td key={i}>{e.temperature + " "}°C</td>
              ))}
            </tr>
            <tr>
              {weather.map((e, i) => (
                <td>
                  {i === 0 ? (
                    <td key={i}></td>
                  ) : weather[i - 1].temperature < e.temperature ? (
                    <i class='bi bi-arrow-up'></i>
                  ) : (
                    <i class='bi bi-arrow-down'></i>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              {weather.map((e, i) => (
                // eslint-disable-next-line
                <td key={i}>{i + 1 == time.getHours() ? "Now" : ""}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Banner>
  );
}
