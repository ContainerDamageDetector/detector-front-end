import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginComponent from './components/login/login';
import HomeComponent from './components/home/home';
import ImageUploadComponent from './components/ImageUpload/imageUpload';
import DamageDetectedComponent from './components/DamageDetected/damageDetected';
import RecoverPriceComponent from './components/RecoverPrice/recoverPrice';
import DamageListComponent from './components/DamageDetected/damagesList';
import RecoverPriceListComponent from './components/RecoverPrice/recoverPriceList';
import RegisterComponent from './components/Register/register';
import { UserProvider } from './context/userContext';

export const authentication = {
  //checks if there is a value for accessToken
  getLoginInStatus() {
    var isLoggedIn = localStorage.getItem('accessToken');
    return !!isLoggedIn;
  },
};

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/" element={<HomeComponent />} />
            <Route path="/imageUpload" element={<ImageUploadComponent />} />
            <Route
              path="/viewDetectedDamages/:id"
              element={<DamageDetectedComponent />}
            />
            <Route
              path="/viewRecoverPrice/:id"
              element={<RecoverPriceComponent />}
            />
            <Route path="/viewDamageList" element={<DamageListComponent />} />
            <Route
              path="/viewRecoverPriceList"
              element={<RecoverPriceListComponent />}
            />
            <Route path="/createUser" element={<RegisterComponent />} />
          </Routes>

          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
    </Router>
  );
}

export default App;
