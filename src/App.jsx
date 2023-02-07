import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Job from "./components/Job/Job";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./components/Chart/Chart";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Job />} />
      <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
