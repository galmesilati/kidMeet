import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EVENT_DETAILS_URL } from "../../infra/urls"
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material"

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
    <Stack direction="column" spacing={2}>
      {event?.title && (
        <>
          <p>{`Title: ${event.title}`}</p>
          <p>{`Description: ${event.description}`}</p>
          <p>{`Start_event: ${new Date(event.start_event).toLocaleString()}`}</p>
          <p>{`End_event: ${new Date(event.end_event).toLocaleString()}`}</p>
        </>
      )}
    </Stack>
  )
}

export default EventDetails;