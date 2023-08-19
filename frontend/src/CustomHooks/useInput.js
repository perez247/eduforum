import { useEffect, useState } from "react";

const useInput = (validation, sendStatus, id) => {

    const [value, setValue] = useState();
    const [isToched, setIsTouched] = useState(false);

    const valueIsValid = validation(value);
    let hasError = !valueIsValid && isToched;
    // console.log(valueIsValid, isToched, value, hasError);

    const valueChangeHandler = (value) => {
        setValue(value);
    }

    const valueTouchedHandler = (value = true) => {
        setIsTouched(value);
    }

    useEffect(() => {
        sendStatus({ hasError, value, id, valueChangeHandler, valueTouchedHandler });
    }, [value, hasError, sendStatus, id])


    return {
        value, hasError, valueChangeHandler, valueTouchedHandler
    }
}

export default useInput;