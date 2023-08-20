import React, { useState } from "react";
import NavBarLogo from "../../../components/NavBarSection/NavBarLogo";
import LoginForm from "../../../components/LoginForm/LoginForm";
import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import { useNavigate } from 'react-router-dom';
import classes from './Auth.module.css';

const Auth = () => {
  let [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const changeViewState = (trigger) => {
    setShowRegister(trigger);
  };

  const navigateToUrl = (url) => {
    navigate(url);
  }

  return (
    <div className="w-full h-screen">
      <div class={classes.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>

      <div className="p-8">
        <NavBarLogo />
      </div>
      <div className="h-4/5 flex items-center m-auto w-full px-4 md-px-0 md:w-[600px] lg:w-[750px]">
        {showRegister ? (
          <RegisterForm showLogin={changeViewState} routeAfterRegistration={navigateToUrl} />
        ) : (
          <LoginForm showRegister={changeViewState} routeAfterLogin={navigateToUrl} />
        )}
      </div>
    </div>
  );
};

export default Auth;
