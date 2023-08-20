import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

const ConfirmAction = (props) => {
  return (
    <>
        <Dialog size='lg' open={props.open} handler={props.toggleModal.bind(null, false)}>
            <DialogHeader className='border-b-2 border-tertiary'>{props.header}</DialogHeader>
            <DialogBody>
                {props.message}
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
              <Button onClick={props.confirmed.bind(null, true)} className='bg-primary flex gap-3'>
                  {props.confirm}
              </Button>
            </DialogFooter>
        </Dialog>
    </>
  )
}

export default ConfirmAction
