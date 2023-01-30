import React, {useState, useEffect} from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div class="navbar">
      <div class="logo-list">
        <div class="logo">
          <div>S</div>
          <div className="searchIcon">
            <FaSearch />
          </div>
          <div>L</div>
          <div>J</div>
        </div>
        <div class="list">
          <h3 class="list-item">Home</h3>
          <h3 class="list-item">Chart</h3>
        </div>
      </div>
      <div class="registeration">
        <button class="login register">Log in</button>
        <button class="signup register">Sign up</button>
      </div>
      <div class="menu">
        <FiMenu />
      </div>

      <div className="menu-list">
        <h5 class="menu-list-item">Chart</h5>
        <h5 class="menu-list-item">Home</h5>
        <div class="menu-list-reg">
          <button class="login register">Log in</button>
          <button class="signup register">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
