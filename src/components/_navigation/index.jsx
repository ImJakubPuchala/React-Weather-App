import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../../template/navigation";
import style from "./style.module.scss";

export default function Navigation() {
  const [city, setCity] = useState();

  return (
    <Nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "5px",
        }}
      >
        <div style={{ fontSize: "large" }}>
          <i className='bi bi-brightness-alt-high-fill' /> Weather App
        </div>
      </div>

      <form
        className={style.inputForm}
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "/" + city;
        }}
      >
        <input
          className={style.input}
          type='text'
          placeholder='city'
          onChange={(e) => setCity(e.target.value)}
        />
        <i className={"bi bi-arrow-return-right " + style.inputIcon} />
      </form>

      <div className={style.link}>
        <Link to='/' className={style.a}>
          Today
        </Link>
        <Link to='/hourly' className={style.a}>
          Hourly
        </Link>
        <Link to='/10day' className={style.a}>
          10 Day
        </Link>
      </div>
    </Nav>
  );
}
