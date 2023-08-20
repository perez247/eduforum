import React, { useEffect, useState } from "react";
import GroupHeading from "../../../components/GroupHeading/GroupHeading";
import UserList from "../../../components/UserList/UserList";
import Pagination from "../../../components/Pagination/Pagination";
import { UsersIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Users as UserItems } from "../../../constants/users.js";

const Users = () => {
  const [ListItems, setListItems] = useState(UserItems);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [showButton, setShowButton] = useState(false);
  const [selectedRevokeUsers, setSelectedRevokeUsers] = useState([]);

  const paginatedUsers = (index) => {
    console.log(index);
  };

  const selectUser = (userId, isAdd) => {
    if (isAdd) {
      let users = selectedRevokeUsers;
      users.push(userId);
      setShowButton(true);
      setSelectedRevokeUsers([...users]);
    } else {
      let filterdUser = selectedRevokeUsers;
      const index = filterdUser.indexOf(userId);
      if (index > -1) {
        filterdUser.splice(index, 1);
      }
      console.log(filterdUser);
      filterdUser.length > 0 ? setShowButton(true) : setShowButton(false);
      setSelectedRevokeUsers([...filterdUser]);
    }
  };

  return (
    <div className="flex relative h-full flex-col">
      <GroupHeading
        heading={"University students"}
        subHeading={"List of all students of university of lagos"}
        showTab={false}
        headingIcon={<UsersIcon className="h-13 w-13 text-lg text-primary" />}
      />
      <div className="mt-32"></div>
      <div className="flex justify-between py-6">
        <div className="w-1/2">
          <Input label="Search by username" />
        </div>
        <div className="w-1/3 flex justify-end items-center">
          {showButton && (
            <Button className="border border-primary" variant="outlined">
              Revoke
            </Button>
          )}
        </div>
      </div>
      <UserList list={ListItems} checkBoxChecked={selectUser} hasCheckBox={true} />
      <div className="absolute bottom-0 w-full  overflow-auto items-center">
        <Pagination
          Datalength={ListItems.length}
          changedIndex={paginatedUsers}
          itemsPerPage={itemPerPage}
        />
      </div>
    </div>
  );
};

export default Users;
