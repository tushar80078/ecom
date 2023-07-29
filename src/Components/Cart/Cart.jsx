import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../ReduxStore/EcomSlice";
import styles from "./Cart.module.css";

const Cart = ({ setProduct }) => {
  const ecomData = useSelector((data) => data.ecom.cartItems);
  const dispatch = useDispatch();

  const add = (item) => {
    dispatch(addToCart(item));
  };

  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className={styles["cart-items-text"]}>
        <h2>Your Cart Items</h2>
      </div>
      <div className={styles["cart-container"]}>
        {ecomData.map((product) => (
          <div key={product.id} className={styles["cart-item"]}>
            <div
              className={styles["product-card"]}
              onClick={() => setProduct(product)}
            >
              <div className={styles["product-card-image"]}>
                <img
                  src={product.image}
                  alt=""
                  style={{ width: "10rem", height: "13rem" }}
                />
              </div>
              <div className={styles["product-card-details"]}>
                <div className={styles["product-title"]}>{product.title}</div>{" "}
                <div className={styles["product-price"]}>
                  Price - {product.price}
                </div>
                <div className={styles["product-quantity"]}>
                  Added Items - {product.quantity}
                </div>
                <div>
                  <button
                    onClick={() => add(product)}
                    style={{
                      backgroundColor: "#50C878",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "white",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => deleteFromCart(product.id)}
                    style={{
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "5px",
                      color: "white",
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
