import { Outlet } from "react-router";
import styles from "./App.module.scss";
import { useState, useEffect } from "react";

const carouselItems = [
  "WORLDWIDE SHIPPING 🌍",
  "15 DAYS RETURNS & EXCHANGES ⚡",
  "FREE SHIPPING: OVER 80€ 😎",
];

function App() {
  const [item, setItem] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setItem((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.carousel}>
        <p className={styles.item}>{carouselItems[item]}</p>
      </div>
      <Outlet />
      <footer>© Hoods</footer>
    </>
  );
}

export default App;
