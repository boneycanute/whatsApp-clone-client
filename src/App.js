import React from "react";
import "./Components/styles.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent";
import ChatApp from "./ChatApp";
import WelcomePage from "./Components/WelcomePage";
import ChatArea from "./Components/ChatArea";
import OnlineUsers from "./Components/OnlineUsers";
import CreateGroup from "./Components/CreateGroup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="app" element={<ChatApp />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route
            path="chat"
            element={<ChatArea props={{ groupName: "GroupName" }} />}
          />
          <Route path="currentUsers" element={<OnlineUsers />} />

          <Route path="addGroup" element={<CreateGroup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
