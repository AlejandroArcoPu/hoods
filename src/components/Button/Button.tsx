import { Link } from "react-router";
import styles from "./Button.module.scss";

type Button = {
  text: string;
};

export default function Button({ text }: Button) {
  return (
    <Link to="/store" className={styles.link}>
      {text}
    </Link>
  );
}
