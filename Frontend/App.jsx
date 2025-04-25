import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from './src/Components/Spinner';
import './App.css';


// Component imports
import { Register } from './src/Components/Register';
import { Login } from './src/Components/Login';
import Consultancy from './src/Components/Consultancy';
import { Facilities } from './src/Components/Facilities';
import { Aboutus } from './src/Components/Aboutus';
import { Home } from './src/Components/Home';
import LogOut from './src/Components/LogOut';
import FrontPage from './src/Components/FrontPage';
import Shop from './src/Components/Shop';
import Cart from './src/Components/Cart';
import HomeMedical from './src/Components/HomeMedical';

// Specialty Pages
import Dermatology from './src/Pages/Dermatology';
import Cardiology from './src/Pages/Cardiology';
import Orthopedics from './src/Pages/Orthopedics';
import Pediatrics from './src/Pages/Pediatrics';
import Gynecology from './src/Pages/Gynecology';
import Oncology from './src/Pages/Oncology';
import Gastroenterology from './src/Pages/Gastroenterology';
import Endocrionology from './src/Pages/Endocrionology';
import Ophthalmology from './src/Pages/Ophthalmology';
import Neurology from './src/Pages/Neurology';

// Video Call Pages
import HomePage from './src/Components/video_call/HomePage';
import RoomPage from './src/Components/video_call/RoomPage';

// Health Check Pages
import HealthCheck from './src/Pages/HealthCheck';
import Recommended from './src/Pages/Recommended';
import Diabetes from './src/Pages/Diabetes';
import Heart from './src/Pages/Heart';
import Special from './src/Pages/Special';
import Women from './src/Pages/Women';
import Senior from './src/Pages/Senior';
import PreConception from './src/Pages/PreConception';
import Cancer from './src/Pages/Cancer';
import GeneralHealth from './src/Pages/GeneralHealth';

// Utility and Dashboard
import Dashboard from './src/Pages/Dashboard';
import PDF from './src/Pages/PDF';
import Success from './src/Components/Success';
import Ambulance from './src/Pages/Ambulance';
import MapView from './src/Components/MapView';
import GoToMapButton from './src/Components/GoToMapButton';
import AdminRoute from './src/Pages/AdminRoute';
import DoctorRoute from './src/Pages/DoctorRoute';
import DoctorDashboard from './src/Pages/DoctorDashboard';
import AdminAddDoctor from './src/Pages/AdminAddDoctor';

import DoctorProfile from "./src/Pages/DoctorProfile";




// ChatBot
import ChatBot from './src/Components/ChatBot';
import './src/Components/Chatbot.css';
import { jwtDecode } from 'jwt-decode';

function App() {
  const { loading } = useSelector(state => state.alerts);
  const token = localStorage.getItem("token");

  let role = null;
  try {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  } catch (error) {
    console.error("Token decoding failed in app.jsx", error);
  }

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Routes>
            {/* Auth */}
            <Route
              path="/"
              element={
                token ? (
                  role === "doctor" ? (
                    <Navigate to={"/docDash"} />
                  ) : role === "admin" ? (
                    <Navigate to={"/dashboard"} />
                  ) : (
                    <FrontPage />
                  )
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />
            <Route path='/Home' element={token ? <Home /> : <Navigate to="/Login" />} />
            <Route path='/Login' element={token ? <Navigate to="/" /> : <Login />} />
            <Route path='/Register' element={token ? <Navigate to="/" /> : <Register />} />
            <Route path='/Logout' element={token ? <LogOut /> : <Navigate to="/Login" />} />

            {/* General Pages */}
            <Route path='/FrontPage' element={<FrontPage />} />
            <Route path='/Consultancy' element={<Consultancy />} />
            <Route path='/AboutUs' element={<Aboutus />} />
            <Route path='/Facilities' element={<Facilities />} />
            <Route path='/HomeMedical' element={<HomeMedical />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/ambulance' element={<Ambulance />} />

            {/* Video Call */}
            <Route path="/room/:roomId" element={<RoomPage />} />
            <Route path="/videoCall" element={<HomePage />} />
            <Route path="/roomcall" element={
              <DoctorRoute>
                <HomePage />
              </DoctorRoute>
            } />

            {/* Specialty */}
            <Route path="/dermatology" element={<Dermatology />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/orthopedics" element={<Orthopedics />} />
            <Route path="/pediatrics" element={<Pediatrics />} />
            <Route path="/gynecology" element={<Gynecology />} />
            <Route path="/neurology" element={<Neurology />} />
            <Route path="/oncology" element={<Oncology />} />
            <Route path="/gastroenterology" element={<Gastroenterology />} />
            <Route path="/endocrionology" element={<Endocrionology />} />
            <Route path="/ophthalmology" element={<Ophthalmology />} />

            {/* Health Checks */}
            <Route path='/healthcheck' element={<HealthCheck />} />
            <Route path='/healthcheck/Recommended' element={<Recommended />} />
            <Route path='/healthcheck/Diabetes' element={<Diabetes />} />
            <Route path='/healthcheck/Heart' element={<Heart />} />
            <Route path='/healthcheck/Special' element={<Special />} />
            <Route path='/healthcheck/Women' element={<Women />} />
            <Route path='/healthcheck/Senior' element={<Senior />} />
            <Route path='/healthcheck/PreConception' element={<PreConception />} />
            <Route path='/healthcheck/cancer-screening' element={<Cancer />} />
            <Route path='/healthcheck/GeneralHealth' element={<GeneralHealth />} />

            {/* Map and PDF */}
            <Route path='/success' element={<Success />} />
            <Route path='/nearby-hospitals' element={<GoToMapButton />} />
            <Route path='/mapview' element={<MapView />} />
            <Route path='/pdfgenerate' element={<PDF />} />

            {/* Dashboards */}
            <Route path='/dashboard' element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            } />

            <Route
              path="/addDoctor"
              element={
                <AdminRoute>
                  <AdminAddDoctor />
                </AdminRoute>
              } />

            <Route path='/docDash' element={
              <DoctorRoute>
                <DoctorDashboard />
              </DoctorRoute>
            } />

            <Route path='/DoctorProfile' element={
              <DoctorRoute>
                <DoctorProfile />
              </DoctorRoute>
            } />

            {/* Fallback */}
            <Route path='/not-authorized' element={<h1>Not Authorized to access this page</h1>} />
          </Routes>
          <ChatBot />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;


