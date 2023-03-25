import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateGroup() {
  const theme = useSelector((state) => state.theme.value);
  const nav = useNavigate();
  return (
    <div className={"createGroup-container" + theme}>
      <div className={"groupInputContainer" + theme}>
        <input
          placeholder="Enter Group Name"
          className={"group-name-input" + theme}
        />
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
