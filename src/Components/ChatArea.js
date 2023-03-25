import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { IconButton } from "@mui/material";
import UserMessage from "./UserMessage";
import OthersMessage from "./OthersMessage";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

function ChatArea({ props }) {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="chat-container">
      <div className={"chat-header" + theme + " top-right"}>
        <div className="flex">
          <h1 className="group-icon2">{props.groupName[0]}</h1>
          <h1 className={"group-name2" + theme}>{props.groupName}</h1>
        </div>
        <div>
          <IconButton>
            <SearchIcon className="icon" />
          </IconButton>
          <IconButton>
            <EditIcon className="icon" />
          </IconButton>
        </div>
      </div>

      <div className={"text-area" + theme}>
        <UserMessage
          props={{
            name: "User1",
            message: "Dummy Message #1",
            timestamp: "12:00",
          }}
        />
        <OthersMessage
          props={{
            name: "User1",
            message: "Dummy Message #2",
            timestamp: "2:00",
          }}
        />
        <UserMessage
          props={{
            name: "User1",
            message: "Dummy Message #1",
            timestamp: "12:00",
          }}
        />
        <OthersMessage
          props={{
            name: "User1",
            message: "Dummy Message #2",
            timestamp: "2:00",
          }}
        />
        <UserMessage
          props={{
            name: "User1",
            message: "Dummy Message #1",
            timestamp: "12:00",
          }}
        />
        <OthersMessage
          props={{
            name: "User1",
            message: "Dummy Message #2",
            timestamp: "2:00",
          }}
        />
      </div>

      <div className={"chat-header" + theme + " bottom-right"}>
        <IconButton>
          <SentimentVerySatisfiedIcon className="icon" />
        </IconButton>
        <IconButton>
          <AttachFileIcon className="icon" />
        </IconButton>
        <div className="input-box-container">
          <input className="input-box" placeholder="Type a Message" />
        </div>
        <IconButton>
          <KeyboardVoiceIcon className="icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
