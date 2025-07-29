import styles from "./Cart.module.scss";
import Linki from "../../components/Linki/Linki.tsx";
import { useLoaderData } from "react-router";

export default function Cart() {
  const { cart } = useLoaderData();
  const total = "0.00";
  return (
    <main className={styles.main}>
      {cart.length > 0 ? (
        <div className={styles.content}></div>
      ) : (
        <>
          <h1>Your shopping cart is empty.</h1>
          <p>
            Explore our <span className={styles.underline}>amazing</span>{" "}
            products.
          </p>
          <Linki text="Shop" link="/store" />
        </>
      )}
    </main>
  );
}
