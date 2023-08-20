import React from 'react'
import { Users } from '../../constants/users';
import { NavLink } from 'react-router-dom';

const GroupUsers = () => {
    
    const [ListItems, setListItems] = React.useState(Users);

    return (
    <div className="w-full h-full">
        <table className="table-auto w-full h-full">
          <thead>
            <tr>
              <th className="text-start">First name</th>
              <th className="text-start">Last name</th>
              <th className="text-start">Position</th>
              <th className="text-start">Username</th>
              <th className="text-start">Date Joined</th>
              
            </tr>
          </thead>
          <tbody>
            {ListItems.map((user) => {
              return (
                <tr key={user.id} className="h-14">
                  <td className="text-primary underline">
                    <NavLink to={`/private/profile/${user.index}`}>
                      {user.firstName}
                    </NavLink>
                  </td>
                  <td>{user.lastName}</td>
                  <td>
                    { !user.status && <span className="text-xs bg-black rounded-md p-[3px] me-2 inline-block text-white">Member</span> }
                    { user.status && 
                        user.status.map((a, index) => <span key={index} className="text-xs bg-black rounded-md p-[3px] me-2 inline-block text-white">{a}</span>)
                    }

                  </td>
                  <td>{user.username}</td>
                  <td>{new Date(user.createdOn).toLocaleDateString('en-US')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
}

export default GroupUsers
