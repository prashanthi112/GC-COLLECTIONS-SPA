import styles from "./Gallery.module.css";

const galleryItems = [
  { id: 1, title: "Kids Wear Collection", image: "/images/kids.jpg" },
  { id: 2, title: "1 Gram Gold Jewelry", image: "/images/1grm-gold necklace.png" },
  { id: 3, title: "New Arrivals", image: "/images/bride in.png" }
];

export default function Gallery({ setCurrentPage }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Gallery</h1>

      <div className={styles.grid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <button className={styles.backButton} onClick={() => setCurrentPage("home")}>
        Back to Home
      </button>
    </div>
  );
}
