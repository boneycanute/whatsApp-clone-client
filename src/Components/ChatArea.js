import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { IconButton } from "@mui/material";

function ChatArea({ props }) {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="flex">
          <h1 className="group-icon2">{props.groupName[0]}</h1>
          <h1 className="group-name2">{props.groupName}</h1>
        </div>
        <div>
          <IconButton>
            <SearchIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="text-area"></div>
      <div className="chat-header">
        <div className="flex">
          <IconButton>
            <SentimentVerySatisfiedIcon className="icon" />
          </IconButton>
          <IconButton>
            <AttachFileIcon className="icon" />
          </IconButton>
          <input class="input-box" placeholder="Type a Message" />
          <IconButton>
            <KeyboardVoiceIcon className="icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
