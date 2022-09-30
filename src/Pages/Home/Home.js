// import React from "react";
import Header from "../../components/Header/Header";
import movie from "../../movieImg.jpg";
import {
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../service/Firebase";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerClicked, setRegisterClicked] = useState(false);


  return (

    <div>
      <Header />
      <div className="home">
        <div className="leftBox">
          {/* <img src={movie} alt="" /> */}
          <HomeCarousel />
        </div>
        <div className="rightBox">
          <h2 style={{textAlign:'center'}}>Welcome To </h2>
          <h2> Entertainment Hub </h2>
          <p className="para">
            Watch latest trailer of movies and series here ...
          </p>
          {registerClicked ? (
            <div className="Form">
              <span className="login">Register</span>
              <input
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                onClick={() => {
                  registerWithEmailAndPassword(name, email, password);
                }}
                className="button"
              >
                Register
              </button>
              <div
                onClick={() => setRegisterClicked(false)}
                className="para"
                style={{ cursor: "pointer" }}
              >
                Already User ? Login here ...
              </div>
            </div>
          ) : (
            <div className="Form">
              <span className="login">Login</span>
              <input
                type="email"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button
                type="submit"
                onClick={() => {
                  signInWithEmailAndPassword(loginEmail, loginPassword);
                }}
                className="button"
              >
                Login
              </button>
              <div
                onClick={() => setRegisterClicked(true)}
                className="para"
                style={{ cursor: "pointer" }}
              >
                New user ? Register here ...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
