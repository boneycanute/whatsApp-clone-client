import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/whatsapp-svgrepo-com.svg";
import "./styles.css";

function LoginComponent() {
  const nav = useNavigate();
  const [userName, setUserName] = useState("");
  const handleChange = (e) => {
    setUserName(e.target.value);
    // console.log(userName);
  };
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <input
        placeholder="Enter your Chat Name"
        onChange={handleChange}
        className="chat-name-input"
      />
      <button
        onClick={() => {
          nav("/app/welcome");
        }}
        className="enter-button"
      >
        Enter
      </button>
    </div>
  );
}

export default LoginComponent;
