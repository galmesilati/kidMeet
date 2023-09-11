import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import { CREATE_EVENT} from '../../infra/urls';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import { SetNotificationContext } from '../../context/notificationContext';
import { useContext } from 'react';
import * as urls from '../../infra/urls'


export default function NewEventModal({open, setOpen, editingEvent, setEditingEvent}) {
 

  const setNotification = useContext(SetNotificationContext)

  const [childId, setChildId] = React.useState([])
  const [title, setTitle] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [startEvent, setStartEvent] = React.useState(null)
  const [endEvent, setEndEvent] = React.useState(null)

  React.useEffect(() => {
    if (editingEvent) {
      setChildId(editingEvent.child_id)
      setTitle(editingEvent.title)
      setDescription(editingEvent.description)
      setStartEvent(dayjs(editingEvent.startEvent))
      setEndEvent(dayjs(editingEvent.endEvent))
    }
  }, [editingEvent])


  const handleSubmit = async (event) => {
    event.preventDefault()

    const eventData = {
      child_id: childId,
      title: title,
      location: location,
      description: description,
      start_event: dayjs(startEvent).format(),
      end_event: dayjs(endEvent).format()
    }
    
    console.log('Event Data:', eventData)

    try {
      if (editingEvent) {
        const response = await axios.patch(
          `${urls.UPDATE_EVENT}${editingEvent.event_id}/`,
           eventData
           )
        console.log('Response edit', response)
        setNotification({
          open: true,
          massage: 'Event updated successfully'
        })
        setEditingEvent(null)
      } else {
        const response = await axios.post(CREATE_EVENT, eventData)
        console.log('response create', response)
        setNotification({
          open: true,
          massage: "Event created successfully"
        })
      }
      handleClose()
      console.log("close after submit")
    } catch (error) {
      console.log('Error', error)
      setNotification({
        open: true,
        massage: "Error creating/editing the event. Please try again."
      });
    }
  }

  const handleClose = () => {
    setOpen(false);
    setEditingEvent(null)

    setChildId("")
    setTitle("")
    setLocation("")
    setDescription("")
    setStartEvent(null)
    setEndEvent(null)
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Event</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="child_id"
            label="Child ID"
            type="text"
            fullWidth
            variant="standard"
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField 
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'StaticDateTimePicker'
        ]}
      >
        <DemoItem label="Start Event">
        <StaticDateTimePicker
          id="start_event"
          value={startEvent}
          onChange={(newValue) => setStartEvent(newValue)}
          />
        </DemoItem>

        <DemoItem label="End Event">
        <StaticDateTimePicker
          id= "end_event"
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
