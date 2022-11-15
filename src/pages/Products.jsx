import React, { useState } from "react";
import "./products.css";
import Banner from "../components/Banner";
import { useProductContext } from "../context/product_context";
import Aside from "../components/Aside";
import ProductsList from "../components/ProductsList";

const Products = () => {
  const { products } = useProductContext();
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);
  console.log(products);

  const productList = products.map((product) => product.category);
  console.log(productList);

  return (
    <div className="products">
      <Banner pageOne="products" />
      <div className="products-wrap">
        <Aside isActive={isActive} setIsActive={setIsActive} />
        <ProductsList
          isActive={active}
          setIsActive={setActive}
          products={products}
        />
      </div>
    </div>
  );
};

export default Products;
