import React from "react";
import "./styles.css";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import SideBarItem from "./SideBarItem";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="Header">
        <div className="avatar">
          <IconButton>
            <AccountCircleIcon className="icon left" />
          </IconButton>
        </div>
        <div className="other-options">
          <IconButton>
            <GroupsIcon className="icon" />
          </IconButton>
          <IconButton>
            <DonutLargeIcon className="icon" />
          </IconButton>
          <IconButton>
            <ChatIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon" />
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
