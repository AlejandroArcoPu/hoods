import styles from "./PrimaryCarousel.module.scss";

export default function PrimaryCarousel() {
  return (
    <div className={styles.carousel}>
      <p className={styles.item1}>DESIGNED FOR IMPACT.</p>
      <p className={styles.item2}>BORN FROM CONCRETE.</p>
      <p className={styles.item3}>BUILT FOR THE STREETS.</p>
      <p className={styles.item4}>IMPACT IS THE OUTFIT.</p>
      <p className={styles.item5}>BORN FROM CONCRETE.</p>
      <p className={styles.item6}>DESIGNED FOR IMPACT.</p>
      <p className={styles.item7}>BUILT FOR THE STREETS.</p>
    </div>
  );
}
