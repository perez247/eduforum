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

const GroupCard = (props) => {
  return (
    <Card className="mt-6 w-80 shadow-none border-2 border-tertiary">
      <CardHeader color="blue-gray" className="relative h-40">
        <img
          // src={props.group.image}
          src="https://images.unsplash.com/photo-1585564907580-02af7fa91cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80"
          alt={props.group.name}
        />
      </CardHeader>
      <CardBody>
        <span className='text-lg font-bold'>{props.group.name}</span>
        <span className='text-sm block'>
        {props.group.shortDescription}
        </span>
        {
          props.group.affiliates.map((x, index) => 
            <span key={index} className="text-xs bg-black rounded-md p-[3px] me-2 inline-block text-white">
              {x}
            </span>
          )
        }
      </CardBody>
      <CardFooter className="pt-0">
        <NavLink to={`/private/group/1`}>
          <Button className='bg-primary w-full'>View</Button>
        </NavLink>
      </CardFooter>
    </Card>
  )
}

export default GroupCard
