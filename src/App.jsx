// eslint-disable-next-line no-unused-vars
import React from "react";
import LandingPage from "./FoodFusion/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductMenu from "./FoodFusion/components/ProductMenu";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
      </Routes>
    </div>
  );
};

export default App;
