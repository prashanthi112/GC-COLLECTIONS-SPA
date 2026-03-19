import styles from "./Navbar.module.css";

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}></div>

      <h1 className={styles.title}>GC COLLECTIONS</h1>

      <div className={styles.right}>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("gallery")}>Products</button>
        <button onClick={() => setCurrentPage("about")}>Our Story</button>
      </div>
    </nav>
  );
}
