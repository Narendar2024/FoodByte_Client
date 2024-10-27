// eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
import React from "react";
import LandingPage from "./FoodFusion/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductMenu from "./FoodFusion/components/ProductMenu";
=======
import React from 'react';
import LandingPage from './FoodFusion/pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductMenu from './FoodFusion/components/ProductMenu';
>>>>>>> e1d15860f011f6d08b1f7edeb4b50e75bd979ad4

const App = () => {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
      </Routes>
=======
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
      </Routes>

>>>>>>> e1d15860f011f6d08b1f7edeb4b50e75bd979ad4
    </div>
  );
};

export default App;
