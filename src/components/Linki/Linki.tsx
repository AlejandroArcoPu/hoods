import { Link } from "react-router";
import styles from "./Linki.module.scss";

type Linki = {
  text: string;
  link: string;
  disabled?: boolean;
  size?: string;
};

export default function Linki({ text, link, disabled, size }: Linki) {
  return (
    <Link
      viewTransition
      to={link}
      className={disabled ? styles.disabled : styles.link}
      style={{ fontSize: `${size}rem` }}
    >
      {text}
    </Link>
  );
}
