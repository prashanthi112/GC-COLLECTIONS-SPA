import styles from "./Home.module.css";

export default function Home({ setCurrentPage }) {
  return (
    <div className={styles.wrapper}>

      {/* Add your image here */}
      <img 
  src="/images/gc-collection.png" 
  alt="GC Collections Logo" 
  className={styles.logo}
/>


      <h1 className={styles.heading}>Welcome to GC COLLECTIONS</h1>

      <p className={styles.subheading}>
        Kids Wear • 1 Gram Gold Jewelry • Bridal Collections
      </p>

      <button
        className={styles.exploreBtn}
        onClick={() => setCurrentPage("gallery")}
      >
        Explore Gallery
      </button>
    </div>
  );
}
