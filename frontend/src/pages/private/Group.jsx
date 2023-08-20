import React, { useState } from "react";
import GroupHeading from "../../components/GroupHeading/GroupHeading";
import GroupBody from "../../components/GroupBody/GroupBody";
import GroupMedia from "../../components/GroupMedia/GroupMedia";
import Pagination from "../../components/Pagination/Pagination";
import UserList from "../../components/UserList/UserList";
import PageInProgress from "../../components/PageInProgress/PageInProgress";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Users } from "../../constants/users.js";

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
            Media: <GroupMedia />,
            Events: <PageInProgress />,
            Users: (
              <div className="h-[85vh] w-full">
                <UserList list={ListItems} hasCheckBox={false} />
                <div className="bottom-0 overflow-auto items-center w-full flex h-14">
                  <Pagination
                    Datalength={ListItems.length}
                    changedIndex={paginatedUsers}
                    itemsPerPage={itemPerPage}
                  />
                </div>
              </div>
            ),
            Challenges: <PageInProgress />,
          }[activeTab]
        }
      </div>
    </div>
  );
};

export default Group;
