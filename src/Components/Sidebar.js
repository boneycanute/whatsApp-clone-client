import React, { useState } from "react";
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
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import { ThreeMp } from "@mui/icons-material";

function Sidebar() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(theme);
  return (
    <div className="sidebar-container">
      <div className={"Header" + theme}>
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

          <IconButton
            onClick={() => {
              // console.log("Previous Theme : ", theme);
              dispatch(toggleTheme());
              // console.log("Current Theme Theme : ", theme);
            }}
          >
            {theme === "-light" && <DarkModeIcon className="icon" />}
            {theme === "-dark" && <LightModeIcon className="icon" />}
          </IconButton>
        </div>
      </div>
      <div className={"Search" + theme}>
        <div className={"search-container" + theme}>
          <SearchIcon className="icon" />
          <input
            placeholder="Search or start a new chat"
            className="inputBox"
          />
        </div>
      </div>
      <div className={"Conversations" + theme}>
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
