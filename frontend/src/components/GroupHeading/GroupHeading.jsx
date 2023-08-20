import React from "react";
// import classes from "./GroupHeading.module.css";
import GroupTab from "../GroupTab/Grouptab";
import { Chip } from "@material-tailwind/react";
import { AcademicCapIcon, PlusIcon } from "@heroicons/react/24/solid";

/**
 *
 * @param {object} props
 * @param {string} props.heading
 * @param {string} props.subHeading
 * @param {boolean} props.showTab
 * @param {component} props.headingIcon
 * @param {string} props.activeTab
 * @param {(tab: string) => {}} props.onChangeTab
 * @returns
 */
const GroupHeading = (props) => {
  const affiliation = Math.round(Math.random());

  const changedTab = (tab) => {
    props.onChangeTab(tab);
  }

  return (
    <div className="bg-white w-full fixed border-b border-[#535860] z-10">
      <div className="px-6">
        <div className="flex items-center h-28 ps-14">
          <div className="felx-none w-14 h-14 me-3">{props.headingIcon}</div>
          <div className="felx-initial w-2/3 text-tertiary">
            <p className="text-xl font-bold">{props.heading}</p>
            <p className="text-xs">{props.subHeading}</p>
            <div className="flex gap-2 mt-2 items-center">
              <span className="text-xs font-bold">Affiliations: </span>
              {affiliation === 0 && (
                <span className="text-xs bg-black rounded-md p-[3px] text-white">
                  Public
                </span>
              )}
              {affiliation === 1 && (
                <span className="text-xs bg-black rounded-md p-[3px] text-white">
                  Alabama
                </span>
              )}
            </div>
          </div>
          <div className="felx-initial w-14">
            {/* <PlusIcon className="h-7 w-7 bg-red-500 text-white font-extrabold"/> */}
          </div>
        </div>
        {props.showTab && (
          <div className="ps-8">
            <GroupTab activeTab={props.activeTab} onChangeTab={changedTab} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupHeading;
