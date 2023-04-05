import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Job from "./components/Job/Job";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./components/Chart/Chart";
import SignUp from "./components/Register/Signup/SignUp";
import Login from './components/Register/Login/Login'
import UnderDevelopment from "./components/UnderDevelopment";

function App() {
  const [isWantToRegester, seIsWantToRegestert] = useState(false)
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Job seIsWantToRegestert={seIsWantToRegestert}/>} />
          <Route path="/chart" element={<Chart seIsWantToRegestert={seIsWantToRegestert} isWantToRegester={isWantToRegester}/>} />
          <Route path="/signup" element={<SignUp seIsWantToRegestert={seIsWantToRegestert}/>} />
          <Route path="/login" element={<Login seIsWantToRegestert={seIsWantToRegestert}/>} />
          <Route path="/underdevelopment" element={<UnderDevelopment/>} />
        </Routes>
        <Footer isWantToRegester={isWantToRegester}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
