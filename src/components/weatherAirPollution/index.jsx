import Banner from "../../template/banner";
import style from "./style.module.scss";

export default function WeatherAirPollution() {
  return (
    <Banner>
      <h2>Air Pollution</h2>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "25% auto",
        }}
      >
        <div className={style.circle} />
        <div>
          <h3>{Math.floor(Math.random() * 25)} - Good</h3>
          Air quality is good!
        </div>
      </div>
    </Banner>
  );
}
