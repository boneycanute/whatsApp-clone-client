import React from "react";
import Logo from "../images/whatsapp-svgrepo-com.svg";
import "./styles.css";

function WelcomePage() {
  return (
    <div className="welcome-contaioner">
      <img src={Logo} alt="Logo" className="logo2" />
      <h1 className="welcomeText">Who'sApp</h1>
      <p className="welcomeParagraph">
        View and text directly to people present in the chat Rooms. No End to
        End Encryption but Fingers Crossed
      </p>
    </div>
  );
}

export default WelcomePage;
