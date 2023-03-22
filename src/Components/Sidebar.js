import React from "react";
import "./styles.css";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import SideBarItem from "./SideBarItem";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className="Header">
        <div className="avatar">
          <IconButton
            onClick={() => {
              navigate("/app/welcome");
            }}
          >
            <AccountCircleIcon className="icon left" />
          </IconButton>
        </div>
        <div className="other-options">
          <IconButton
            onClick={() => {
              navigate("/app/currentUsers");
            }}
          >
            <PersonIcon className="icon" />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("/app/available-groups");
            }}
          >
            <GroupsIcon className="icon" />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("/app/addGroup");
            }}
          >
            <AddBoxIcon className="icon" />
          </IconButton>

          <IconButton>
            <DarkModeIcon className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="Search">
        <div className="search-container">
          <SearchIcon className="icon" />
          <input
            placeholder="Search or start a new chat"
            className="inputBox"
          />
        </div>
      </div>
      <div className="Conversations">
        <SideBarItem
          props={{
            image: "",
            groupName: "Test Group1",
            lastMessage: "Last Message",
            lastSeen: "Yesterday",
          }}
        />
        <SideBarItem
          props={{
            image: "",
            groupName: "Test Group2",
            lastMessage: "Last Message2",
            lastSeen: "Today",
          }}
        />
        <SideBarItem
          props={{
            image: "",
            groupName: "Test Group3",
            lastMessage: "Last Message3",
            lastSeen: "Someday",
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
