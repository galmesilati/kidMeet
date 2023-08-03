import { useEffect, useState } from "react"
import * as urls from "../../infra/urls"
import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom"
import EventsSearch from "./eventsSearch"
import EventsList from "./eventsList"
import { Button, Stack } from "@mui/material"

const EventsPage = () => {

  const navigate = useNavigate()
  const [events, setEvents] = useState({results:[]})

  
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
    <h2>Events page</h2>
    <EventsSearch />
    
    <Stack direction={'row'}>
      <EventsList events={events} loadMore={fetchData}/>
      <Outlet />
    </Stack>
    </>
    
  )
  }

export default EventsPage;