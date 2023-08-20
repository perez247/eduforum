import React from 'react'
import { useGetGroupsQuery } from '../../store/apis/groupApi';
import { Spinner } from '@material-tailwind/react';
import {
    FaceFrownIcon
  } from "@heroicons/react/24/solid";
import GroupCard from '../GroupCard/GroupCard';

const GroupList = () => {

    const {data, error, isFetching} = useGetGroupsQuery({ userId: '' });

    if (isFetching) {
        return <div className='w-full flex justify-center'><Spinner className='w-20 h-20' /></div>
    }

    if (error) {
        return <div className='w-full flex justify-center text-3xl text-red-500'>
            Failed to fetch data
        </div>
    }

    if (data.length <= 0) {
        return <div className='w-full flex justify-center text-3xl items-center gap-3'>
            <FaceFrownIcon className='w-8 h-8 text-primary' /> No groups found
        </div>
    }


    return (
        <div className='flex flex-wrap gap-5 py-8'>
            {
                data.map((x, index) => <GroupCard key={index} group={x} />)
            }
        </div>
    )
}

export default GroupList
