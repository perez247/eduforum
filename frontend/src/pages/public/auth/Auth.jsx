import React, { useState } from "react";
import NavBarLogo from "../../../components/NavBarSection/NavBarLogo";
import LoginForm from "../../../components/LoginForm/LoginForm";
import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import { useNavigate } from 'react-router-dom';

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
      <div className="p-8">
        <NavBarLogo />
      </div>
      <div className="h-4/5 flex justify-center items-center">
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
