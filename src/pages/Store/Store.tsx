import { Link } from "react-router";
import styles from "./Store.module.scss";

export default function Store() {
  return (
    <main className={styles.main}>
      <aside className={styles.left}>
        <p className={styles.listTitle}>Collections</p>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} to="/store">
                All
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/store/shirts">
                Shirts
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/store/shoes">
                Shoes
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/store/skates">
                Skates
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className={styles.products}></section>
      <aside className={styles.right}>
        <p className={styles.listTitle}>Sort by</p>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} to="/store">
                Offers
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/store">
                Price: Low to high
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/store">
                Price: High to low
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}
