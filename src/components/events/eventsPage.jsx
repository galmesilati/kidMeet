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
      <Typography sx={{color: '#b7e994'}} variant="h3">Events</Typography>
      <EventsSearch setEvents={setEvents}/>
    </Stack>
    
    
    <Stack direction={'row'} sx={{width: '100%'}}>
      <EventsList events={events} loadMore={fetchData}/>
      <Outlet />
    </Stack>

    <Fab aria-label="add" 
        sx={{position: 'absolute',bottom: 16, right: 16, backgroundColor: "#a5ebff"}}
        onClick={() => setOpenAddEventModal(true)}>
            <AddIcon sx={{fill: "white"}}/>
        </Fab>
        <NewEventModal open={openAddEventModal} setOpen={setOpenAddEventModal}/>
        
    </>
    
  )
  }

export default EventsPage;