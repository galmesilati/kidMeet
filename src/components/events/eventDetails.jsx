import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EVENT_DETAILS_URL } from "../../infra/urls"
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import { Event, Description, AccessTime, Schedule } from "@mui/icons-material"; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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
    <Container maxWidth="sm" textAlign="center">
        <Grid item xs={12} textAlign="center">
              <Stack spacing={'2%'} alignItems={'center'}>
              <img alt="children" style={{height: 'auto', width: "8em"}}
              src="data:image/png;base64,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"></img>
              <Typography variant="h4" color='secondary' sx={{fontWeight: 600}}>
                {event.title}
              </Typography>
              </Stack>
            </Grid>
            <br />
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack direction="column" spacing={2}>
          {event?.title && (
            <>
              <Grid container spacing={2} alignItems="center">
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <LocationOnOutlinedIcon fontSize="large" color="secondary" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" color='secondary'>{`Location: ${event.location}`}</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <Description fontSize="large" color="secondary" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" color='secondary'>{`Description: ${event.description}`}</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <AccessTime fontSize="large" color="secondary" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" color='secondary'>{`Start Event: ${new Date(event.start_event).toLocaleString()}`}</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <AccessTime fontSize="large" color="secondary" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" color='secondary'>{`End Event: ${new Date(event.end_event).toLocaleString()}`}</Typography>
                </Grid>
              </Grid>
            </>
          )}
        </Stack>
      </Paper>
    </Container>
          
  )
}

export default EventDetails;