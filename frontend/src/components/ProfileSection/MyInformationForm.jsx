import React, { useCallback, useRef } from 'react'
import {
    Avatar,
    Button,
    Spinner,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import InputControl from '../Forms/InputControl';
import ConfirmAction from '../Modals/ConfirmAction';
import { useNavigate } from 'react-router-dom';
import { authUtility } from '../../Helpers/AuthUtility';

const MyInformationForm = () => {

    const navigate = useNavigate()

    const user = authUtility.getCurrentUser();
  
    if (!user) {
      authUtility.logOut();
      navigate('private');
    }

    const [isLoading, setIsLoading] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
    
    const [openModal, setOpenModal] = React.useState(false);

    const toggleModal = (state) => {
        setOpenModal(state)
      }

      const confirmed = (state) => {
        console.log(state);
        setOpenModal(false)
      }
    
    const formControl = {};
    const form = useRef();

    const getControlStatus = useCallback((data) => {
        formControl[data.id] = data;
        setIsDisabled(false);

        if (!data.value) {
            setIsDisabled(true);
        }

        for (const key in formControl) {
            if (formControl[key].hasError) {
                setIsDisabled(true);
            }
        }
    }, [formControl]);

    const updateInfo = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }

  return (
    <div className='flex flex-col md:flex-row w-full p-4 gap-10 items-start'>

        <div className='flex flex-col w-full md:w-[250px] justify-center items-center relative'>

        {
            user.type === 'institution' && <Menu>
                <MenuHandler>
                    <EllipsisVerticalIcon className='cursor-pointer w-5 h-5 text-white bg-tertiary absolute right-0 top-0' />
                </MenuHandler>
                <MenuList>
                    <MenuItem onClick={toggleModal.bind(null, true)} >Revoke affiliation</MenuItem>
                </MenuList>
            </Menu>
        }

            <div>
                <Avatar 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="avatar" 
                size="xxl" />
            </div>

            <div>

                <div className='flex gap-2 mt-3'>
                    <div className='flex flex-col text-xs items-center'><span className='font-bold'>23</span> <span>followers</span></div>
                    <div className='flex flex-col text-xs items-center'><span className='font-bold'>23</span> <span>following</span></div>
                </div>

                <Button size='sm' className='w-full mt-2'>Follow</Button>
            </div>
        </div>
        <div className='w-full'>
            <form ref={form}>
                <InputControl
                    display='Username'
                    id='username'
                    validation={[
                        {
                            validate: (name) => name && name.trim().length > 0,
                            errorMessage: 'Username is required'
                        }
                    ]}
                    sendStatus={getControlStatus}
                    disabled={true}
                />

                <div className='flex w-full md:gap-10 flex-col md:flex-row'>
                    <InputControl
                        display='First Name'
                        id='first name'
                        validation={[
                            {
                                validate: (name) => name && name.trim().length > 0,
                                errorMessage: 'First Name is required'
                            }
                        ]}
                        sendStatus={getControlStatus}
                    />
                    <InputControl
                        display='Last Name'
                        id='lastName'
                        validation={[
                            {
                                validate: (name) => name && name.trim().length > 0,
                                errorMessage: 'Last Name is required'
                            }
                        ]}
                        sendStatus={getControlStatus}
                    />
                </div>
            </form>
            <Button onClick={updateInfo} disabled={isLoading || isDisabled} className='bg-primary float-right flex gap-3'>
                Save
                {isLoading && <Spinner className='w-4 h-4' />}
            </Button>
        </div>
        <ConfirmAction 
                    open={openModal} 
                    toggleModal={toggleModal} 
                    confirmed={toggleModal}
                    header='Revoke Affiliation'
                    message='Are you sure you want to revoke this student, all groups created by this student will also be affected'
                    confirm='Yes revoke'
                />
    </div>
  )
}

export default MyInformationForm
