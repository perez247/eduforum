import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    Spinner,
    Option
  } from "@material-tailwind/react";

  import {
    } from "@material-tailwind/react";
import SelectControl from '../Forms/SelectControl';
import InputControl from '../Forms/InputControl';

const AddEducationalItem = (props) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  
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

    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false)
        props.add(data);
        props.toggleModal(false);
    }, 3000);
  }


  return (
    <>
        <Dialog open={props.open} handler={props.toggleModal.bind(null, false)}>
            <DialogHeader className='border-b-2 border-tertiary'>Affiliate with an institution</DialogHeader>
            <DialogBody>

              <form ref={form}>

                <div className='flex w-full md:gap-10 flex-col md:flex-row'>
                  <SelectControl
                    display='Educational Institution'
                    id='educationInstitution'
                    validation={[
                      {
                        validate: (name) => name && name.trim().length > 0,
                        errorMessage: 'An Institution is required'
                      }
                    ]}
                    sendStatus={getControlStatus}
                  >
                    <Option value='Alabama' >Alabama</Option>
                    <Option value='Queens Land' >Queens Land</Option>
                  </SelectControl>

                  <InputControl
                        display='Email used in institution'
                        id='institutionEmail'
                        validation={[
                          {
                            validate: (name) => name && name.trim().length > 0,
                            errorMessage: 'Email is required'
                          },
                          {
                            validate: (name) => name && name.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                            errorMessage: 'Email is invalid'
                          }
                        ]}
                        sendStatus={getControlStatus}
                    />
                </div>

                <div className='flex w-full md:gap-10 flex-col md:flex-row'>
                  <InputControl
                      display='Level of study'
                      id='levelOfStudy'
                      validation={[
                        {
                          validate: (name) => name && name.trim().length > 0,
                          errorMessage: 'Level of study is required'
                        }
                      ]}
                      sendStatus={getControlStatus}
                  />
                  <InputControl
                      display='Course of study'
                      id='courseOfStudy'
                      validation={[
                        {
                          validate: (name) => name && name.trim().length > 0,
                          errorMessage: 'Course of study is required'
                        }
                      ]}
                      sendStatus={getControlStatus}
                  />
                </div>

                <div className='flex w-full md:gap-10 flex-col md:flex-row'>
                  <InputControl
                      display='Start Date'
                      id='startDate'
                      validation={[
                        {
                          validate: (date) => date && !isNaN(Date.parse(date)),
                          errorMessage: 'Date is invalid'
                        },
                        {
                          validate: (date) => { 
                            const endDate = formControl['endDate']?.value;
                            if (!endDate) { return true }

                            return new Date(endDate).getTime() > new Date(date).getTime();
                          },
                          errorMessage: 'End date cannot be less than end date'
                        }
                      ]}
                      sendStatus={getControlStatus}
                      type='date'
                  />
                  <InputControl
                      display='End Date'
                      id='endDate'
                      validation={[
                        {
                          validate: (date) => date && !isNaN(Date.parse(date)),
                          errorMessage: 'Date is invalid'
                        },
                        {
                          validate: (date) => { 
                            const startDate = formControl['startDate']?.value;
                            if (!startDate) { return true }
                            return new Date(startDate).getTime() < new Date(date).getTime();
                          },
                          errorMessage: 'Start date cannot be greater than end date'
                        }
                      ]}
                      sendStatus={getControlStatus}
                      type='date'
                  />
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

export default AddEducationalItem
