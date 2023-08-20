import React from "react";
// import classes from "./GroupHeading.module.css";
import GroupTab from "../GroupTab/Grouptab";

/**
 * @param {object} props
 * @param {string} props.headingIcon
 * @param {string} props.heading
 * @param {string} props.subHeading
 * @param {string} props.showTab
 * @returns 
 */
const GroupHeading = (props) => {
  return (
    <div className="bg-white w-full fixed border-b border-[#535860] z-10">
      <div className="px-6">
        <div className="flex items-center h-28 ps-14">
          <div className="felx-none w-14 h-14 me-3">
            {props.headingIcon}
          </div>
          <div className="felx-initial w-2/3 text-tertiary">
            <p className="text-xl font-bold">{props.heading}</p>
            <p className="text-xs">{props.subHeading}</p>
          </div>
          <div className="felx-initial w-14">
            {/* <PlusIcon className="h-7 w-7 bg-red-500 text-white font-extrabold"/> */}
          </div>
        </div>
        {props.showTab && (
          <div className="ps-8">
            <GroupTab />
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupHeading;
