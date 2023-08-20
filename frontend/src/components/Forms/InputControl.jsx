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
            <div className="relative mb-10 w-full">
                <Input 
                    disabled={props.disabled}
                    label={props.display} 
                    value={value} 
                    onChange={inputChangedHander} 
                    onBlur={inputTouchedHandler}
                    id={props.id}
                    name={props.id}
                    error={error ? true : false}
                    maxLength={maxLength}
                    type={type}
                    />
                {<small className={`text-red-400 absolute transition-all duration-100 ${error ? 'visible top-11' : 'invisible top-6'} `}>{error}</small>}
            </div>
        </>
    )
}

export default InputControl;