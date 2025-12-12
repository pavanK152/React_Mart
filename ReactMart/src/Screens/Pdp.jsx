import React from "react";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Components/ProductGrid";
import PdpComponent from "../Components/PdpComponent";
import { useParams } from "react-router";

const Pdp = () => {
  const { productId } = useParams();

  return (
    <>
      <Navbar />
      <PdpComponent id={productId} />
    </>
  );
};

export default Pdp;
