import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./components/login/login.js";
import HomeComponent from "./components/home/home.js";
import ImageUploadComponent from "./components/ImageUpload/imageUpload.js";
import DamageDetectedComponent from "./components/DamageDetected/damageDetected.js";
import RecoverPriceComponent from "./components/RecoverPrice/recoverPrice.js";
import DamageListComponent from "./components/DamageDetected/damagesList.js";

export const authentication = {
  getLoginInStatus() {
    var isLoggedIn = localStorage.getItem("accessToken");
    return !!isLoggedIn
  },
};

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
          <Route exact path="/viewDamageList" element={<DamageListComponent />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
