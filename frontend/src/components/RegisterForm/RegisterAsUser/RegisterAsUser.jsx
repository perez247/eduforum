import React from 'react'
import { UserIcon, LockClosedIcon, EyeIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import InputControl from '../../Forms/InputControl';
import { Spinner } from '@material-tailwind/react';


const RegisterAsUser = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
    
    const formControl = {};
    const form = React.useRef();

    const getControlStatus = React.useCallback((data) => {
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

    const register = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            props.routeAfterRegistration('/private/explore');
        }, 3000);
    }

  return (
    <div className="bg-white shadow-lg shadow-primary/50 w-full p-5 rounded-lg">
        <h1 className="text-3xl my-1">Register</h1>
        <p className="text-sm my-1">Regiser into EduForum as a User</p>
        <form action="">
            <InputControl 
                prefix={<UserIcon className="flex-none h-6 w-6 text-black ms-1 me-2" />}
                display='Input your username'
                id='username'
                validation={[
                    {
                        validate: (name) => name && name.trim().length > 0,
                        errorMessage: 'Username is required'
                    }
                ]}
                sendStatus={getControlStatus}
                hideDisplay={true}
            />
            <InputControl 
                prefix={<AtSymbolIcon className="flex-none h-6 w-6 text-black ms-1 me-2" />}
                display='Input your email'
                id='email'
                type='email'
                validation={[
                    {
                        validate: (name) => name && name.trim().length > 0,
                        errorMessage: 'Email is required'
                    },
                    {
                      validate: (name) => name && name.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                      errorMessage: 'Email is invalid'
                    }
                ]}
                sendStatus={getControlStatus}
                hideDisplay={true}
            />
            <InputControl 
                prefix={<LockClosedIcon className="flex-none h-6 w-6 text-black ms-1 me-2" />}
                postfix={<EyeIcon className="flex-initial h-6 w-6 text-black ms-2 mx-1" />}
                display='Input your password'
                id='password'
                type='password'
                validation={[
                    {
                        validate: (name) => name && name.trim().length > 0,
                        errorMessage: 'password is required'
                    }
                ]}
                sendStatus={getControlStatus}
                hideDisplay={true}
            />
            <InputControl 
                prefix={<LockClosedIcon className="flex-none h-6 w-6 text-black ms-1 me-2" />}
                display='Retype password'
                id='password'
                type='password'
                validation={[
                    {
                        validate: (name) => name && name.trim().length > 0,
                        errorMessage: 'password is required'
                    }
                ]}
                sendStatus={getControlStatus}
                hideDisplay={true}
            />
        </form>
      <div className="w-full py-2 mt-4 rounded-md items-center flex justify-center">
        <button onClick={register} disabled={isLoading || isDisabled} className="w-full h-9 font-bold bg-primary text-white rounded-md flex gap-3 justify-center items-center">
            Register
            {isLoading && <Spinner className='w-4 h-4' />}
        </button>
      </div>
      <div className="w-full py-2 mt-2 rounded-md items-center flex justify-between">
      <p className="text-primary cursor-pointer" onClick={props.registerAsOrg.bind(null, false)}>
          Register as an Institution
        </p>
        <p className="text-primary cursor-pointer" onClick={props.showLogin}>
          Have an account?
        </p>
      </div>
    </div>
  )
}

export default RegisterAsUser
