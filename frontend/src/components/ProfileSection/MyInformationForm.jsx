import React, { useCallback, useRef } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Avatar,
    Button
  } from "@material-tailwind/react";

  import {
    ChevronDownIcon,
    ChevronUpIcon,
  } from "@heroicons/react/24/solid";
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

  return (
    <div className='flex flex-col md:flex-row w-full p-4 gap-10 items-center'>

        <div className='flex w-full md:w-[250px] flex-col justify-center items-center'>
            <div>
                <Avatar 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="avatar" 
                size="xxl" />
            </div>
            <div>
                23 followers
                22 following
            </div>
        </div>
        <div className='w-full'>
            <form ref={form}>
                <InputControl
                    display='Username'
                    id='username'
                    validation={(name) => name && name.trim().length > 0}
                    sendStatus={getControlStatus}
                    errorMessage='Username is required'
                    disabled={true}
                />

                <div className='flex w-full gap-10 flex-col md:flex-row'>
                    <InputControl
                        display='First Name'
                        id='first name'
                        validation={(name) => name && name.trim().length > 0}
                        sendStatus={getControlStatus}
                        errorMessage='First Name is required'
                    />
                    <InputControl
                        display='Last Name'
                        id='lastName'
                        validation={(name) => name && name.trim().length > 0}
                        sendStatus={getControlStatus}
                        errorMessage='Last Name is required'
                    />
                </div>
            </form>
            <Button className='bg-primary float-right'>Save</Button>
        </div>

    </div>
  )
}

export default MyInformationForm
