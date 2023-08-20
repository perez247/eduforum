import React from "react";
import { UserIcon, LockClosedIcon, EyeIcon } from "@heroicons/react/24/outline";
import InputControl from "../Forms/InputControl";
import { Spinner } from "@material-tailwind/react";
import { userLogin } from "../../constants/login";

import { toast } from "react-toastify";

/**
 * @param {object} props
 * @param {(data) => {}} props.showRegister
 * @param {(data) => {}} props.routeAfterLogin
 * @returns 
 */
const LoginForm = (props) => {

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

  const login = () => {

    const data = {};

    for (const key in formControl) {
      data[key] = formControl[key].value;
    }

      setIsLoading(true);
      const id = setTimeout(() => {

          const user = userLogin.find(a => a.email === data.username.toLowerCase());

          if (!user) {
            toast.error('Invalid credentials');
            setIsLoading(false);
            clearInterval(id)
            return;
          }

          // This is not the right approach we wanted to use but due to time we choose this
          // Section that will use this includes 
          // Side bar 
          // Profile
          localStorage.setItem('user', JSON.stringify(user));


          setIsLoading(false);
          props.routeAfterLogin('/private/explore');
      }, 2000);
  }

  function showRegistration() {
    props.showRegister(true);
  }

  return (
    <div className="bg-white shadow-lg shadow-primary/50 w-full p-5 rounded-lg">
      <h1 className="text-3xl my-1">Login</h1>
      <p className="text-sm my-1">Welcome to EduForum</p>
      <form action="">
        <InputControl 
            prefix={<UserIcon className="flex-none h-6 w-6 text-black ms-1 me-2" />}
            display='Input your username or email'
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
      </form>
      <div className="w-full py-2 mt-4 rounded-md items-center flex justify-center">
        <button disabled={isLoading || isDisabled} className="w-full h-9 font-bold bg-primary text-white rounded-md flex gap-3 justify-center items-center" onClick={login}>
          Login
          {isLoading && <Spinner className='w-4 h-4' />}
        </button>
      </div>
      <div className="w-full py-2 mt-2 rounded-md items-center flex justify-between">
        <p className="text-primary cursor-pointer">Forgot password?</p>
        <p className="text-primary cursor-pointer" onClick={showRegistration}>
          Sign up
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
