import React, {useState, useEffect} from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState('none')
  return (
    <div className="navbar">
      <div className="logo-list">
        <div className="logo">
          <div>S</div>
          <div className="searchIcon">
            <FaSearch />
          </div>
          <div>L</div>
          <div>J</div>
        </div>
        <div className="list">
          <Link to="/" className="link">
          <h3 className="list-item">Home</h3>
          </Link>
          <Link to="/chart" className="link">
          <h3 className="list-item">Chart</h3>
          </Link>
        </div>
      </div>
      <div className="registeration">
        <Link to="/login">
        <button className="login register">Log in</button>
        </Link>
        <Link to="/signup">
        <button className="signup register">Sign up</button>
        </Link>
      </div>
      <div className="menu" onClick={() => {
        toggle === 'none' ? setToggle('block') : setToggle('none')
      }}>
        <FiMenu />
      </div>

      <div className="menu-list" style={{display: `${toggle}`}}>
      <Link to="/" className="link-menu link">
          <h3 className="list-item">Home</h3>
          </Link>
          <Link to="/chart" className="link-menu link">
          <h3 className="list-item">Chart</h3>
          </Link>
        <div className="menu-list-reg">
          <button className="login register">Log in</button>
          <button className="signup register">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
