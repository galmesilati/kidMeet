import { useEffect, useState } from "react"
import * as urls from "../../infra/urls"
import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom"
import EventsSearch from "./eventsSearch"
import EventsList from "./eventsList"
import { Button, Stack, Fab, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import NewEventModal from "./newEventModal"

const EventsPage = () => {

  const navigate = useNavigate()
  const [events, setEvents] = useState({results:[]})

  const [openAddEventModal, setOpenAddEventModal] = useState(false);

  const fetchData = async () => {
    let urlToSend = urls.KIDMEET_LIST_URL
    if (events.results.length > 0){
      urlToSend = events.next
    }
      try {
          const response = await axios.get(urlToSend)
          console.log('response',response)
          setEvents({
            ...events,
            next: response.data.next,
            results: [...events.results, ...response.data.results]
          })
      } catch (e) {
          console.error(e)
      }
  }


    useEffect(
      () => {
          fetchData()
      }
    ,[]
)
  return(
    <>
    <Stack alignItems='center'>
      <Typography color={'primary'} variant="h3">Events</Typography>
      <Button  sx={{width: '100%'}} color="secondary" onClick={() => {setOpenAddEventModal(true)}}>
        <Stack direction={'row'} spacing={'2%'}>
              <Typography sx={{width: '10em'}} >
                Add New Event   
              </Typography>  
              <AddIcon /> 
            </Stack>
        </Button>
      <EventsSearch setEvents={setEvents}/>
    </Stack>
    
    
    
    <Stack direction={'row'} sx={{width: '100%'}}>
      <EventsList events={events} loadMore={fetchData}/>
      <Outlet />
    </Stack>
{/* 
    <Fab aria-label="add" 
        sx={{position: 'absolute',bottom: 16, right: 16}}
        onClick={() => setOpenAddEventModal(true)}>
            <AddIcon color="primary"/>
        </Fab> */}
        <NewEventModal open={openAddEventModal} setOpen={setOpenAddEventModal}/>
        
    </>
    
  )
  }

export default EventsPage;