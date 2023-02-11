import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loaderColor, setLoaderColor] = useState('#FFF');
  return (
    <div className="signUp">
      <form action="" method="post">
        <div className="first_name">
          <input type="text" placeholder="First name" />
        </div>
        <div className="last-name">
          <input type="text" placeholder="Last name" />
        </div>
        <div className="Email">
          <input type="email" placeholder="Email" />
        </div>
        <div className="Password">
          <input type="password" placeholder="Password" />
        </div>
        <div className="submit">
          <button
            onClick={(e) => {
                e.preventDefault()
                setIsClicked(true)
                setTimeout(() => {
                    setIsClicked(false)
                }, 3000)
            }}
            onMouseMove={() => {
                setLoaderColor('#000')
            }}
            onMouseLeave={() => {
                setLoaderColor('#FFF')
            }}
            type="submit"
            className="signup_btn"
          >
            {isClicked === false ? "Sign up" : <ClipLoader color={loaderColor} size={10}/>}
          </button>
        </div>
      </form>

      <div className="have_account">
        You already have an account ?{" "}
        <Link to="login" className="login_anchor">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
