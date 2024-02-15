import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/landing/landing";
import Footer from "./components/Footer/footer";
function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;