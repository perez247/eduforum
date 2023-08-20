import { useEffect, useState } from "react";

const useInput = (validation, sendStatus, id) => {

    const [value, setValue] = useState();
    const [isToched, setIsTouched] = useState(false);

    let error = null;

    const validate = () => {
        validation.every(x => {
            const valueIsValid = x.validate(value);
            if (!valueIsValid && isToched) {
                error = x.errorMessage;
                return false;
            }
            return true;
        });
    }

    // const valueIsValid = validation(value);
    // hasError = !valueIsValid && isToched;
    validate();

    const valueChangeHandler = (value) => {
        setValue(value);
    }

    const valueTouchedHandler = (value = true) => {
        setIsTouched(value);
    }

    useEffect(() => {
        sendStatus({ error, value, id, valueChangeHandler, valueTouchedHandler });
    }, [value, error, sendStatus, id])


    return {
        value, error, valueChangeHandler, valueTouchedHandler
    }
}

export default useInput;