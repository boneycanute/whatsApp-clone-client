import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function OnlineUsers() {
  const nav = useNavigate();
  const [groups, setGroups] = useState([
    {
      name: "Test Group 1",
      count: "23",
    },
    {
      name: "Test Group 2",
      count: 2,
    },
  ]);
  return (
    <div className="onlineUsersContainer">
      <div className="availGroupContainer">
        <div className="title-text margin-bottom">Available Groups</div>
        {groups.map((value) => {
          return (
            <div className="groupList-container align-items-start">
              <h1 className="group-icon">{value.name[0]}</h1>
              <h1 className="title-text margin-left">{value.name}</h1>
              <button
                onClick={() => {
                  nav("/app/welcome");
                }}
                className="join-group-button"
              >
                Join
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
