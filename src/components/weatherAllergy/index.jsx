import Banner from "../../template/banner";
import style from "./style.module.scss";

export default function WeatherAllergy() {
  return (
    <Banner>
      <h2>Plant pollination</h2>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "30% auto",
        }}
      >
        <div className={style.circle} />
        <div>
          <h3>{Math.floor(Math.random() * 20) + 50} - High</h3>
          Grass pollen is high!
        </div>
      </div>
    </Banner>
  );
}
