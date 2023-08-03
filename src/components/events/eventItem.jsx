import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"


export default function EventItem({myEvent}){

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('bla')
    navigate(`/events/${myEvent.id}`)
  }
  return(
    <ListItem sx={{height: '500px'}}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={`${myEvent.title} ${myEvent.location}`}/>
      </ListItemButton>
    </ListItem>

  )
}
