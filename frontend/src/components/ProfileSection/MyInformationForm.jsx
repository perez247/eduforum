import React, { useCallback, useRef } from 'react'
import {
    Avatar,
    Button,
    Spinner
  } from "@material-tailwind/react";

import InputControl from '../Forms/InputControl';

const MyInformationForm = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
    
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
        console.log(formControl);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }

  return (
    <div className='flex flex-col md:flex-row w-full p-4 gap-10 items-start'>

        <div className='flex w-full md:w-[250px] justify-center items-center'>
            <div>
                <Avatar 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="avatar" 
                size="xxl" />
            </div>
            {/* <div>
                23 followers
                22 following
            </div> */}
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

    </div>
  )
}

export default MyInformationForm
