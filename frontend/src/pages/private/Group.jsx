import React, { useState } from "react";
import GroupHeading from "../../components/GroupHeading/GroupHeading";
import GroupBody from "../../components/GroupBody/GroupBody";
import GroupMedia from "../../components/GroupMedia/GroupMedia";
import Pagination from "../../components/Pagination/Pagination";
import UserList from "../../components/UserList/UserList";
import PageInProgress from "../../components/PageInProgress/PageInProgress";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Users } from "../../constants/users.js";
import GroupOverview from "../../components/GroupOverview/GroupOverview";
import GroupUsers from "../../components/GroupUsers/GroupUsers";

const Group = () => {
  const [ListItems, setListItems] = useState(Users);
  const [activeTab, setActiveTab] = useState("Chat");
  const [itemPerPage, setItemPerPage] = useState(10);

  const onChangeTab = (tab) => {
    setActiveTab(tab);
  };
  const paginatedUsers = (index) => {
    console.log(index);
  };

  return (
    <div className=" fixed w-10/12 pe-20">
      <GroupHeading
        heading={"Curriculum Hub"}
        subHeading={"Lesson Plans, Templates and Inspiration"}
        showTab={true}
        headingIcon={
          <AcademicCapIcon className="h-13 w-13 text-lg text-primary" />
        }
        activeTab={activeTab}
        onChangeTab={onChangeTab}
      />
      <div className="pt-40">
        {
          {
            Chat: <GroupBody />,
            Media: <PageInProgress message='This will contains all images, videos and audio relating to this group' />,
            Events: <PageInProgress message='This will contains all previous and upcoming events' />,
            Overview: <GroupOverview />,
            Users: (
              <div className="h-[70vh] overflow-y-auto w-full">
                <GroupUsers />
              </div>
            ),
            Challenges: <PageInProgress message='This will contain online or offline activities that will engage group members and possibly give out rewards.' />,
            Settings: <PageInProgress  message='This will contain settings to make adjustments to the group in terms of updating the details of the group' />,
          }[activeTab]
        }
      </div>
    </div>
  );
};

export default Group;
