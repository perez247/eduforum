import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner,
  } from "@material-tailwind/react";

  import {
    } from "@material-tailwind/react";
import SelectControl from '../Forms/SelectControl';
import InputControl from '../Forms/InputControl';
import { useNavigate } from 'react-router-dom';

const AddGroupModal = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [affiliations, setAffiliations] = React.useState([]);

    const navigate = useNavigate();

    const addAfflication = (name) => {

        const found = affiliations.find(x => x === name);
        if (found) { return; }

        if (name.trim().length <= 0) { return; }

        setAffiliations(d => {
            const newD = [...d];
            newD.push(name);
            return newD;
        });
    }

    const removeAfflication = (name) => {

        setAffiliations(d => {
            return affiliations.filter(x => x !== name);
        });
    }
    
    const formControl = {};
    const form = React.useRef();
  
    const getControlStatus = React.useCallback((data) => {
        formControl[data.id] = data;
        setIsDisabled(false);
  
        if (!data.value) {
            setIsDisabled(true);
        }
  
        for (const key in formControl) {
            if (formControl[key].error) {
                setIsDisabled(true);
            }
        }
    }, [formControl]);
  
    const updateInfo = () => {
  
      const data = {};
  
      for (const key in formControl) {
        data[key] = formControl[key].value;
      }

      data['affiliations'] = affiliations;
  
      setIsLoading(true);
      setTimeout(() => {
          setIsLoading(false)
          console.log(data);
          navigate('/private/group/1')
          props.toggleModal(false);
      }, 3000);
    }

    
  return (
    <>
        <Dialog size='lg' open={props.open} handler={props.toggleModal.bind(null, false)}>
            <DialogHeader className='border-b-2 border-tertiary'>Create a group</DialogHeader>
            <DialogBody>

                <form ref={form}>

                <div className='mb-8'>
                    <InputControl
                        display='Name of group'
                        id='groupName'
                        validation={[
                            {
                            validate: (name) => name && name.trim().length > 0,
                            errorMessage: 'Group name is required'
                            }
                        ]}
                        sendStatus={getControlStatus}
                    />
                    </div>

                    <div className='flex w-full md:gap-5 flex-col md:flex-row'>
                        <SelectControl
                            display='Group affiliations'
                            id='affiliations'
                            validation={[]}
                            sendStatus={getControlStatus}
                            selected={addAfflication}
                        >
                            <option value=''>---</option>
                            <option value='Alabama' >Alabama</option>
                            <option value='Queens Land' >Queens Land</option>
                        </SelectControl>
                    </div>

                    <div className="flex gap-3">

                        {
                            affiliations.map((x, index) => <span onClick={removeAfflication.bind(null, x)} key={index} className="text-xs bg-black rounded-md p-[3px] text-white cursor-pointer">{x}</span>)
                        }
                    
                    </div>
                </form>

            </DialogBody>

            <DialogFooter className='border-t-2 border-tertiary'>
              <Button
                  variant="text"
                  color="red"
                  onClick={props.toggleModal.bind(null, false)}
                  className="mr-1"
              >
                  <span>Cancel</span>
              </Button>
              <Button onClick={updateInfo} disabled={isLoading || isDisabled} className='bg-primary flex gap-3'>
                  <span>Add</span>
                  {isLoading && <Spinner className='w-4 h-4' />}
              </Button>
            </DialogFooter>
        </Dialog>
    </>
  )
}

export default AddGroupModal
