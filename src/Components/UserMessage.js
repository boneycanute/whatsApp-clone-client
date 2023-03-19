import React from "react";
import "./styles.css";

function userMessage({ props }) {
  return (
    <div className="userMessage-container">
      <h1 className="chat-userIcon">{props.name[0]}</h1>
      <div className="message-box">
        <h1 className="chat-userName">{props.name}</h1>
        <h1 className="chat-message">{props.message}</h1>
        <h1 className="chat-timeStamp">{props.timestamp}</h1>
      </div>
    </div>
  );
}

export default userMessage;
