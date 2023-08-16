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


export default function NewChildModal({open, setOpen}) {
 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Child</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="Name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Age"
            label="Age"
            type="float"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="kindergarten"
            label="kindergarten"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField 
            margin="dense"
            id="school"
            label="school"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField 
            autoFocus
            margin="dense"
            id="classroom"
            label="classroom"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
