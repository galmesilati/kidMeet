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
import axios from 'axios';
import { CREATE_EVENT } from '../../infra/urls';


export default function NewEventModal({open, setOpen}) {
 

  const handleClose = () => {
    setOpen(false);
  };

  const [startEvent, setStartEvent] = React.useState(null)
  const [endEvent, setEndEvent] = React.useState(null)

  const handleSubmit = async () => {
    const eventData = {
      childId: document.getElementById('child_ids').value,
      title: document.getElementById('title').value,
      location: document.getElementById('location').value,
      description: document.getElementById('description').value,
      startEvent: startEvent,
      endEvent: endEvent
    }
    console.log('eventData', eventData)

    try {
      const response = await axios.post(CREATE_EVENT, eventData)
      console.log('response', response)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Event</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="child_ids"
            label="Child ID"
            type="text"
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
          <MobileDateTimePicker
          value={startEvent}
          onChange={(newValue) => setStartEvent(newValue)}
          />
        </DemoItem>

        <DemoItem label="End Event">
          <MobileDateTimePicker 
          value={endEvent}
          onChange={(newValue) => setEndEvent(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
