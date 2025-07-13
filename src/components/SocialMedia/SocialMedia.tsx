import {
  SiInstagram,
  SiYoutube,
  SiX,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import styles from "./SocialMedia.module.scss";

type Props = {
  size: number;
};

export default function SocialMedia({ size }: Props) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="#">
          <SiInstagram color="red" size={size} />
        </a>
      </li>
      <li className={styles.item}>
        <a href="#">
          <SiYoutube color="red" size={size} />
        </a>
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiX color="red" size={size} />
        </a>
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiTiktok color="red" size={size} />
        </a>{" "}
      </li>
    </ul>
  );
}
