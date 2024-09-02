import "./LoginSignup.css";
import React, { useRef, useState } from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const LoginSignup = () => {
    const [loginsignup, setLoginSignup] = useState("Log in")
    const inp = useRef()
    function loginSignupFun(){
        if(loginsignup === "Log in"){
            inp.current.style.display = "block"
            setLoginSignup("Sign up")
        }else{
            inp.current.style.display = "none"
            setLoginSignup("Log in")
        }
    }
  return (
    <div className="loginsignup">
      <div class="form-container">
        <img src={logo} alt="Logo" className="logo"/>
        <p class="title">{loginsignup === "Log in" ? "Welcome Back" : "Sign Up"}</p>
        <form class="form">
        <input type="text" className="input" name="name" placeholder="Name" ref={inp}/>
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p class="page-link" >
            <span class="page-link-label">{loginsignup === "Log in" ? "Forgot Password?" : null}</span>
          </p>
          <Link class="form-btn" to="/home">{loginsignup === "Log in" ? "Log in" : "Create Account"}</Link>
        </form>
        <p class="sign-up-label">
          Don't have an account?<a class="sign-up-link" onClick={loginSignupFun}>{loginsignup === "Log in" ? "Sign Up" : "Log in"}</a>
        </p>
        <div class="buttons-container">
          <div class="google-login-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              x="0px"
              y="0px"
              class="google-icon"
              viewBox="0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
