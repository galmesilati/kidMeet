import axios from "axios";
import { useEffect, useState } from "react";
import { CHILD_EVENTS_URL } from "../../infra/urls";
import { Button, Stack, Typography } from "@mui/material";
import EventsSearch from "./eventsSearch";
import ChildEventsList from "./childEventsList";
import NewEventModal from "./newEventModal";
import AddIcon from '@mui/icons-material/Add';

const ChildEventsPage = () => {

  const [childEvents, setChildEvents] = useState([])
  const [openAddEventModal, setOpenAddEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null)

  const fetchChildEvents = async () => {
    try {
      const response = await axios.get(CHILD_EVENTS_URL)
        setChildEvents(response.data)
        console.log('Response', response.data.results)
    } catch (e) {
      console.error('Error', e)
    }
  }

  useEffect(() => {
    fetchChildEvents()
  }, [])

  const handleEditClick = (event) => {
    setEditingEvent(event)
    setOpenAddEventModal(true)
  }

  return(
    <>
      <Stack alignItems='center'>
        <Typography color={'primary'} variant="h3">
          Child Events
        </Typography>
        <Button  sx={{width: '100%'}} color="secondary" onClick={() => {setOpenAddEventModal(true)}}>
        <Stack direction={'row'} spacing={'2%'}>
              <Typography sx={{width: '10em'}} >
                Add New Event   
              </Typography>  
              <AddIcon /> 
            </Stack>
        </Button>
        <EventsSearch setEvents={setChildEvents} childEventsMode={true}/>
      </Stack>
      
      <ChildEventsList childEvents={childEvents} handleEditClick={handleEditClick}/>
      <NewEventModal
        open={openAddEventModal}
        setOpen={setOpenAddEventModal}
        editingEvent={editingEvent}
        setEditingEvent={setEditingEvent}
        />
   
    </>
   

  )
}

export default ChildEventsPage;