import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loaderColor, setLoaderColor] = useState("#FFF");
  return (
    <div className="log_in">
      <form action="" method="post" className="login_form">
        <div className="Email form_element">
          <input type="email" placeholder="Email" />
        </div>
        <div className="Password form_element">
          <input type="password" placeholder="Password" />
        </div>
        <div className="submit form_element">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsClicked(true);
              setTimeout(() => {
                setIsClicked(false);
              }, 3000);
            }}
            onMouseMove={() => {
              setLoaderColor("#000");
            }}
            onMouseLeave={() => {
              setLoaderColor("#FFF");
            }}
            type="submit"
            className="signup_btn"
          >
            {isClicked === false ? (
              "Login"
            ) : (
              <ClipLoader color={loaderColor} size={10} />
            )}
          </button>
        </div>
      </form>

      <div className="dont_have_account">
        You don't have an account ?{" "}
        <Link to="/signup" className="signup_anchor">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
