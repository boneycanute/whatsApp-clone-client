import React from "react";
import "./styles.css";

function othersMessage({ props }) {
  return (
    <div className="othersMessage-container">
      <div className="message-box-right right-margin">
        <h1 className="chat-message">{props.message}</h1>
        <h1 className="chat-timeStamp ">{props.timestamp}</h1>
      </div>
    </div>
  );
}

export default othersMessage;
