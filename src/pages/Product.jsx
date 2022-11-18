import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Banner from "../components/Banner";
import ImageContainer from "../components/ImageContainer";
import ImageDescription from "../components/ImageDescription";
import { single_product_url } from "../utils/products";
import "./product.css";

// import { single_product_url } from "../utils/products";
import { useProductContext } from "../context/product_context";
import AddToCart from "../components/AddToCart";

const Product = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);
  const { fetchSingleProduct, single_product } = useProductContext();
  const location = useLocation();

  const { product } = location.state;

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${product.id}`);
  }, [product.id]);

  const { name } = single_product;

  // console.log(images);

  return (
    <div className="product-container">
      <Banner pageTwo={name} />
      <div className="product-wrap">
        <div className="back-to-products">
          <Link to="/products">back to products</Link>
        </div>
        <div className="product-info">
          <ImageContainer
            single_product={single_product}
            index={index}
            setIndex={setIndex}
            active={active}
            setActive={setActive}
          />
          <ImageDescription single_product={single_product} />
          <AddToCart single_product={single_product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
