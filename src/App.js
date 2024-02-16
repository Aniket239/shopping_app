import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/landing/landing";
import Footer from "./components/Footer/footer";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/login';
function App() {
    return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} /> // Define the login route
        </Routes>
        <Footer />
    </BrowserRouter>
            
            
    );
}

export default App;