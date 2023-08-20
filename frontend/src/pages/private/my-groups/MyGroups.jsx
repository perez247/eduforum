import React from 'react'
import {
    FunnelIcon,
    PlusIcon
  } from "@heroicons/react/24/solid";
import AddGroupModal from '../../../components/Modals/AddGroupModal';
import GroupList from '../../../components/GroupList/GroupList';

const MyGroups = (props) => {

    const [openModal, setOpenModal] = React.useState(false);

    const toggleAddGroup = (state) => {
      setOpenModal(state)
    }

  return (
    <>
        <div className='w-full border-b-2 border-tertiary my-8 flex justify-between'>
            <span className='text-4xl flex gap-4'>
                My Groups
                <PlusIcon onClick={toggleAddGroup.bind(null, true)}  className="h-7 w-7 bg-primary text-white font-extrabold cursor-pointer"/>
                <AddGroupModal open={openModal} toggleModal={toggleAddGroup} />
            </span>

            <FunnelIcon className="h-8 w-8 cursor-pointer text-tertiary" />
        </div>
        <GroupList />
    </>
  )
}

export default MyGroups
