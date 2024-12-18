import styles from "../styles/Modal.module.css";
import addToCartFunc from "./AddToCartBtn";
import Carousel from "./Carousel";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Modal({ data, setModalData }) {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setModalStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [colorFilter, setColor] = useState("");
    const modalRef = useRef(null);
    const imgFilterRef = useRef(null);

    async function fetchProducts() {
      try {
        const response = await axios.get("/dummy-data/products.json");
        // console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("something went wrong fetching products", err);
      }
    }

  useEffect(() => {
    fetchProducts();
  }, []);

  function closeModal() {
    modalRef.current.close();

    setModalStatus(false);
    setModalData({});
  }

  function handleReview(event) {
    setReviewText(event.target.value);
  }
  function addReview() {
    console.log(reviewText);
    setModalData((prevObject) =>
      prevObject.reviews
        ? { ...prevObject, reviews: [...prevObject.reviews, reviewText] }
        : { ...prevObject, reviews: [reviewText] }
    );
    setReviewText("");
    console.log(data);
  }

  useEffect(() => {
    setModalStatus(true);

        if (isModalOpen) {
            modalRef.current.showModal();
        }
    }, [data]);

  useEffect(() => {
    if (colorFilter !== "" && imgFilterRef.current) {
      imgFilterRef.current.className = `${styles[colorFilter]}`;
    } else if (colorFilter !== "" && imgFilterRef.current) {
      imgFilterRef.current.className = ``;
    }
  }, [colorFilter])

    return (
      <dialog ref={modalRef} onKeyDown={(e) => {e.key === "Escape" ? closeModal() : null}} className={styles.container}>
        <div className={styles.modalContent}>
          <div className={styles.row}>
            <div className={styles.imgDisplay}>
              <img className={styles.productImg} width="150" height="150" src={data.item ? `/products/${data.item.replace(/\s+/g, "")}.jpg` : null} ref={data.colorArr ? imgFilterRef : null} alt={data.item} />
            </div>

            <div className={styles.itemInformation}>
              <h1>{data.item}</h1>
              <h2>About this item:</h2>

              <p>{data.details}</p>

              <div className={styles.buttonSection}>
                {data.colorArr ? <select onChange={(e) => {setColor(e.target.value)}}><option value="">--Select a color--</option>{data.colorArr.map(color => (<option value={color}>{color}</option>))}</select> : null}
                <button onClick={() => {for(let i = 0; i < quantity; i++) {addToCartFunc(data)}}} className={styles.addCartButton}>Add to Cart</button>
                <div className={styles.quantitySelector}>
                  <div>
                    <button onClick={() => {quantity > 0 ? setQuantity(prev => prev -= 1) : null}}>-</button>
                  </div>

                <div>
                  <h2>{quantity}</h2>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setQuantity((prev) => (prev += 1));
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.otherInfo}>
            <h1>⭐⭐⭐⭐⭐</h1>

              <h1>${data.price_in_usd}</h1>
            </div>

            <div className={styles.suggestedProducts}>
              <h2>Suggested Products</h2>
              <Carousel setModalData={setModalData} count={3} data={products.filter(i => i.category === data.category && i.item !== data.item)} />
            </div>
          </div>

        <button onClick={closeModal}>Close</button>
      </div>
    </dialog>
  );
}
