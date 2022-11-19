import React, { useState } from "react";
import "./products.css";
import Banner from "../components/Banner";
import { useProductContext } from "../context/product_context";
import { useFilterContext } from "../context/filter_context";
import Aside from "../components/Aside";
import ProductsList from "../components/ProductsList";
import Loading from "../components/Loading";

const Products = () => {
  const { filtered_products } = useFilterContext();
  const { loading } = useProductContext();
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="products">
      <Banner pageTwo="products" />
      <div className="products-wrap">
        <Aside isActive={isActive} setIsActive={setIsActive} />
        {loading ? (
          <Loading />
        ) : (
          <ProductsList
            isActive={active}
            setIsActive={setActive}
            products={filtered_products}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
