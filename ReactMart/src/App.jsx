import React from "react";
import Home from "./Screens/Home";
import Pdp from "./Screens/Pdp";
import Cart from "./Screens/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<Pdp />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
