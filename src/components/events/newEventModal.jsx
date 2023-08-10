import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';


export default function NewEventModal({open, setOpen}) {
 

  const handleClose = () => {
    setOpen(false);
  };

  const [startEvent, setStartEvent] = React.useState(null)
  const [endEvent, setEndEvent] = React.useState(null)

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Event</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="childId"
            label="Child ID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField 
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'MobileDateTimePicker'
        ]}
      >
        <DemoItem label="Start Event">
          <MobileDateTimePicker />
        </DemoItem>

        <DemoItem label="End Event">
          <MobileDateTimePicker />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
