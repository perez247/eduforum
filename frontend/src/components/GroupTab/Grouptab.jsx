import React from "react";
import classes from "./Grouptab.module.css";

const GroupTab = () => {
  return (
    <div className=" flex justify-start items-center px-4 overflow-auto">
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-primary hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Chat
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Overview
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Media
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Events
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Users
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Challenges
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Settings
        </p>
      </div>
    </div>
  );
};

export default GroupTab;
