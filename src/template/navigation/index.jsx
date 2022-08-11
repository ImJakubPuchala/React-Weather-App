import style from "./style.module.scss";

export default function Nav(props) {
  return <nav className={style.nav}>{props.children}</nav>;
}
