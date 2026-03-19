import styles from "./About.module.css";

export default function About({ setCurrentPage }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About GC COLLECTIONS</h1>
      <p className={styles.text}>
        GC COLLECTIONS brings you a curated selection of Kids Wear and 1 Gram Gold Jewelry.
        Our mission is to offer stylish, high-quality products at affordable prices.
      </p>

      <button className={styles.backButton} onClick={() => setCurrentPage("home")}>
  Back to Home
</button>

    </div>
  );
}
