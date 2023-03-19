import { margin } from "@mui/system";
import React from "react";
import SideBarItem from "./SideBarItem";
import "./styles.css";

function OnlineUsers() {
  return (
    <div className="onlineUsersContainer">
      <div className="availGroupContainer">
        <div className="title-text ">Available Groups</div>
      </div>
      <div className="onlineUsers">
        <div className="title-text ">Online users</div>
      </div>
    </div>
  );
}

export default OnlineUsers;
