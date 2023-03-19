import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import "./App.css";

function ChatApp() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default ChatApp;
