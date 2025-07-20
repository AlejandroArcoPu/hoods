import styles from "./Cart.module.scss";
import Button from "../../components/Button/Button.tsx";

export default function Cart() {
  return (
    <main className={styles.main}>
      <h1 className={styles.emptyTitle}>Your shopping cart is empty.</h1>
      <p>
        Explore our <span className={styles.underline}>amazing</span> products.
      </p>
      <Button text={"Shop"} />
    </main>
  );
}
