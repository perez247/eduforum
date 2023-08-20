import React from "react";
import classes from "./Grouptab.module.css";


/**
 *
 * @param {object} props
 * @param {string} props.activeTab
 * @param {(tab: string) => {}} props.onChangeTab
 * @returns
 */
const GroupTab = (props) => {

  function changedTab(tab) {
    props.onChangeTab(tab);
  }

  return (
    <div className=" flex justify-start items-center px-4 overflow-auto">
      <div className={ (props.activeTab === "Chat" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")}  onClick={() => changedTab('Chat')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Chat
        </p>
      </div>
      <div className={(props.activeTab === "Overview" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")} onClick={() => changedTab('Overview')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Overview
        </p>
      </div>
      <div className={(props.activeTab === "Media" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")} onClick={() => changedTab('Media')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Media
        </p>
      </div>
      <div className={ (props.activeTab === "Events" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")} onClick={() => changedTab('Events')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Events
        </p>
      </div>
      <div className={ (props.activeTab === "Users" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")} onClick={() => changedTab('Users')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Users
        </p>
      </div>
      <div className={ (props.activeTab === "Challenges" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")} onClick={() => changedTab('Challenges')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Challenges
        </p>
      </div>
      <div className={ (props.activeTab === "Settings" ? "border-primary border-b-2 " : " " ) + ("py-2 px-5 flex items-center mr-8 gap-x-1 cursor-pointer hover:border-b-2 hover:border-primary")} onClick={() => changedTab('Settings')}>
        <p className="text-xs font-medium whitespace-nowrap text-black">
          Settings
        </p>
      </div>
    </div>
  );
};

export default GroupTab;
