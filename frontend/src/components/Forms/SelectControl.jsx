import React from 'react'
import useInput from '../../CustomHooks/useInput';
import { Select } from "@material-tailwind/react";

const SelectControl = (props) => {

    const { value, error, valueChangeHandler, valueTouchedHandler } = useInput(props.validation, props.sendStatus, props.id);

    const inputChangedHander = (event) => {
        valueChangeHandler(event);
    }

    const inputTouchedHandler = () => {
        valueTouchedHandler();
    }

  return (
    <>
        <div className="relative mb-10 w-full">
            <Select 
                disabled={props.disabled}
                label={props.display} 
                onChange={inputChangedHander} 
                onBlur={inputTouchedHandler}
                id={props.id}
                name={props.id}
                error={error ? true : false}
                value={value} 
            >
                {props.children}
            </Select>
            {<small className={`text-red-400 absolute transition-all duration-100 ${error ? 'visible top-11' : 'invisible top-6'} `}>{error}</small>}
        </div>
    </>
  )
}

export default SelectControl
