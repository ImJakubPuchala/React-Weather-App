import style from "./style.module.scss";

export default function Banner(props) {
  return <div className={style.weatherBanner}>{props.children}</div>;
}
