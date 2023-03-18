import React from "react";
import Sidebar from "./Components/Sidebar";
import ChatArea from "./Components/ChatArea";
import "./Components/styles.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Sidebar />
        <ChatArea props={{ groupName: "GroupName" }} />
      </div>
    </div>
  );
}

export default App;
