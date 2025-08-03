import type React from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router";
import styles from "./AppLayout.module.scss";
import logo from "../../assets/logo.avif";
import { ShoppingCart, LoaderCircle } from "lucide-react";
import { getQuantity } from "../../utils";

type AppLayout = {
  children?: React.JSX.Element;
};

export default function AppLayout({ children }: AppLayout) {
  const navigation = useNavigation();
  const { cart } = useLoaderData();
  const quantity = getQuantity(cart);
  return (
    <>
      <header className={styles.header}>
        <Link viewTransition className={styles.title} to={"/"}>
          <img
            src={logo}
            alt="Logo Hoods, white fire and a background red"
            className={styles.logo}
          />
          <p className={styles.textTitle}>Hoods</p>
        </Link>
        <div className={styles.icons}>
          <LoaderCircle
            className={
              navigation.state === "loading"
                ? styles.spinner
                : `${styles.spinner} ${styles.notDisplay}`
            }
          />
          <Link viewTransition className={styles.cart} to="/cart">
            <ShoppingCart className={styles.cartIcon} />
            {quantity > 0 && (
              <span className={styles.quantity}>{quantity}</span>
            )}
          </Link>
        </div>
      </header>
      {children ?? <Outlet />}
      <footer>© Hoods</footer>
    </>
  );
}
