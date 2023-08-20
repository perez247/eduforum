import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * @param {object} props
 * @param {[]} props.list
 * @param {(data: boolean) => {}} props.checkBoxChecked
 * @param {boolean} props.hasCheckBox
 * @returns
 */
const UserList = (props) => {
  const handleCheckBoxEvent = (userId, event) => {
    props.checkBoxChecked(userId, event.target.checked);
  };

  return (
    <div className="w-full h-4/6 overflow-auto">
      <table className="table-auto w-full h-full">
        <thead>
          <tr>
            {props.hasCheckBox && (<th></th>)}
            {/* <th className="text-start">#</th> */}
            <th className="text-start">First name</th>
            <th className="text-start">Last name</th>
            <th className="text-start">Email</th>
            <th className="text-start">Username</th>
            {/* <th className="text-start">Is Active</th> */}
            <th className="text-start">Date Joined</th>
            {/* <th className="text-start">Last Login Date</th> */}
            
          </tr>
        </thead>
        <tbody>
          {props.list.map((user) => {
            return (
              <tr key={user.id} className="h-14">
                {props.hasCheckBox && (
                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="mr-5"
                      onClick={(e) => handleCheckBoxEvent(user.id, e)}
                    />
                  </td>
                )}
                {/* <td className="text-primary underline">{user.index}</td> */}
                <td className="text-primary underline">
                  <NavLink to={`/private/profile/${user.index}`}>
                    {user.firstName}
                  </NavLink>
                </td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                {/* <td>{user.isActive.toString()}</td> */}
                <td>{new Date(user.createdOn).toLocaleDateString('en-US')}</td>
                {/* <td>{user.lastLogInOn}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
