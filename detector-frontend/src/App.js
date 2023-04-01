import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./components/login/login.js";
import HomeComponent from "./components/home/home.js";
import ImageUploadComponent from "./components/ImageUpload/imageUpload.js";
import DamageDetectedComponent from "./components/DamageDetected/damageDetected.js";
import RecoverPriceComponent from "./components/RecoverPrice/recoverPrice.js";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginComponent />}></Route>
          <Route exact path="/" element={<HomeComponent />}></Route>
          <Route exact path="/imageUpload" element={<ImageUploadComponent />}></Route>
          <Route exact path="/viewDetectedDamages" element={<DamageDetectedComponent />}></Route>
          <Route exact path="/viewRecoverPrice" element={<RecoverPriceComponent />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
