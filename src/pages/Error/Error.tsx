import no_entry from "../../assets/emojis/no_entry.avif";
import styles from "./Error.module.scss";

export default function Error() {
  return (
    <main className={styles.main}>
      <h1>Oops!</h1>
      <p>Sorry, you are riding on the wrong place!</p>
      <img src={no_entry} alt="Emoji forbidden" className={styles.emoji} />
      <section className={styles.products}></section>
    </main>
  );
}
