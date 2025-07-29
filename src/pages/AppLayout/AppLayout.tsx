import type React from "react";
import { Link, Outlet, useNavigation } from "react-router";
import styles from "./AppLayout.module.scss";
import logo from "../../assets/logo.avif";
import { ShoppingCart, LoaderCircle } from "lucide-react";

type AppLayout = {
  children?: React.JSX.Element;
};

export default function AppLayout({ children }: AppLayout) {
  const navigation = useNavigation();
  return (
    <>
      <header className={styles.header}>
        <Link viewTransition className={styles.title} to={"/"}>
          <img
            src={logo}
            alt="Logo Hoods, white fire and a background red"
            className={styles.logo}
          />
          Hoods
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
          </Link>
        </div>
      </header>
      {children ?? <Outlet />}
      <footer>© Hoods</footer>
    </>
  );
}
