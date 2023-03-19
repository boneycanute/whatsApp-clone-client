import React from "react";
import Sidebar from "./Components/Sidebar";
import ChatArea from "./Components/ChatArea";
import "./Components/styles.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route
          path="/chat"
          element={
            <div className="main-container">
              <Sidebar />
              <ChatArea props={{ groupName: "GroupName" }} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
