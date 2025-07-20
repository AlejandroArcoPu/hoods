import type React from "react";
import { Link, Outlet } from "react-router";
import styles from "./AppLayout.module.scss";
import logo from "../../assets/logo.avif";
import { ShoppingCart } from "lucide-react";

type AppLayout = {
  children?: React.JSX.Element;
};

export default function AppLayout({ children }: AppLayout) {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.title} to={"/"}>
          <img
            src={logo}
            alt="Logo Hoods, white fire and a background red"
            className={styles.logo}
          />
          Hoods
        </Link>
        <Link className={styles.cart} to="/cart">
          <ShoppingCart className={styles.cartIcon} />
        </Link>
      </header>
      {children ?? <Outlet />}
      <footer>© Hoods</footer>
    </>
  );
}
