import {
  SiMastercard,
  SiVisa,
  SiPaypal,
  SiSamsungpay,
  SiGooglepay,
  SiApplepay,
  SiAmericanexpress,
  SiMercadopago,
} from "@icons-pack/react-simple-icons";
import styles from "./Payments.module.scss";

type Props = {
  size: number;
};

export default function Payments({ size }: Props) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="#">
          <SiMastercard color="red" size={size} />
        </a>
      </li>
      <li className={styles.item}>
        <a href="#">
          <SiVisa color="red" size={size} />
        </a>
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiPaypal color="red" size={size} />
        </a>
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiGooglepay color="red" size={size} />
        </a>{" "}
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiSamsungpay color="red" size={size} />
        </a>{" "}
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiMercadopago color="red" size={size} />
        </a>{" "}
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiApplepay color="red" size={size} />
        </a>{" "}
      </li>
      <li className={styles.item}>
        {" "}
        <a href="#">
          <SiAmericanexpress color="red" size={size} />
        </a>{" "}
      </li>
    </ul>
  );
}
