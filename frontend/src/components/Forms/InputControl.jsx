import { Input } from "@material-tailwind/react";
import useInput from "../../CustomHooks/useInput";

const InputControl = props => {
    
    const maxLength = props.maxLength ? props.maxLength : 100;

    const { value, error, valueChangeHandler, valueTouchedHandler } = useInput(props.validation, props.sendStatus, props.id);

    const inputChangedHander = (event) => {
        valueChangeHandler(event.target.value);
    }

    const inputTouchedHandler = () => {
        valueTouchedHandler();
    }

    const type = props.type ? props.type : 'text';

    return (
        <>
        <div className="border-solid border-2 bg-formArea flex w-full px-0 pt-0 pb-4 my-4 items-center relative">
            {!props.hideDisplay && <small className='absolute -top-5 left-2 font-bold text-tertiary'>{props.display}</small>}
            {props.prefix}
                <input
                disabled={props.disabled}
                type={type}
                placeholder={props.display}
                onChange={inputChangedHander} 
                onBlur={inputTouchedHandler}
                id={props.id}
                name={props.id}
                maxLength={maxLength}
                value={value}
                className={`flex-initial mx-1 w-full bg-white text-black ${error ? 'border-red-500' : ''} ${props.disabled ? 'bg-formArea' : ''} `}
                />
            {props.postfix}
            {<small className={`text-red-400 left-1 absolute transition-all duration-100 ${error ? 'visible top-11' : 'invisible top-6'} `}>{error}</small>}
        </div>
        </>
    )
}

export default InputControl;