import styles from "../styles/GroceryList.module.css";
import SaveItem from "../components/AddToCartBtn";

export default function GroceryList({ items, setModalData }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={Math.random()} className={styles.item}>
          <img className={styles.Image} width="200px" height="200px" onClick={() => {setModalData(i)}} src={`/products/${i.item.replace(/\s+/g, "")}.jpg`} alt={i.item} draggable="false"/>
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price_in_usd}</h1>
            <h2 className={styles.text}>{i.item}</h2>
            <button className={styles.btn} onClick={() => SaveItem(i)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
