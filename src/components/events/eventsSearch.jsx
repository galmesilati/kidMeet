import { Autocomplete, Button, Container, TextField } from "@mui/material";
import { CHILD_EVENTS_URL, EVENT_DETAILS_URL, TITLE_EVENTS_URL } from "../../infra/urls";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsSearch({setEvents, childEventsMode= false}) {

  const [eventTitle, setEventTitle] = useState([])
  const [selectedTitle, setSelectedTitle] = useState('')

  const url = childEventsMode ? CHILD_EVENTS_URL : EVENT_DETAILS_URL

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(TITLE_EVENTS_URL)
      setEventTitle(response.data)
    }
    fetchData()
  }, [childEventsMode])

  const handleRenderInput = (params) => {
    return <TextField {...params} label="Event title" value={selectedTitle} 
      onChange={(e) => setSelectedTitle(e.target.value)}/>
}

  const handleSearch = async() => {
    try {
      const response = await axios.get(url, {params: {title: selectedTitle}})
      setEvents(response.data)
    } catch (e) {
      console.error('Error', e)
    }
  }
    return(
        <>
        <Container
        component={'form'} 
        onSubmit={(e) => {e.preventDefault()}}
        sx={{marginTop: '1em', display: 'flex'}}>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={eventTitle}
            sx={{ width: 300 }}
            renderInput={handleRenderInput}
            value={selectedTitle}
            onChange={(e, newValue) => {
              setSelectedTitle(newValue)
            }}
          />
          <Button color="secondary" onClick={handleSearch} sx={{fontWeight: 700}}>Search</Button>
        </Container>
        </>
    )
}

