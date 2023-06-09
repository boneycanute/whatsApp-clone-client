import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SideBarItem({ props }) {
  const nav = useNavigate();
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className="sideBarItem-container"
      onClick={() => {
        nav("chat");
      }}
    >
      <h1 className="group-icon">{props.groupName[0]}</h1>
      <div className="info-elements">
        <div className="line-one">
          <h1 className={"group-name" + theme}>{props.groupName}</h1>
          <h1 className={"last-seen" + theme}>{props.lastSeen}</h1>
        </div>
        <div className="last-message-container">
          <h1 className={"last-message" + theme}>{props.lastMessage}</h1>
        </div>
      </div>
    </div>
  );
}

export default SideBarItem;
