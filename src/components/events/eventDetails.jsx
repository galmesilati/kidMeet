import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EVENT_DETAILS_URL } from "../../infra/urls"
import { Box, Container, Stack } from "@mui/material"

const EventDetails = () => {

  const {eventId} = useParams()
  const [event, setEvent] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${EVENT_DETAILS_URL}/${eventId}`)
      setEvent(response.data)
      
    }
    fetchData()
  }, [eventId])

  return(
    <>
        {event && 
        <Stack direction={'column'}>
          <p>{`Title: ${event.title}`}</p>
          <br/>
          <p>{`Description: ${event.description}`}</p>
          <br/>
          <p>{`Start_event: ${event.start_event}`}</p>
          <br/>
          <p>{`End_event: ${event.end_event}`}</p>

        </Stack>
    }
    
    </>
  )
}

export default EventDetails;