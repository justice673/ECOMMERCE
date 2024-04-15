import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Api.css";

export default function Api() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="products">
      {products.map((prod, index) => {
        return (
          <div className="product">
            <h1>
              {index}.{prod.title}
            </h1>
            <p>{prod. description.slice(0,90)}...</p>
            <img src={prod.image} alt="" />
            <button className="add">add to cart</button>
          </div>
        );
      })}
    </section>
  );
}
