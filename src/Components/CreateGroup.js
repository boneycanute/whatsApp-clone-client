import React from "react";
import { useNavigate } from "react-router-dom";

function CreateGroup() {
  const nav = useNavigate();
  return (
    <div className="createGroup-container">
      <div className="groupInputContainer">
        <input placeholder="Enter Group Name" className="group-name-input " />
        <button
          onClick={() => {
            nav("/app/welcome");
          }}
          className="chat-create-button"
        >
          Create Group
        </button>
      </div>
    </div>
  );
}

export default CreateGroup;
