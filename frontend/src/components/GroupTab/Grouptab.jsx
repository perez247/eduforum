import React from "react";
import classes from "./Grouptab.module.css";

const GroupTab = () => {
  return (
    <div className=" flex justify-start items-center px-4 overflow-auto">
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-red-500 hover:border-red-500">
        <p className="text-xs font-medium whitespace-nowrap text-white">
          Schoolyard Gossip
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-red-500">
        <p className="text-xs font-medium whitespace-nowrap text-white">
          Colleagues
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-red-500">
        <p className="text-xs font-medium whitespace-nowrap text-white">
          Bulletin Board
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-red-500">
        <p className="text-xs font-medium whitespace-nowrap text-white">
          The Commons
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-red-500">
        <p className="text-xs font-medium whitespace-nowrap text-white">
          Save the date
        </p>
      </div>
    </div>
  );
};

export default GroupTab;
