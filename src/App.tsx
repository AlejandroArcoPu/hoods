import { Outlet } from "react-router";
import styles from "./App.module.scss";
import logo from "./assets/logo.png";
import MessagesCarousel from "./components/MessagesCarousel/MessagesCarousel";

function App() {
  return (
    <>
      <MessagesCarousel />
      <header className={styles.header}>
        <div className={styles.title}>
          <img
            src={logo}
            alt="Logo Hoods, white fire and a background red"
            className={styles.logo}
          />
          <h1 className={styles.titleText}>Hoods</h1>
        </div>
      </header>

      <Outlet />
      <footer>© Hoods</footer>
    </>
  );
}

export default App;
