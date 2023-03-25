import React from "react";
import { useSelector } from "react-redux";
import Logo from "../images/whatsapp-svgrepo-com.svg";
import "./styles.css";

function WelcomePage() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={"welcome-contaioner" + theme}>
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
