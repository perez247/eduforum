import React, { useState } from "react";
import { UserIcon, LockClosedIcon, EyeIcon } from "@heroicons/react/24/outline";
import RegisterAsUser from "./RegisterAsUser/RegisterAsUser";
import RegisterAsOrg from "./RegisterAsOrg/RegisterAsOrg";

const RegisterForm = (props) => {
  
  let [showRegisterAsUser, setShowRegisterAsUser] = useState(true);

  const changeViewState = (trigger) => {
    setShowRegisterAsUser(trigger);
  };

  function showLogin() {
    props.showLogin(false);
  }

  return (
    <>
      {
        showRegisterAsUser ? 
        <RegisterAsUser showLogin={showLogin} registerAsOrg={changeViewState} routeAfterRegistration={props.routeAfterRegistration}/> : 
        <RegisterAsOrg showLogin={showLogin} registerAsUser={changeViewState} routeAfterRegistration={props.routeAfterRegistration}/>
      }
    </>
  );
};

export default RegisterForm;
