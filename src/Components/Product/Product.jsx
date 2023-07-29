import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addToCart } from "../../ReduxStore/EcomSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const productData = useSelector((data) => data.ecom.selected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addTocart = (item) => {
    toast("Item Added To Cart!!👍");
    dispatch(addToCart(item));
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  return (
    <div className="">
      {productData?.length > 0
        ? productData.map((productData) => {
            return (
              <div className="product-container">
                <div className="product-image">
                  <img src={productData.image} alt={productData.title} />
                </div>

                <div className="product-details">
                  <h1>{productData.title}</h1>
                  <h3>Price: ${productData.price}</h3>
                  <h5>Description: {productData.description}</h5>
                  <h6>Rating: {productData.rating.rate}</h6>
                  <h6>Rating Count: {productData.rating.count}</h6>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addTocart(productData)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })
        : "Please Select item First"}
      <Toaster />
    </div>
  );
};

export default Product;
