import { Link } from "react-router";
import styles from "./Linki.module.scss";

type Linki = {
  text: string;
  link: string;
  disabled?: boolean;
};

export default function Linki({ text, link, disabled }: Linki) {
  return (
    <Link
      viewTransition
      to={link}
      className={disabled ? styles.disabled : styles.link}
    >
      {text}
    </Link>
  );
}
