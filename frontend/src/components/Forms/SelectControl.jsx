import React from 'react'
import useInput from '../../CustomHooks/useInput';
import { Select } from "@material-tailwind/react";

const SelectControl = (props) => {

    const { value, error, valueChangeHandler, valueTouchedHandler } = useInput(props.validation, props.sendStatus, props.id);

    const inputChangedHander = (event) => {
        valueChangeHandler(event.target.value);
        valueSelected(event);
    }

    const inputTouchedHandler = () => {
        valueTouchedHandler();
    }

    const valueSelected = (event) => {
        if (props.selected) {
            props.selected(event.target.value)
        }
    }

  return (
    <>
        <div className="border-solid border-2 bg-formArea flex w-full px-0 pt-0 pb-4 my-4 items-center relative">
            {!props.hideDisplay && <small className='absolute -top-5 left-2 font-bold text-tertiary'>{props.display}</small>}
            {props.prefix}
                <select
                disabled={props.disabled}
                placeholder={props.display}
                onChange={inputChangedHander} 
                onBlur={inputTouchedHandler}
                id={props.id}
                name={props.id}
                value={value}
                className={`flex-initial mx-1 w-full bg-white text-black ${error ? 'border-red-500' : ''} ${props.disabled ? 'bg-formArea' : ''} `}
                >
                    {props.children}
                </select>
            {props.postfix}
            {<small className={`text-red-400 left-1 absolute transition-all duration-100 ${error ? 'visible top-11' : 'invisible top-6'} `}>{error}</small>}
        </div>
    </>
  )
}

export default SelectControl
