import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Banner from "../components/Banner";
import ImageContainer from "../components/ImageContainer";
import ImageDescription from "../components/ImageDescription";
import { single_product_url } from "../utils/products";
import "./product.css";
import { useProductContext } from "../context/product_context";
import AddToCart from "../components/AddToCart";
import ChooseColor from "../components/ChooseColor";
import Loading from "../components/Loading";

const Product = () => {
  const [index, setIndex] = useState(0);
  const { fetchSingleProduct, single_product, loading } = useProductContext();
  const location = useLocation();

  const { product } = location.state;

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${product.id}`);
  }, [product.id]);

  const { name } = single_product;

  // console.log(loading);

  return (
    <div className="product-container">
      <Banner pageTwo="/products" pageThree={`/${name}`} />
      <div className="product-wrap">
        <div className="back-to-products">
          <Link to="/products">back to products</Link>
        </div>
        {/* <Loading /> */}
        {loading ? (
          <Loading />
        ) : (
          <div className="product-info">
            <ImageContainer
              single_product={single_product}
              index={index}
              setIndex={setIndex}
            />
            <div>
              <ImageDescription single_product={single_product} />
              <ChooseColor single_product={single_product} />
              <AddToCart single_product={single_product} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
