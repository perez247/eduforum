import React from "react";
import ChatBubble from "../ChatBubble/ChatBubble";
import { PhotoIcon, GifIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { messages } from "../../constants/messages_mock";
import { COLOR_NAMES } from "../../constants/colors";

const GroupBody = () => {
  function generateColor() {
    const keys = Object.keys(COLOR_NAMES);
    const position = COLOR_NAMES[keys[(keys.length * Math.random()) << 0]];
    return position;
  }
  return (
    <div className="bg-white w-full pb-14 fixed h-screen ps-14 pe-50">
      <div className="h-4/6 overflow-auto">
        {messages.map((message) => {
          return (
            <ChatBubble
              key={message._id}
              name={message.name}
              message={message.message}
              color={generateColor()}
            />
          );
        })}
      </div>
      <div className="flex items-center h-1/6 w-full pe-28">
        <div className="border-solid border-2 bg-[#21262E] border-[#535860] flex w-9/12 px-3 py-2 rounded-md items-center">
          <PhotoIcon className="felx-none h-6 w-6 text-white mx-2" />
          <GifIcon className="felx-initial h-6 w-6 text-white mx-2" />
          <input
            placeholder="Message Curriculum Hub"
            name=""
            className="felx-initial mx-1 w-full bg-[#21262E] text-white border-0"
          />
          <FaceSmileIcon className="felx-initial h-6 w-6 text-white ms-4 mx-1" />
        </div>
      </div>
    </div>
  );
};

export default GroupBody;
