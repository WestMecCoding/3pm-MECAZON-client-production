import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ShopingCart.module.css";
import baseURL from "../../baseURL";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0.08);
  const navigate = useNavigate();

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("cart"));
    setCart(response);
  }, []);

  useEffect(()=>{
    let total = 0;
    (cart||[])?.map(i=>{total += i.price_in_usd;})
    setTotal(()=>(parseFloat(total)+(parseFloat(total)*tax)).toFixed(2));
  },[cart, tax]);

  async function checkout() {
    let api = baseURL();
    let user_id = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user_id);
    if (user_id != null) {
      try {
        const response = await api.post(`/checkout-order/3pm-server-MECAZON/users/${user_id}`, {order: cart});
        if (response.status == 200) {
          localStorage.cart = "[]";
          setCart([]);
          console.log(response);
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.items}>
            {((cart ? cart.length : 0) !== 0
              ? cart
              : [{ name: "Your Cart is empty" }]
            ).map((i) => (
              <div className={styles.item} key={Math.random()}>
                <img
                  className={styles.Image}
                  src={i.item ? `/products/${i.item.replace(/\s+/g, "")}.jpg` : null}
                  alt={i.item}
                  draggable="false"
                />
                <h1 className={styles.text}>{i.item}</h1>
                <h1 className={styles.text}>
                  {i.price_in_usd ? "$" : ""}
                  {i?.price_in_usd}
                </h1>
                {i.price_in_usd ? (
                  <button
                    className={styles.closeBtn}
                    onClick={() => {
                      let Index = cart.indexOf(i);
                      if (Index != -1) {
                        let cart = JSON.parse(localStorage.getItem("cart"));
                        cart.splice(Index, 1);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        setCart(cart);
                      }
                    }}
                  >
                    ✖
                  </button>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          <div className={styles.items}>
            <h1>Checkout</h1>
            {(cart || [{ name: "Your Shopping Cart is Empty" }])?.map((i) => {
              return (
                <div className={styles.listing} key={Math.random()}>
                  <h1 className={styles.text}>{i.item}</h1>
                  {i.price_in_usd ? (
                    <h1 className={styles.text}>${i?.price_in_usd}</h1>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
            {cart ? (
              <>
                <div className={styles.listing}>
                  <h1 className={styles.text}>Tax: </h1>
                  <h1 className={styles.text}>{tax * 100}%</h1>
                </div>
                <div className={styles.listing}>
                  <h1 className={styles.text}>Total: </h1>
                  <h1 className={styles.text}>
                    {total == 0 ? "Free" : `$${total}`}
                  </h1>
                </div>
              </>
            ) : (
              <></>
            )}
            <button onClick={() => {checkout()}}>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
