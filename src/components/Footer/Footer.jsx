import React from 'react'
import MotivationalSection from './MotivationalSection'
import './Footer.css'
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <MotivationalSection />
        <div className='footer'>
        <div className="logo">
          <div>S</div>
          <div className="searchIcon">
            <FaSearch />
          </div>
          <div>L</div>
          <div>J</div>
        </div>
            <div className="rights">© 2025 <strong>SOLJ</strong>. All rights reserved</div>
        </div>
    </footer>
  )
}

export default Footer