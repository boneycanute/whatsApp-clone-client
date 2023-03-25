import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function OnlineUsers() {
  const theme = useSelector((state) => state.theme.value);
  const nav = useNavigate();
  const [names, setNames] = useState([
    {
      name: "Test Person 1",
      count: "23",
    },
    {
      name: "Test Person 2",
      count: 2,
    },
  ]);
  return (
    <div className={"onlineUsersContainer" + theme}>
      <div className={"availGroupContainer" + theme}>
        <div className="title-text margin-bottom">Online Users</div>
        {names.map((value) => {
          return (
            <div className="groupList-container align-items-start">
              <h1 className="group-icon">{value.name[0]}</h1>
              <h1 className="title-text margin-left">{value.name}</h1>
              <button
                onClick={() => {
                  nav("/app/chat");
                }}
                className="join-group-button"
              >
                Chat
              </button>
            </div>
          );
        })}
      </div>
      {/* <div className="onlineUsers">
        <div className="title-text ">Online users</div>
      </div> */}
    </div>
  );
}

export default OnlineUsers;
