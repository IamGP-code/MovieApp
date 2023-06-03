import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import { Button, CircularProgress } from '@mui/joy';



import Typography from '@mui/joy/Typography';

export default function BookingModal(props) {
  const [open, setOpen] = React.useState(false);
  const [submitButtonTitle, setSubmitButtonTitle] = React.useState("submit");
  const [done, setDone] = React.useState(false);






  return (
    <React.Fragment>
        <div className='confetti'>
       
        </div>
    
      <button className='booking' onClick={() => setOpen(true)}>Book Ticket</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Book ticket for  <span className='title'>{`"${props.movie.name}"`}</span> movie
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Fill in the information to book.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Movie Name</FormLabel>
                <Input autoFocus required value={props.movie.name} />
              </FormControl>
              
              <Button onClick={() => {
                setSubmitButtonTitle("Ticket Booked!");
                setDone(true);
               
                
            
            }}  sx={{ background: `${done ? 'green' : 'teal'}`, '&:hover': {
          background: `${done ? 'green' : 'teal'}`,
        },}}>{submitButtonTitle}</Button> 
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <style jsx>{
        `
        .booking {
            padding: 8px 10px;
            background: none;
            outline: none;
            border: 1px solid grey;
            border-radius: 5px;
            transition: all 400ms ease;
            margin-left: 20px;
          }

          .booking:hover {
            background: grey;
            color: white;
            cursor: pointer;
          }

          .title {
            color: teal;
            font-style: italic;
          }

      
        
        `
      }
      </style>
    </React.Fragment>
  );
}