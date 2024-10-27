/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProduct] = useState([]);

  const { firmId, firmName } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProduct(newProductData.products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h2>{firmName}</h2>
        {products.map((item) => {
          return (
            <div className="productBox">
              <div className="productInfo">
                <h3>{item.productName}</h3>
                <div className="price">₹{item.price}</div>
                <p>{item.description}</p>
              </div>
              <div className="productGroup">
                <img
                  src={`${API_URL}/uploads/${item.image}`}
                  alt="image not found"
                />
                <div className="addButton">ADD</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
