import { Autocomplete, Button, Container, TextField } from "@mui/material";
import { EVENT_DETAILS_URL, TITLE_EVENTS_URL } from "../../infra/urls";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsSearch({setEvents}) {

  const [eventTitle, setEventTitle] = useState([])
  const [selectedTitle, setSelectedTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(TITLE_EVENTS_URL)
      setEventTitle(response.data)
    }
    fetchData()
  }, [])

  const handleRenderInput = (params) => {
    return <TextField {...params} label="Event title" value={selectedTitle} 
      onChange={(e) => setSelectedTitle(e.target.value)}/>
}

  const handleSearch = async() => {
    const response = await axios.get(EVENT_DETAILS_URL, {params: {title: selectedTitle}})
    setEvents(response.data)
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
          <Button onClick={handleSearch} sx={{color:"#a5ebff", fontWeight: 700}}>Search</Button>
        </Container>
        </>
    )
}

