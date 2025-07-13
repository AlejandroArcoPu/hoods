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
        <SiMastercard color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiVisa color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiPaypal color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiGooglepay color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiSamsungpay color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiMercadopago color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiApplepay color="red" size={size} />
      </li>
      <li className={styles.item}>
        <SiAmericanexpress color="red" size={size} />
      </li>
    </ul>
  );
}
