import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

const GroupCard = () => {
  return (
    <Card className="mt-6 w-96 shadow-none border-2 border-tertiary">
      <CardHeader color="blue-gray" className="relative h-40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <span className='text-lg font-bold block'>UI/UX Review Check</span>
        <span className='text-sm'>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot;
        </span>
      </CardBody>
      <CardFooter className="pt-0">
        <NavLink to={`/private/group/1`}>
          <Button className='bg-primary'>View</Button>
        </NavLink>
      </CardFooter>
    </Card>
  )
}

export default GroupCard
