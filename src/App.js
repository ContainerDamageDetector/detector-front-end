import React from "react";
import "./App.css";
import { Routes ,Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginComponent from "./components/login/login.js";
import HomeComponent from "./components/home/home.js";
import DamageDetectedComponent from "./components/DamageDetected/damageDetected.js";
import ImageUploadComponent from "./components/ImageUpload/imageUpload.js";
import RecoverPriceComponent from "./components/RecoverPrice/recoverPrice.js";



function App() {

  const user = { name: null, loggedIn: false }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginComponent/>}></Route>
          <Route exact path="/" element={<HomeComponent/>}></Route>
          <Route exact path="/damageDetected" element={<DamageDetectedComponent/>}></Route>
          <Route exact path="/imageUpload" element={<ImageUploadComponent/>}></Route>
          <Route exact path="/recoverPrice" element={<RecoverPriceComponent/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;