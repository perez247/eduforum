import React from "react";
import Avatar from "react-avatar";

const ChatBubble = (props) => {
  return (
    <div className="flex items-center h-24">
      <div className="felx-none w-14 h-14 rounded-full me-3">
        <Avatar
          size="55"
          color={props.color}
          name={props.name}
          round={true}
        />
      </div>
      <div className="felx-initial w-2/3 text-black">
        <p className="text-sm font-bold">{props.name}</p>
        <p className="text-xs w-100">
            {props.message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
