import React, { useEffect, useState } from "react";
import Products from "../../Json/Products.json";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData, selectedItem } from "../../ReduxStore/EcomSlice";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const ecomData = useSelector((data) => data.ecom.data);

  useEffect(() => {
    dispatch(setStoreData(Products));
  }, []);

  const setProduct = (item) => {
    dispatch(selectedItem(item));
  };

  return (
    <div className="div-container">
      <div className="img-container">
        
        <div className="image-text">
          <h6>--- Hot Trend</h6>
          <h2>FRESH FASHION FINDS</h2>
          <h6>--- NEW COLLECTION</h6>
        </div>
      </div>

      <div className="product-container">
        {ecomData.map((product) => (
          <Link
            to={"/product"}
            key={product.id}
            className="product-card"
            onClick={() => setProduct(product)}
          >
            <div className="product-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div>
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "10rem", height: "13rem" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "4px", width: "250px", padding: "10px" }}>
              <div style={{ padding: "5px" }}>{product.title}</div>
              <div style={{ fontWeight: "bold" }}>Price -{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
