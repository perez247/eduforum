import React from "react";
import classes from "./Grouptab.module.css";

const GroupTab = () => {
  return (
    <div className="border-b border-gray-400 flex justify-start items-center px-4 mb-6 overflow-auto">
      <div className="py-2 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-blue-1">
        <p className="text-sm font-medium whitespace-nowrap text-blue-1">
          Schoolyard Gossip
        </p>
      </div>
      <div className="py-2 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-blue-1">
        <p className="text-sm font-medium whitespace-nowrap text-blue-1">
          Colleagues
        </p>
      </div>
      <div className="py-2 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-blue-1">
        <p className="text-sm font-medium whitespace-nowrap text-blue-1">
          Schoolyard Gossip
        </p>
      </div>
      <div className="py-2 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-blue-1">
        <p className="text-sm font-medium whitespace-nowrap text-blue-1">
          Bulletin Board
        </p>
      </div>
      <div className="py-2 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-blue-1">
        <p className="text-sm font-medium whitespace-nowrap text-blue-1">
          The Commons
        </p>
      </div>
      <div className="py-2 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-blue-1">
        <p className="text-sm font-medium whitespace-nowrap text-blue-1">
          Save
        </p>
      </div>
    </div>
  );
};

export default GroupTab;
