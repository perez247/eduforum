import React from "react";
import classes from "./Grouptab.module.css";

const GroupTab = () => {
  return (
    <div className=" flex justify-start items-center px-4 overflow-auto">
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer border-b-2 border-primary hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Schoolyard Gossip
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Colleagues
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Bulletin Board
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          The Commons
        </p>
      </div>
      <div className="py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary">
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Save the date
        </p>
      </div>
    </div>
  );
};

export default GroupTab;
