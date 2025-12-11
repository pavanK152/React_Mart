import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenProducts } from "../ProductSlice";

const ProductGrid = () => {
  const dispatch = useDispatch();

  // FIX 1: renamed variable so it does NOT shadow the action
  const screenProducts = useSelector((state) => state.product.screenProducts);

  async function getData() {
    let apiData = await fetch(`https://dummyjson.com/products`);
    let jsonData = await apiData.json();
    dispatch(setScreenProducts(jsonData.products));
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("Products:", screenProducts);

  return <div>Product Grid Loaded</div>;
};

export default ProductGrid;
